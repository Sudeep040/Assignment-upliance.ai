// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./page/counter";
import UserDataForm from "./page/UserDataForm";
import RichTextEditors from "./page/RichTextEditors";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./page/Home";

const App: React.FC = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/counter" element={<Counter />} />
    //     <Route path="/user-form" element={<UserDataForm />} />
    //     <Route path="/rich-text-editors" element={<RichTextEditors />} />

    //     {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    //   </Routes>
    // </Router>
    <Home />
  );
};

export default App;
