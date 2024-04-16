import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
// pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import LoginPage from "./component/page/LoginPage";
import SigninPage from "./component/page/SigninPage";

const MainTitleText = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>Hello, Blog!</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="log-in" element={<LoginPage />} />
        <Route path="sign-in" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;