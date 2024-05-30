import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);
  const onClick = () => setLike((prev) => !prev);

  return (
    <>
      <h1>버튼 만들기👍👎</h1>
      {/* 좋아요 버튼 */}
      {like ? (
        <button onClick={onClick}>좋아요 취소</button>
      ) : (
        <button onClick={onClick}>좋아요</button>
      )}
    </>
  );
}

export default App;
