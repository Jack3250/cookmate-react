import React from 'react';
import { logoutApi } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutApi();
      alert('로그아웃 되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('로그아웃 실패', error);
    }
  };

  return (
    <aside className="sidebar">
      <div className="profile-box">
        <div style={{ width: '60px', height: '60px', background: '#ddd', borderRadius: '50%', margin: '0 auto 10px' }}></div>
        <strong>사용자님</strong>
        <p style={{ fontSize: '12px', color: '#666' }}>Member since 2026</p>
        <button onClick={handleLogout} style={{ marginTop: '10px', fontSize: '12px', padding: '5px 10px' }}>
          로그아웃
        </button>
      </div>

      <button className="write-btn">🖊️ 카페 글쓰기</button>

      <ul className="menu-list">
        <li>📢 전체글보기</li>
        <li>🔥 인기글</li>
        <li>💬 자유게시판</li>
        <li>❓ 질문&답변</li>
        <li>📷 요리 갤러리</li>
        <li>🍱 나만의 레시피</li>
      </ul>
    </aside>
  );
}

export default Sidebar;