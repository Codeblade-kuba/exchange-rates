import React, { useEffect, useRef, useState } from 'react';

import PropsInterface from './types/Props';
import './index.scss';

const CustomSelect = ({
  id,
  label,
  initial,
  options,
  callback,
}: PropsInterface) => {
  const [selected, setSelected] = useState<number>(initial);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const customSelect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(initial);
  }, [initial]);

  const openDropdown = () => {
    if (isOpen) {
      closeDropdown();
      return;
    }
    setIsOpen(true);
    window.addEventListener('click', clickHandle);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const clickHandle = (e: any) => {
    if (customSelect.current?.contains(e.target)) {
      return;
    }
    closeDropdown();
  };

  const setDropdownItem = (e: React.MouseEvent<HTMLLIElement>) => {
    let target = e.target as HTMLLIElement;
    let index = parseInt(target.dataset.index!);

    setSelected(index);
    closeDropdown();
    callback(index);
  };

  return (
    <div
      className="custom-select"
      data-testid="custom-select"
      ref={customSelect}
    >
      <button
        title="Open sorting method options"
        className="custom-select-button"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={openDropdown}
      >
        <span id={`#${id}-title`} className="custom-select-label">
          {label}:
        </span>
        <span className="custom-select-value">{options[selected]}</span>
      </button>
      <ul
        aria-labelledby={`#${id}-title`}
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
