// select and unselect multiple checkbox together by clicking on 'selectall' checkbox.

import { useState } from "react";

const CheckboxGroup = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName],
    });
  };

  const handleSelectAllChange = () => {
    const allChecked = Object.values(checkboxes).every((value) => value);
    const newCheckboxesState = {};

    for (const key in checkboxes) {
      newCheckboxesState[key] = !allChecked;
    }

    setCheckboxes(newCheckboxesState);
  };

  const checkboxData = [
    { name: "checkbox1", label: "Checkbox 1" },
    { name: "checkbox2", label: "Checkbox 2" },
    { name: "checkbox3", label: "Checkbox 3" },
    { name: "checkbox4", label: "Checkbox 4" },
    { name: "checkbox5", label: "Checkbox 5" },
  ];

  const allChecked = Object.values(checkboxes).every((value) => value);

  return (
    <div>
      <input
        type="checkbox"
        checked={allChecked}
        onChange={handleSelectAllChange}
      />
      <label>Select All</label>

      {checkboxData.map((checkbox, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={checkboxes[checkbox.name]}
            onChange={() => handleCheckboxChange(checkbox.name)}
          />
          <label>{checkbox.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
