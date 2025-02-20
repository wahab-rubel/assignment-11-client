import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

const DatePicker = ({ onSelectDate }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    onSelectDate(ranges.selection);
  };

  return (
    <div className="p-4">
      <DateRange
        ranges={dateRange}
        onChange={handleSelect}
        minDate={new Date()} 
        rangeColors={["#3b82f6"]}
      />
    </div>
  );
};

export default DatePicker;
