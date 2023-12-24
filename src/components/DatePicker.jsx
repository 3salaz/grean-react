import React, { useRef, useState } from "react";

function DatePicker() {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
      <input type="date" onChange={handleChange} ref={dateInputRef} />
      <p>Selected Date: {date}</p>
    </div>
  );
}

export default DatePicker;
