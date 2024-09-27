import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Top from "./Components/Top";
import NewAdjustSchedule from "./Components/NewAdjustSchedule";
import CheckSchedule from "./Components/CheckSchedule";
import SelfScheduleForm from "./Components/SelfScheduleForm";
import OpenScheduleList from "./Components/OpenScheduleList";
import OtherUserScheduleForm from "./Components/OtherUserScheduleForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Top isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route path="/newadjustschedule" element={<NewAdjustSchedule />} />
          <Route path="/checkschedule" element={<CheckSchedule />} />
          <Route path="/selfscheduleform" element={<SelfScheduleForm />} />
          <Route path="/openschedulelist" element={<OpenScheduleList />} />
          <Route
            path="/otheruserscheduleform"
            element={<OtherUserScheduleForm />}
          />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
