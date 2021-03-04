import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const index = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default index;

ReactDOM.render(<App />, document.querySelector("#root"));
