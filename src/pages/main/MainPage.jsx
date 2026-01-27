import React from 'react';

function MainPage() {
  // 베스트 요리 데이터
  const bestRecipes = [
    { id: 1, title: '타히니 드레싱을 곁들인 궁극의 건강 그린 샐러드 볼', chef: '쉐프안나', likes: 45, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFczYV_FAeM4bgX63O3lZjdk3r1pskFXRcyHTXFFaQgNc_Siqr6nHYqj9eMt3CKxKqZGlAwc9voQ9tIVVXaPacqql-h7DJVnFcDMl74AV7lcskQrZEUm1YDS3h1MHRxnBTIpt6YunEYb12v_up5k-6TMaQ61vxqJZsXpFcJ_7cOQ4fgH9Poj5H_JcXPbDwTGJ6ZZqIzrG7PJQpaqWRH9nE1qoxB40Lzid1NeRU2spjKh4EoSQ5Qv9mx6MqBnkLKLoduXNphpKygWTh' },
    { id: 2, title: '집에서 만드는 나폴리 피자: 비밀의 도우 레시피', chef: '피자러버', likes: 38, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd8PFMVPQawJ5Q67pq11FXdGZNWopCc85GIn01BG2C1x6Gl2UPfc_zMLj4WNOVa2ZIAFQN9x9Qj8AaKzgHFkkdQc6TrkLg0eHOV8H21sf25DHptuBMZkyKrtpSl9RF6AYp6cuLxSbiV6jMfZ1GXC-SefWZOi5YsvtpYqZWbp2F0Nj8OutZG69fhk4tgH-UCVbby-wYfDfZI_5lPFIMjehuXDdU8YWM1oWzSmKBbAa7hS4bhmW8tgBDuPvttisK9yreDcFVBHStHNMi' },
    { id: 3, title: '매콤달콤 한국식 양념치킨 만들기', chef: 'K-푸디', likes: 120, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXWO2I6DjkLPqCkTHTv9fHrhE1Dqz7SPZf5zXYqBZEcyuUvhLVO3O_5LyQVFOJaslcxqStBLhbzu7yUoRUxunvskP1YxHssK3KZmnVQI-0nb9hxmAwspiXpikx79UqB9goXhaEFON18oajlfzHDvf0bUwCbjYW6BTQTe5FlyfVgOBhOecN_5iMKGtwu3jmhwTMXIN2fxI5MuhdOGVhbAMeyOVfzl4uFn4rLzbGwiQi2OAIvUEoE7zHyg5uOBVdSr7TWAHU4Od1nKto' },
    { id: 4, title: '베리 콩포트를 곁들인 푹신한 일요일 팬케이크', chef: '브런치퀸', likes: 67, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIwof_TAn_pJB2jogNJjMuWu8rkXsxy6504J7pl6D9APC5cJsq00OAX0Iqc3eVNM4Zsan4EdJhfH8biRpy_vD6EqexUvYDH52QSWo6i1w9ccn1_ETtOA0sslfIuLz3moqak3msOPxZYAdBxccqtDZ8LTFe_GAXFQ6WtmpchgeztcBddyMo7qeHqwAJl_3tlji_AHWvVlIDfdlHTwA8fIkThJlBVvTo8fWc6WPsv82WIYs8Rz_HKQBHDIFKpAE3CXkDiK2qoibRhBET' },
  ];

  // 방금 올라온 레시피 데이터
  const recentRecipes = [
    { id: 1, title: '아침 토스트', chef: '유저123', views: 40, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA32DZsMiuwNsTeGxspYHWGcdFGgWnC_xQppz05v4gZf-7Ec0RosUIN4TASr8PB2RxKfLKwMmNZE26z9Xxj3BmQjQnUN_jikXBZmPHh41TdvV6s-FjzLDF9vBg4ptDJJ246H38fvdCPdFTLTU62K-ZeNB1PLOCV9jVDnmqjgaBYXMw4q1TQoAW8HmXkila_K_MEBZ1noqEY_HKZVc_A-QOG450dIqh3FZM4sy6_qDriXAL460FA0fhQsOWWzykNS2xZJwZX0M2826yL' },
    { id: 2, title: '크리미 호박 수프', chef: '수프마스터', views: 152, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiLAoKwt7TsMuQnuIBRtCfaLVPtL139ODZWAR8Hz51LF_GfEeyNGKfCMzpblsl60zEsUhJjki5HKkfTOR0MeNjzcDOcOS0ViIMzEx2qJr7OEMQZi8jxJlUsuwEMy_aCB6OJKXX7SV_qWwQa6ZomQEvAnKEr9iz8WYFWWru7CFMixhxA9TidxGu3JKeFEstS2wMDxQDqBuCS1Ha5UKDQf3Xwxhta2OzH5gur9d2e91UgMlgZsLlcyEgc4gb3badxJiBqEQT_uCsZYQS' },
    { id: 3, title: '상쾌한 모히또', chef: '바텐더', views: 88, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDlfODciepnMaPO8iI8nuVfAKbN4vPyN3QpsycJ8-4QcSdwgKCzIBFmJzWA6xphvn-Lwk100VYWpnf6VfoXC_hb7-bEAJ1JyUoWIgNjC9ievf04GKC-iXfolvWWiArKLp608DwcpwJsJD2coy3woDngdW9ZH3-eTfpDTeYP5_KDWzAqSBrqRLR7mmat6wWQvw7wKnw-16-dhGIelXk26dDzb9hzgBAG0da2Za2_X0FFFS5NMzAZb8eL240kChXWk60fq0xrP7wJ-aG' },
    { id: 4, title: '정통 까르보나라', chef: '이탈리안쉐프', views: 210, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnLTmETZwmQRS6Gs-aRRrvFnAiueK3wBbTWMhevxA_xOmfO-LGl030HqMOrkapXoEC0LH950pgPVzvn42r1hbBayobrqQ1cMwhI388EscyLlUhXlEZO6WtjixLQCl1BOJRH4kCqrr3kkkx2MKZ0VgmNgdQec9-YYVD10e-xrpWrBXDEwhmOLCnhm80zcTgmtGuyuM-A831a_8evxVbHPxIVNk6-pBmueAgffwAzUunXBcYuQuSSr6EgcHY9eZ41dOP-_d4yEP8qClK' },
    { id: 5, title: '오이 샐러드', chef: '채식러버', views: 56, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFYrxqGUvt0zX3BmNZ8faXPSRy97Ws4ykA5xGMmwkTYXmCgz45_o3gqxpA0BnUai8aEBB3PnCRdqiLPg5p6xFc6OoJkxlz-T2aowvx88hku5YkEX51ghbMNT3Ag5UY1al1mIku8IkfatF6WKy4myQVWql8zeCLYyc1aw4-KgcRrz-xYZAMoIma8GR1PwNwDOAWHXPZqFmoUyLEsn22TkeX8d_x4ze3ROabAZ1yz7wMfUUkFObhEyW-pMMiXcp8b5idFuT3u0FXPtzt' },
  ];

  return (
    <>
      {/* 공지사항 */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded p-3 mb-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">공지</span>
          <span className="truncate text-gray-700 dark:text-gray-300">[중요] 월간 "베스트 쉐프" 경연 대회 규칙 업데이트</span>
        </div>
        <span className="text-gray-400 text-xs whitespace-nowrap">2023.10.27</span>
      </div>

      {/* 캠페인 배너 */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-sm border border-border-light dark:border-border-dark">
        <div className="relative z-10 md:w-1/2">
          <span className="inline-block bg-white dark:bg-zinc-700 text-primary border border-primary text-xs font-bold px-2 py-1 rounded mb-2">캠페인</span>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 font-display">제로 웨이스트 키친 챌린지</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">음식물 쓰레기 줄이는 꿀팁을 공유하고 친환경 주방용품 세트를 받아가세요!</p>
          <button className="bg-primary hover:bg-green-600 text-white text-sm font-bold px-4 py-2 rounded transition-colors shadow-sm">
            자세히 보기
          </button>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 flex justify-end relative z-10">
          <img alt="주방 도구" className="rounded-lg w-full max-w-[280px] object-cover h-40 shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu0xSWGNhJtlz93E2WmDG_M-M1hoSKj9s7kjSjFrwhfbXF8qe4iBgvP8LV4zFwwzfy3X3TYqrmEdxMRsleKSaKLldPsXqCL0701xcKveRBa4CGJeaQe35Wn2O31NSal7wG7MibZReSAUB2ptMp7iLLpCZ-5kOWlZvWRS-92G8PdlVCArLjC9goUXZStVPH1sRedeWxs4Q0cd20OeT0tkXVkDeh2Ow9bOJlpt7Q88GLo0dF3PDirluc8HYa_aKEMATxqDm75Ckj2TEO" />
        </div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-green-100 dark:bg-green-900/30 rounded-full z-0 opacity-50"></div>
      </div>

      {/* 오늘의 베스트 요리 */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4 border-b border-border-light dark:border-border-dark pb-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <span className="material-icons text-secondary">favorite</span>
            오늘의 베스트 요리
          </h3>
          <a className="text-xs text-gray-500 hover:text-primary" href="#">더보기 &gt;</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestRecipes.map((recipe, index) => (
            <div key={recipe.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-square mb-2 bg-gray-200">
                <img alt={recipe.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" src={recipe.img} />
                <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm">{index + 1}</span>
              </div>
              <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 line-clamp-2 mb-1 group-hover:underline">{recipe.title}</h4>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{recipe.chef}</span>
                <span className="flex items-center gap-0.5 text-red-400"><span className="material-icons text-[10px]">favorite</span> {recipe.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 실시간 토크 & 이미지 섹션 */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4 border-b border-border-light dark:border-border-dark pb-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <span className="material-icons text-primary">chat</span>
            실시간 토크
          </h3>
          <a className="text-xs text-gray-500 hover:text-primary" href="#">더보기 &gt;</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 왼쪽 토크 리스트 */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-0">
            <ul className="divide-y divide-border-light dark:divide-border-dark">
              <li className="py-2 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800 px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">질문</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 truncate">빵 반죽이 너무 끈적거려요, 도와주세요!</span>
                </div>
                <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">5분 전</span>
              </li>
              <li className="py-2 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800 px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="bg-green-100 text-primary dark:bg-green-900 dark:text-green-300 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">팁</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 truncate">버터밀크 대체품으로 뭐가 좋을까요?</span>
                </div>
                <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">12분 전</span>
              </li>
              <li className="py-2 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800 px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">잡담</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 truncate">새로 산 스탠드 믹서가 도착했어요!</span>
                </div>
                <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">24분 전</span>
              </li>
              <li className="py-2 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800 px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="bg-gray-100 text-gray-600 dark:bg-zinc-700 dark:text-gray-300 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">후기</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 truncate">새로 나온 에어프라이어 모델 솔직 후기</span>
                </div>
                <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">1시간 전</span>
              </li>
            </ul>
          </div>
          {/* 오른쪽 이미지 2개 */}
          <div className="grid grid-cols-2 gap-2">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img alt="바비큐" className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqR8hgsycldLiJFWh1shV9P5W-gFl2Lq09Um4MVedBWDxnQyD39A6vc2Ys2ubAryZKjBJ8JI260nY_UBr_tqrXga367032EXUbRl32Sz8V9R-y5mc22V4INhW67jhbPkjQCviRkEVfgoAz11bkdExYA1KE0s8766kzeN3fBp_adMMhJF9dtgIY8gSNqqeEHgnMHBPMt1ggk-sHLrOVXTbIuQNvB8LmAW10tSIeSdY1PttkZZHiTAnQKK5tUGg7IAH3BBQPEhRDqVa5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                <span className="text-white text-xs font-bold truncate">주말 BBQ 파티</span>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img alt="디저트" className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS52axsJ727NTrUzC2zDiL1Ua1qO4fo-H1Z7YdId6nalfRJtm9WdQQBZ9fz6-zeq0n4_-wa_CJBPzToI0HtKwfC52gzQn_d0F5SQRDGEmgssyyUDQui8rC0vgUv6iBe8JawT6SVXG5KtFOYUNqmbfTyHDb8QWS_gfsx7L8xo8hd4Je-jem_AoAzW8waErrA_Y_F1JjadQZfOiQni5aNcxPKZIQHJb-0VlDEUsFABT6AYb8gi_ldElxGumzPueSANUg1OyY1P_LHoys" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                <span className="text-white text-xs font-bold truncate">초간단 노오븐 치즈케이크</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 방금 올라온 레시피 */}
      <section>
        <div className="flex items-center justify-between mb-4 border-b border-border-light dark:border-border-dark pb-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <span className="material-icons text-green-600">new_releases</span>
            방금 올라온 레시피
          </h3>
          <a className="text-xs text-gray-500 hover:text-primary" href="#">더보기 &gt;</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {recentRecipes.map((recipe, index) => (
            <div key={recipe.id} className={`bg-surface-light dark:bg-surface-dark rounded border border-border-light dark:border-border-dark overflow-hidden hover:shadow-md transition-shadow ${index === 4 ? 'hidden lg:block' : ''}`}>
              <img alt={recipe.title} className="w-full h-24 object-cover" src={recipe.img} />
              <div className="p-2">
                <h5 className="text-xs font-bold text-gray-800 dark:text-gray-200 line-clamp-1 mb-1">{recipe.title}</h5>
                <div className="flex justify-between items-center text-[10px] text-gray-500">
                  <span>{recipe.chef}</span>
                  <span>조회: {recipe.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MainPage;