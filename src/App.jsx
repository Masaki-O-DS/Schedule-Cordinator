import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./Components/Top";
import NewAdjustSchedule from "./Components/NewAdjustSchedule";
import CheckSchedule from "./Components/CheckSchedule";
import SelfScheduleForm from "./Components/SelfScheduleForm";
import OpenScheduleList from "./Components/OpenScheduleList";
import OtherUserScheduleForm from "./Components/OtherUserScheduleForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
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
  );
}

export default App;
