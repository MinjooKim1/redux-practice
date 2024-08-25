import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";
import GrandSonBox from "./component/GrandSonBox";

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const addCount = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decreaseCount = () => {
    dispatch({ type: "DECREMENT" });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };
  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{count}</h1>
      <button onClick={addCount}>click</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={login}>Login</button>
      <GrandSonBox />
      <Box />
    </div>
  );
}

export default App;
