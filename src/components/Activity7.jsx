import React, { useState } from 'react';

export default function Activity7() {
  const [name, setName] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [result, setResult] = useState(null);

  const formatTime = (decimalTime) => {
    const hours = Math.floor(decimalTime);
    const minutes = Math.round((decimalTime - hours) * 60);
    const ampm = hours >= 12 && hours < 24 ? 'PM' : 'AM';
    const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${ampm}`;
  };

  const checkAttendance = (e) => {
    e.preventDefault();
    const time = parseFloat(timeIn);
    if (isNaN(time) || time < 0 || time > 24) return;

    let message = "";
    if (time < 8) {
      message = "Status: On Time - Good job!";
    } else if (time === 8) {
      message = "Status: Late - Please be on time tomorrow.";
    } else {
      message = "Status: Very Late - Report to your supervisor.";
    }

    setResult({ name, formattedTime: formatTime(time), message });
  };

  return (
    <div className="border border-zinc-200 p-8 bg-white">
      <h2 className="text-sm font-semibold tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">07. Attendance Checker</h2>
      
      <form onSubmit={checkAttendance} className="space-y-4 mb-8">
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Employee Name</label>
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-zinc-300 p-3 text-sm focus:border-zinc-900" />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Time In (Decimal, e.g. 8.5)</label>
          <input required type="number" step="0.01" value={timeIn} onChange={(e) => setTimeIn(e.target.value)} className="w-full border border-zinc-300 p-3 text-sm focus:border-zinc-900" />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="flex-1 uppercase tracking-widest text-xs py-3 bg-zinc-900 text-white hover:bg-zinc-700">Check Attendance</button>
          <button type="button" onClick={() => { setName(''); setTimeIn(''); setResult(null); }} className="flex-1 uppercase tracking-widest text-xs py-3 border border-zinc-300 hover:bg-zinc-50">Reset</button>
        </div>
      </form>

      {result && (
        <div className="p-6 border border-zinc-200 bg-zinc-50">
          <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-zinc-400">Result Panel</h3>
          <div className="space-y-2 text-sm">
            <p><span className="text-zinc-500 w-28 inline-block">Employee:</span> <strong>{result.name}</strong></p>
            <p><span className="text-zinc-500 w-28 inline-block">Time In:</span> <strong>{result.formattedTime}</strong></p>
            <div className="pt-4 mt-4 border-t border-zinc-200">
              <span className="font-bold uppercase tracking-wider">{result.message}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}