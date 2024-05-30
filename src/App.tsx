import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  return (
    <>
      {/* 좋아요 버튼 */}
      {like === false ? (
        <button onClick={() => setLike(true)}>좋아요</button>
      ) : (
        <button onClick={() => setLike(false)}>좋아요 취소</button>
      )}

      <span> </span>
      
      {/* 실어요 버튼 */}
      {dislike === false ? (
        <button onClick={() => setDislike(true)}>싫어요</button>
      ) : (
        <button onClick={() => setDislike(false)}>싫어요 취소</button>
      )}
    </>
  );
}

export default App;
