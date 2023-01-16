import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Layout from "./components/Layout";


function App() {
  return (
    <>
    <Layout/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="todo"
              element={
                <div className="container-fluid">
                  <div className="row">
                    <Main />
                  </div>
                </div>
              }
            />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
