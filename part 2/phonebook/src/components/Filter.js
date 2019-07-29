import React from "react";

const Filter = ({ searchName, handleSearchChange }) => {
  return (
    <div>
      filter with
      <input value={searchName} onChange={handleSearchChange} />
    </div>
  );
};

export default Filter;
