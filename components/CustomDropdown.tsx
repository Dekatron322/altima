import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onSelect: (option: string) => void;
  disabled?: boolean;
  isOpen: boolean;
  toggleDropdown: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onSelect,
  disabled = false,
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div className="mt-3">
      <label className="text-sm text-white">{label}</label>
      <div
        className="relative h-[46px] w-full rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3 hover:border-[#1B5EED4D] focus-within:border-[#1B5EED4D] focus-within:bg-[#FBFAFC] max-sm:mb-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex h-[46px] items-center justify-between">
          <span className="text-sm text-white">{value || `Select ${label}`}</span>
          <svg
            className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414l-5.293 5.293A1 1 0 013.293 9.293l6-6A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && !disabled && (
          <div className="absolute top-[50px] left-0 w-full z-10 rounded-lg bg-[#1B1B1B] border border-[#FFFFFF1A] shadow-lg">
            {options.map((option) => (
              <div
                key={option}
                className={`px-3 py-2 text-sm text-white hover:bg-[#1B5EED4D] cursor-pointer ${
                  value === option ? 'bg-[#1B5EED4D]' : ''
                }`}
                onClick={() => {
                  onSelect(option);
                  toggleDropdown(); // Close the dropdown after selection
                }}
              >
                {option}
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
