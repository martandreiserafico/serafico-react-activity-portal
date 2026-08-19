import React, { useState } from 'react';

export default function Activity3() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Please enter username and password.");
      return;
    }
    if (username === 'admin' && password === '12345') {
      setIsLoggedIn(true);
      setMessage("Login successful!");
    } else {
      setMessage("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('');
  };

  const inputClass = "w-full bg-transparent border border-zinc-300 rounded-none text-sm p-3 focus:border-zinc-900 transition-colors";
  const btnClass = "w-full rounded-none uppercase tracking-widest text-xs py-3 bg-zinc-900 text-white hover:bg-zinc-700 transition-colors";

  return (
    <div className="border border-zinc-200 p-8 bg-white">
      <h2 className="text-sm font-semibold tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">03. Login Authentication</h2>
      
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="space-y-4">
          {message && <div className="p-3 bg-red-50 text-red-600 text-xs tracking-wide border border-red-200">{message}</div>}
          <div>
            <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={inputClass} placeholder="Try: admin" />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} placeholder="Try: 12345" />
          </div>
          <button type="submit" className={btnClass}>Login</button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-100 border border-zinc-200 text-center">
            <h3 className="text-lg font-bold uppercase tracking-widest text-zinc-900">{message}</h3>
            <p className="text-sm text-zinc-500 mt-2">Welcome back, {username}.</p>
          </div>
          <button onClick={handleLogout} className="w-full rounded-none uppercase tracking-widest text-xs py-3 border border-zinc-900 text-zinc-900 hover:bg-zinc-100 transition-colors">Logout</button>
        </div>
      )}
    </div>
  );
}