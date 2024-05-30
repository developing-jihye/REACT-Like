import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);
  const like_reverse = () => setLike(!like);
  let likeButton = <button onClick={like_reverse}>좋아요</button>
  if(like === true) {
    likeButton = <button onClick={like_reverse}>좋아요 취소</button>
  }

  return (
    <>
      <h1>버튼 만들기👍👎</h1>
      {/* 좋아요 버튼 */}
      {likeButton}
    </>
  );
}

export default App;
