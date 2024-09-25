import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <>
      <div className="all">
        <div className="title">
          <h1 className="schedule">Schedule</h1>
          <h1 className="coordinator">Coordinator</h1>
        </div>
        <div className="login">
          <p>予定の調整を行うためにログインしてください。</p>
          <button>Googleでログインする</button>
        </div>
      </div>
    </>
  );
};

export default Top;
