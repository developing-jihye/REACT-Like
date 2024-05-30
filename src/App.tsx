import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);

  return (
    <>
      {like === false ? (
        <button onClick={() => setLike(true)}>좋아요</button>
      ) : (
        <button onClick={() => setLike(false)}>좋아요 취소</button>
      )}
    </>
  );
}

export default App;
