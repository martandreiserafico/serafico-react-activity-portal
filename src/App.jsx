import React, { useState } from 'react';
import Home from './components/Home';
import Activity3 from './components/Activity3';
import Activity4 from './components/Activity4';
import Activity5 from './components/Activity5';
import Activity6 from './components/Activity6';
import Activity7 from './components/Activity7';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    if (activePage === 'home') return <Home setActivePage={setActivePage} />;
    if (activePage === 'act3') return <Activity3 />;
    if (activePage === 'act4') return <Activity4 />;
    if (activePage === 'act5') return <Activity5 />;
    if (activePage === 'act6') return <Activity6 />;
    if (activePage === 'act7') return <Activity7 />;
  };

  const navClass = (page) => 
    `text-xs uppercase tracking-widest px-4 py-2 border-b-2 transition-colors ${
      activePage === page ? 'border-zinc-900 font-bold text-zinc-900' : 'border-transparent text-zinc-500 hover:text-zinc-900'
    }`;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col">
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-10">
        <div className="p-6 border-b border-zinc-200">
          <h1 className="text-xl font-bold tracking-tight uppercase m-0">React Activity Portal</h1>
        </div>
        <nav className="flex overflow-x-auto px-6 pt-2 gap-4">
          <button onClick={() => setActivePage('home')} className={navClass('home')}>Home</button>
          <button onClick={() => setActivePage('act3')} className={navClass('act3')}>Activity 3</button>
          <button onClick={() => setActivePage('act4')} className={navClass('act4')}>Activity 4</button>
          <button onClick={() => setActivePage('act5')} className={navClass('act5')}>Activity 5</button>
          <button onClick={() => setActivePage('act6')} className={navClass('act6')}>Activity 6</button>
          <button onClick={() => setActivePage('act7')} className={navClass('act7')}>Activity 7</button>
        </nav>
      </header>

      <main className="flex-grow max-w-3xl mx-auto w-full p-6 md:p-12">
        {renderPage()}
      </main>
    </div>
  );
}