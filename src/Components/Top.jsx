import "./Top.css";
import { signInWithPopup, signOut } from "firebase/auth";
import { provider, auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Top = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  //googleでログイン
  const googleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      setName(result.user.displayName);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  };

  //googleでログアウト
  const googleLogout = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.clear();
    });
  };

  const toNewAdjustSchedule = () => {
    navigate("/newadjustschedule");
  };

  return (
    <>
      <div className="all">
        <div className="title">
          <h1 className="schedule">Schedule</h1>
          <h1 className="coordinator">Coordinator</h1>
        </div>
        <div className="isauth-page">
          {/* ログインしてるかどうかでページの表示を切り替え */}
          {isAuth ? (
            <div className="choice">
              <p className="top-p">ようこそ{name}さん</p>
              <button className="top-button" onClick={toNewAdjustSchedule}>
                Schedule Coordinate
              </button>
              <button className="top-button">予定を確認する</button>
              <button className="top-button" onClick={googleLogout}>
                ログアウトする
              </button>
            </div>
          ) : (
            <>
              <p className="top-p">
                予定の調整を行うためにログインしてください。
              </p>
              <button className="top-button" onClick={googleLogin}>
                Googleでログインする
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Top;
