import React, { useEffect } from 'react';
import { Await, Link } from 'react-router-dom';

const Render = () => {
  useEffect(() => {
    const is = document.getElementById('BottomNav');
    for (const link of is.children) {
      if (link.href.replace(window.location.origin, '') === window.location.pathname) {
        link.querySelector('.indicator').className = 'indicator p-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-colored dark:bg-dark-colored bg-opacity-30 dark:bg-opacity-30 px-8';
      } else {
        link.querySelector('.indicator').className = 'indicator p-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-colored dark:bg-dark-colored bg-opacity-0 dark:bg-opacity-0 px-4';
      }
    }
  }, []);
  return (
    <nav id="BottomNav" className="grid grid-cols-3 gap-1 fixed bottom-0 left-0 right-0 bg-light-sekunder dark:bg-dark-sekunder">
      <Link to="/" className="flex flex-col justify-center items-center pt-3 pb-4">
        <div className="icon relative flex items-center justify-center mb-1">
          <span className="material-symbols-outlined">home</span>
          <div className="indicator p-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-colored dark:bg-dark-colored bg-opacity-0 dark:bg-opacity-0 px-4" />
        </div>
        <span className=" text-sm">Beranda</span>
      </Link>
      <Link to="/chats" className="flex flex-col justify-center items-center pt-3 pb-4">
        <div className="icon relative flex items-center justify-center mb-1">
          <span className="material-symbols-outlined">forum</span>
          <div className="indicator p-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-colored dark:bg-dark-colored bg-opacity-0 dark:bg-opacity-0 px-4" />
        </div>
        <span className=" text-sm">Obrolan</span>
      </Link>
      <Link to="/profile" className="flex flex-col justify-center items-center pt-3 pb-4">
        <div className="icon relative flex items-center justify-center mb-1">
          <span className="material-symbols-outlined">person</span>
          <div className="indicator p-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-colored dark:bg-dark-colored bg-opacity-0 dark:bg-opacity-0 px-4" />
        </div>
        <span className=" text-sm">Profile</span>
      </Link>
    </nav>
  );
};
const promise1 = new Promise((resolve) => {
  document.fonts.addEventListener('loadingdone', () => {
    if (document.fonts.check('24px Material Symbols Outlined')) {
      resolve(true);
    }
  });
});

const BottomNav = () => (
  <React.Suspense fallback={(
    <h2>
      {' '}
      Loading...
      {' '}
      <span className="material-symbols-outlined text-[.1px]">home</span>
      {' '}
    </h2>
  )}
  >
    <Await resolve={promise1} errorElement={<h2>Error!</h2>}>
      <Render />
    </Await>
  </React.Suspense>
);

export default BottomNav;
