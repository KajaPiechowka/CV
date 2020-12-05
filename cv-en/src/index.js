import React from "react";
import MyDocument from "./Document";
import ReactDOM from "react-dom";
import ReactPDF from "@react-pdf/renderer";

ReactPDF.render(<MyDocument />, `./CV-EN.pdf`);

// const App = () => (
//   <PDFViewer width="1000" height="800">
//     <MyDocument />
//   </PDFViewer>
// );

// ReactDOM.render(<App />, document.getElementById("root"));
