import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./template/Layout.jsx";
// import LayoutTraining from "./template/LayoutTraining.jsx";
import { BrowserRouter } from "react-router-dom";
// import SidebarComp from "./components/SidebarComp/SidebarComp.jsx";
// import SideBar from "./components/SidebarComp/SideBar.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </PersistGate>
  </Provider>
);
