import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../css/Home.css';

function RootLayout() {
  return (
    <>
      {/* 상단 헤더 */}
      <Header />
      
      <div className="cafe-container">
        <div className="cafe-body">
          
          {/* 좌측 사이드메뉴 */}
          <Sidebar />

          {/* 메인 컨텐츠 */}
          <main className="content-area">
            <Outlet /> 
          </main>

        </div>
      </div>
    </>
  );
}

export default RootLayout;