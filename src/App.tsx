import { useState } from "react";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const onClick = () => {
    console.log("좋아요 누를건데, 싫어요 눌러져 있나? => dislike: " + dislike);
    if (dislike) {
      setDislike(false);
    }
    setLike((prev) => !prev); // 실무 표현
  };
  const onClickDis = () => {
    console.log("싫어요 누를건데, 좋아요 눌러져 있나? => like: " + like);
    if (like) {
      setLike(false);
    }
    setDislike((prev) => !prev);
  };

  return (
    <>
      <h1>버튼 만들기👍👎</h1>
      {/* 좋아요 버튼 */}
      {like ? (
        <button style={{color: "red"}} onClick={onClick}>좋아요 취소</button>
      ) : (
        <button onClick={onClick}>좋아요</button>
      )}

      <span> </span>

      {/* 싫어요 버튼 */}
      {dislike ? (
        <button style={{color: "red"}} onClick={onClickDis}>싫어요 취소</button>
      ) : (
        <button onClick={onClickDis}>싫어요</button>
      )}
    </>
  );
}

export default App;
