import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { StyledGlobal } from "./global/themes/ThemeGlobal";
import ThemeContext from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext>
      <StyledGlobal />
      <RouterProvider router={router} />
    </ThemeContext>
  </React.StrictMode>
);
