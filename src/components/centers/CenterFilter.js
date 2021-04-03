import React, { useContext, useState } from "react";
import CenterContext from "../../context/center/centerContext";

const CenterFilter = () => {
  const centerContext = useContext(CenterContext);
  const { filterCenters } = centerContext;

  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    filterCenters(e.target.value);
  };

  return (
    <form>
      <input
        value={value}
        type='text'
        placeholder='Search for patient center or doctor...'
        onChange={onChange}
      />
    </form>
  );
};

export default CenterFilter;
