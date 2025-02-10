import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
      <Toaster />
        <RouterProvider router={routes} />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
