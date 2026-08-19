import React, { useState } from 'react';

export default function Activity5() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);

  const checkPassword = (e) => {
    e.preventDefault();
    if (!password) {
      setResult({ message: "Please enter a password.", color: "text-red-600" });
      return;
    }

    const len = password.length;
    if (len < 6) {
      setResult({ status: "Weak", message: "Status: Weak - Create a stronger password.", color: "text-red-500" });
    } else if (len >= 6 && len <= 9) {
      setResult({ status: "Medium", message: "Status: Medium - Could be stronger.", color: "text-yellow-600" });
    } else {
      setResult({ status: "Strong", message: "Status: Strong - You can use this password.", color: "text-green-600" });
    }
  };

  return (
    <div className="border border-zinc-200 p-8 bg-white">
      <h2 className="text-sm font-semibold tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">05. Password Checker</h2>
      
      <form onSubmit={checkPassword} className="space-y-4 mb-8">
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Password</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent border border-zinc-300 rounded-none text-sm p-3 focus:border-zinc-900" />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="flex-1 rounded-none uppercase tracking-widest text-xs py-3 bg-zinc-900 text-white hover:bg-zinc-700">Check Password</button>
          <button type="button" onClick={() => { setPassword(''); setResult(null); }} className="flex-1 rounded-none uppercase tracking-widest text-xs py-3 border border-zinc-300 hover:bg-zinc-50">Clear</button>
        </div>
      </form>

      {result && (
        <div className="p-6 border border-zinc-200 bg-zinc-50">
          <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-zinc-400">Result Panel</h3>
          <p className={`text-sm font-bold tracking-wide ${result.color}`}>{result.message}</p>
        </div>
      )}
    </div>
  );
}