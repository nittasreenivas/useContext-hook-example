//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { UserContextProvider } from "./Context/UserContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
