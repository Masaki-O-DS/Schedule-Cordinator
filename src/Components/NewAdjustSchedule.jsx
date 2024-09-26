import { DateCalendar } from "@mui/x-date-pickers";
import "./NewAdjustSchedule";

const NewAdjustSchedule = () => {
  return (
    <div>
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
    </div>
  );
};

export default NewAdjustSchedule;
