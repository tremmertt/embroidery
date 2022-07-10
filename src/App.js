import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import { incrementCountAction, decrementCountAction, resetCountAction } from "./redux/actions/TemplateAction";

function App() {
  // const { count } = useSelector((state) => state.TemplateReducer);

  // const dispatch = useDispatch();
  // console.log("count", count);
  // useEffect(() => {
  //   console.log("count", count);
  //   // dispatch(incrementCountAction());
  // }, [count]);

  // const increment = () => {
  //   dispatch(incrementCountAction());
  // };

  // const decrement = () => {
  //   dispatch(decrementCountAction());
  // };

  // const reset = () => {
  //   dispatch(resetCountAction());
  // };

  return (
    <div className="App overflow-hidden">
      {/* <p>count: {count}</p>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={increment}
      >
        inc
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={decrement}
      >
        dec
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={reset}
      >
        reset
      </button> */}

      <Home />
    </div>
  );
}

export default App;
