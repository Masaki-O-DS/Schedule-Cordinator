import { DateCalendar } from "@mui/x-date-pickers";
import "./NewAdjustSchedule.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewAdjustSchedule = () => {
  const navigate = useNavigate();

  const inputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");
  const [renderEventName, setRenderEventName] = useState("");
  const [addMember, setAddMember] = useState("");
  const [member, setMember] = useState([]);
  const [selfInputName, setSelfInputName] = useState(false);

  const allTrue =
    eventName && selectedDate && (member.length > 0 || selfInputName);

  const handleChangeDate = (newValue) => {
    const select = new Date(newValue.$y, newValue.$M, newValue.$D);
    setSelectedDate(select.toLocaleDateString());
  };
  const handleConfirm = () => {
    setRenderEventName(eventName);
  };

  const handleSelectedMember = () => {
    setMember([...member, addMember]);
    if (inputRef.current) {
      inputRef.current.value = ""; // refを使って直接inputの値を空にする
    }
  };

  const handleChangeSelfInputName = () => {
    setSelfInputName(true);
  };

  const handleNextPage = () => {
    navigate("/selfscheduleform");
  };
  return (
    <>
      <p className="message">日程調整</p>
      <hr />
      <div className="container">
        <div className="left">
          <p className="select-message">
            日程調整を始めたい日を選択してください。
          </p>
          <DateCalendar
            showDaysOutsideCurrentMonth
            fixedWeekNumber={6}
            onChange={handleChangeDate}
          />
          <p className="nas-p b">
            {selectedDate ? `日程調整開始日：` + selectedDate : null}
          </p>
        </div>
        <div className="right">
          <p className="nas-p-question">イベント名を入力してください</p>
          <div className="event-name">
            <input
              type="text"
              className="text"
              onChange={(e) => setEventName(e.target.value)}
              placeholder="イベント"
            />
            <button className="nas-button a" onClick={handleConfirm}>
              確定
            </button>
          </div>
          <p className="nas-p b">
            {renderEventName ? `イベント名 : ${renderEventName}` : null}
          </p>
          <p className="nas-p-question">誰と日程を調整しますか？</p>

          <div className="select-person">
            <input
              className="text"
              type="text"
              ref={inputRef}
              onChange={(e) => setAddMember(e.target.value)}
              placeholder="氏名を入力"
            />
            <button className="nas-button a" onClick={handleSelectedMember}>
              追加
            </button>
          </div>
          <div className="card-area">
            {member.length > 0 ? (
              member.map((member) => {
                return (
                  <div className="card" key={member}>
                    <p className="name">{member}</p>
                  </div>
                );
              })
            ) : (
              <p className="nas-p">or</p>
            )}
          </div>
          {member.length > 0 ? null : (
            <button className="nas-button" onClick={handleChangeSelfInputName}>
              名前は本人に入力してもらう
            </button>
          )}
          {allTrue && (
            <button className="nas-button" onClick={handleNextPage}>
              次に進む
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NewAdjustSchedule;
