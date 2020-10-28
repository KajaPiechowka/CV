import React from "react";

import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./Document";

const App = () => (
  <PDFViewer width="1000" height="800">
    <MyDocument />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById("root"));
