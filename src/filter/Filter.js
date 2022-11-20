import React, { useState } from "react";

const Filter = ({ setQuery }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </form>
    </div>
  );
};

export default Filter;
