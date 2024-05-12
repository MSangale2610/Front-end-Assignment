// Checkbox.js
import React from 'react';

function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox border-gray-400 rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
      />
      <span className={`text-lg ${checked ? 'line-through' : ''}`}>{label}</span>
    </label>
  );
}

export default Checkbox;