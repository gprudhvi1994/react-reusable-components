import React from "react";
import "./SelectDropdown.css";

const SelectDropdown = ({ label, name, options, value, onChange }) => {
  return (
    <div className="select-wrapper">
      <label htmlFor={name} className="custom-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="custom-select"
        value={value}
        onChange={onChange}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.toLowerCase().replace(" ", "_")}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
