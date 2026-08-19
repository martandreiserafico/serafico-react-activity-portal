import React from 'react';

export default function Home({ setActivePage }) {
  const btnClass = "w-full text-left p-4 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-colors bg-zinc-50 flex justify-between items-center group";

  return (
    <div className="border border-zinc-200 p-8 bg-white">
      <h2 className="text-sm font-semibold tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">Welcome</h2>
      <p className="text-sm leading-relaxed text-zinc-600 mb-6">
        Five interactive React activities demonstrating state, events, conditional logic, validation, and calculations.
      </p>
      
      <div className="space-y-3">
        <button onClick={() => setActivePage('act3')} className={btnClass}>
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-700">Activity 3: Login Authentication</span>
          <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">→</span>
        </button>
        
        <button onClick={() => setActivePage('act4')} className={btnClass}>
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-700">Activity 4: Student Grade Evaluation</span>
          <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">→</span>
        </button>
        
        <button onClick={() => setActivePage('act5')} className={btnClass}>
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-700">Activity 5: Password Strength Checker</span>
          <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">→</span>
        </button>
        
        <button onClick={() => setActivePage('act6')} className={btnClass}>
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-700">Activity 6: Electricity Bill Calculator</span>
          <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">→</span>
        </button>
        
        <button onClick={() => setActivePage('act7')} className={btnClass}>
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-700">Activity 7: Employee Attendance Checker</span>
          <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">→</span>
        </button>
      </div>
    </div>
  );
}