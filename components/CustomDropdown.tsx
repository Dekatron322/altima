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
      <label className={`text-sm ${disabled ? 'text-gray-500' : 'text-white'}`}>{label}</label>
      <div
        className={`relative h-[46px] w-full rounded-lg border-[#FFFFFF1A] border px-3 max-sm:mb-2 cursor-pointer ${
          disabled
            ? 'bg-[#282828] opacity-45 cursor-not-allowed' // Disabled styles
            : ' bg-[#282828] hover:border-[#1B5EED4D] focus-within:border-[#1B5EED4D] focus-within:bg-[#FBFAFC]'
        }`}
        onClick={() => {
          if (!disabled) toggleDropdown();
        }}
      >
        <div className="flex h-[46px] items-center justify-between">
          <span className={`text-sm ${disabled ? 'text-gray-500' : 'text-white'}`}>
            {value || `Select ${label}`}
          </span>
          <svg
  className={`w-4 h-4 transition-transform ${
    isOpen ? 'rotate-180' : ''
  } ${disabled ? 'text-gray-500' : 'text-white'}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path
    fillRule="evenodd"
    d="M10 12a1 1 0 01-.707-.293l-6-6a1 1 0 011.414-1.414L10 9.586l5.293-5.293A1 1 0 0117.707 5.293l-6 6A1 1 0 0110 12z"
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
