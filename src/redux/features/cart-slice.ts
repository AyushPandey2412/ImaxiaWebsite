// import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

// type InitialState = {
//   items: CartItem[];
// };

// type CartItem = {
//   id: number;
//   title: string;
//   price: number;
//   discountedPrice: number;
//   quantity: number;
//   imgs?: {
//     thumbnails: string[];
//     previews: string[];
//   };
// };

// const initialState: InitialState = {
//   items: [],
// };

// export const cart = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItemToCart: (state, action: PayloadAction<CartItem>) => {
//       const { id, title, price, quantity, discountedPrice, imgs } =
//         action.payload;
//       const existingItem = state.items.find((item) => item.id === id);

//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
//         state.items.push({
//           id,
//           title,
//           price,
//           quantity,
//           discountedPrice,
//           imgs,
//         });
//       }
//     },
//     removeItemFromCart: (state, action: PayloadAction<number>) => {
//       const itemId = action.payload;
//       state.items = state.items.filter((item) => item.id !== itemId);
//     },
//     updateCartItemQuantity: (
//       state,
//       action: PayloadAction<{ id: number; quantity: number }>
//     ) => {
//       const { id, quantity } = action.payload;
//       const existingItem = state.items.find((item) => item.id === id);

//       if (existingItem) {
//         existingItem.quantity = quantity;
//       }
//     },

//     removeAllItemsFromCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const selectCartItems = (state: RootState) => state.cartReducer.items;

// export const selectTotalPrice = createSelector([selectCartItems], (items) => {
//   return items.reduce((total, item) => {
//     return total + item.discountedPrice * item.quantity;
//   }, 0);
// });

// export const {
//   addItemToCart,
//   removeItemFromCart,
//   updateCartItemQuantity,
//   removeAllItemsFromCart,
// } = cart.actions;
// export default cart.reducer;



import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  items: CartItem[];
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

// const STORAGE_KEY = "__cart__v1__";
const STORAGE_KEY = "A7QX9FJ8B0M2RZC5D4KPHW1E";

const SECRET = "A9x#Qp2!Lm7@ZrE5WbF0CkH8D$S";

// lightweight encode/decode
const encode = (data: any) => {
  const json = JSON.stringify(data);
  const mixed = json
    .split("")
    .map((c, i) =>
      String.fromCharCode(c.charCodeAt(0) ^ SECRET.charCodeAt(i % SECRET.length))
    )
    .join("");
  return btoa(mixed);
};

const decode = (data: string) => {
  try {
    const mixed = atob(data);
    const json = mixed
      .split("")
      .map((c, i) =>
        String.fromCharCode(c.charCodeAt(0) ^ SECRET.charCodeAt(i % SECRET.length))
      )
      .join("");
    return JSON.parse(json);
  } catch {
    return [];
  }
};

const loadFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  return decode(raw);
};

const saveToStorage = (items: CartItem[]) => {
  if (typeof window === "undefined") return;
  const encoded = encode(items);
  localStorage.setItem(STORAGE_KEY, encoded);
};

const initialState: InitialState = {
  items: loadFromStorage(),
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price, quantity, discountedPrice, imgs } =
        action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id,
          title,
          price,
          quantity,
          discountedPrice,
          imgs,
        });
      }

      saveToStorage(state.items);
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      saveToStorage(state.items);
    },

    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
        saveToStorage(state.items);
      }
    },

    removeAllItemsFromCart: (state) => {
      state.items = [];
      saveToStorage(state.items);
    },
  },
});

export const selectCartItems = (state: RootState) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) => {
  return items.reduce((total, item) => {
    return total + item.discountedPrice * item.quantity;
  }, 0);
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  removeAllItemsFromCart,
} = cart.actions;

export default cart.reducer;
