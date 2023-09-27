import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
const initialState = { questions: [], status: "loading" };
function reducer(state, action) {
  switch (action.type) {
    case "dataRcvd":
      return { ...state, questions: action.payload, status: "ready" };
    case "Error":
      return { ...state, status: "Data not loaded" };
    default:
      throw new Error("Action unknown ");
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRcvd", payload: data }))
      .catch((err) => dispatch({ type: "Error" }));
  }, []);
  return (
    <div>
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
