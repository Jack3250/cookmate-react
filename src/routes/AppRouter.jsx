import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/user/LoginPage";
import MainPage from "../pages/main/MainPage";

import RootLayout from "../components/layout/RootLayout";

function AppRouter() {
  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route path="/login" element={<LoginPage />} />

      {/* 메인 서비스 */}
      <Route element={<RootLayout />}>

        {/* /main으로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/main" replace />} />

        {/* 메인 페이지 */}
        <Route path="/main" element={<MainPage />} />

        {/* 추가될 페이지들... */}
        {/* <Route path="/board/write" element={<WritePage />} /> */}
      </Route>

      {/* TODO : 에러 페이지 처리 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRouter;
