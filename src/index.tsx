import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider as TribeProvider } from "@tribeplatform/react-sdk";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <TribeProvider
      config={{
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdVRVNUX0dycGVKdlh4M3E3a05zTSIsIm5ldHdvcmtJZCI6IlN5WENCNWpVTzQiLCJuZXR3b3JrRG9tYWluIjoibmFyZ2VzLnRyaWJlcGxhdGZvcm0uY29tIiwidG9rZW5UeXBlIjoiR1VFU1QiLCJlbnRpdHlJZCI6bnVsbCwicGVybWlzc2lvbkNvbnRleHQiOm51bGwsInBlcm1pc3Npb25zIjpudWxsLCJpYXQiOjE2NDg5Njk4MzEsImV4cCI6MTY1MTU2MTgzMX0.k6tYGEJmLO-FI51AJhCftTKZlyo8xSE3G6HT-aScIVY",
        baseUrl: "https://app.tribe.so/graphql",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TribeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
