import React, { useState } from 'react';

interface Props {
  label: string;
  initial: number;
  options: any[];
  callback: (index: number) => void;
}

const CustomSelect = ({ label, initial, options, callback }: Props) => {
  const [selected, setSelected] = useState<number>(initial);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const setDropdownItem = (e: React.MouseEvent<HTMLLIElement>) => {
    let target = e.target as HTMLLIElement;
    let index = parseInt(target.dataset.index!);

    setSelected(index);
    toggleOpen();
    callback(index);
  };

  return (
    <div className="custom-select">
      <button
        title="Open sorting method options"
        className="custom-select-button"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleOpen}
      >
        <span className="custom-select-label">{label}:</span>
        <span className="custom-select-value">{options[selected]}</span>
      </button>
      <ul
        className={`custom-select-dropdown ${isOpen ? 'open' : ''}`}
        tabIndex={-1}
        role="listbox"
        aria-activedescendant={options[selected]}
      >
        {options.map((option, index) => (
          <li
            className="custom-select-option"
            onClick={setDropdownItem}
            key={index}
            data-index={index}
            tabIndex={0}
            role="option"
            aria-selected={selected === index}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
