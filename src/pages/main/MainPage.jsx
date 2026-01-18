import React from 'react';

function MainPage() {
  return (
    <>
      <div className="cafe-banner">
        <div>
          <h1>🍳 요리 친구 Cookmate</h1>
          <p>오늘 뭐 해먹지? 고민될 땐 쿡메이트!</p>
        </div>
      </div>

      <h3 className="section-title">📢 필독 공지사항</h3>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', marginBottom: '40px' }}>
        <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>[공지] Cookmate 이용 수칙 안내</li>
        <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>[이벤트] 1월 베스트 요리왕 선발대회!</li>
      </ul>

      <h3 className="section-title">🍳 최신 레시피</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ height: '120px', background: '#f5f5f5' }}></div>
            <div style={{ padding: '10px' }}>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>맛있는 김치볶음밥</h4>
              <span style={{ fontSize: '12px', color: '#888' }}>요리왕 | 2026.01.18</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;