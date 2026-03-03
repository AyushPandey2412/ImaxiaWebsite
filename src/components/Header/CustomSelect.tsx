// import React, { useState, useEffect } from "react";

// const CustomSelect = ({ options }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     toggleDropdown();
//   };

//   useEffect(() => {
//     // closing modal while clicking outside
//     function handleClickOutside(event) {
//       if (!event.target.closest(".dropdown-content")) {
//         toggleDropdown();
//       }
//     }

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="dropdown-content custom-select relative" style={{ width: "200px" }}>
//       <div
//         className={`select-selected whitespace-nowrap ${
//           isOpen ? "select-arrow-active" : ""
//         }`}
//         onClick={toggleDropdown}
//       >
//         {selectedOption.label}
//       </div>
//       <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
//         {options.slice(1, -1).map((option, index) => (
//           <div
//             key={index}
//             onClick={() => handleOptionClick(option)}
//             className={`select-item ${
//               selectedOption === option ? "same-as-selected" : ""
//             }`}
//           >
//             {option.label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomSelect;













import React, { useState, useEffect } from "react";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-content")) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-content relative w-[200px]">
      <div
        className={`select-selected whitespace-nowrap flex items-center justify-between h-[40px] px-4 text-sm bg-gray-1 border border-gray-3 rounded-l-[5px] cursor-pointer ${
          isOpen ? "select-arrow-active" : ""
        }`}
        onClick={toggleDropdown}
      >
        {selectedOption.label}
      </div>

      <div
        className={`select-items absolute left-0 top-full w-full bg-white border border-gray-3 rounded-md mt-1 shadow-md z-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        {options.slice(1).map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-1 ${
              selectedOption.value === option.value ? "bg-gray-1 font-medium" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
