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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBabHhkbWFxRXAiLCJuZXR3b3JrSWQiOiJTeVhDQjVqVU80IiwibmV0d29ya0RvbWFpbiI6Im5hcmdlcy50cmliZXBsYXRmb3JtLmNvbSIsInRva2VuVHlwZSI6IlVTRVIiLCJlbnRpdHlJZCI6bnVsbCwicGVybWlzc2lvbkNvbnRleHQiOm51bGwsInBlcm1pc3Npb25zIjpudWxsLCJzZXNzaW9uSWQiOiJSUVpFa0xJOHR6c2JZamI3WU80d09tNVY4ejU2a3RraEhpVG03VnBIZG9Qa2liZGhZNCIsImlhdCI6MTY0OTMyMzY2MCwiZXhwIjoxNjUxOTE1NjYwfQ.lk1EdIWuLPMeDe2FwNT4qqEfwZPJNQbExrHERgvvwrw",
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
