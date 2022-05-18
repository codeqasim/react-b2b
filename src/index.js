import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import store from "../src/store";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));