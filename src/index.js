import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SidebarProvider from "./contexts/sidebarContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>
);
