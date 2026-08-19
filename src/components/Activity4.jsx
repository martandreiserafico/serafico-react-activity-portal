import React, { useState } from 'react';

export default function Activity4() {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [result, setResult] = useState(null);

  const evaluateGrade = (e) => {
    e.preventDefault();
    const numScore = parseFloat(score);
    
    if (isNaN(numScore) || numScore < 0 || numScore > 100) {
      setResult({ remarks: "Invalid score", isError: true });
      return;
    }

    let remarks = "";
    if (numScore >= 90) remarks = "Excellent";
    else if (numScore >= 85) remarks = "Very Good";
    else if (numScore >= 80) remarks = "Good";
    else if (numScore >= 75) remarks = "Passed";
    else remarks = "Failed";

    setResult({ name, score: numScore, remarks, isError: false });
  };

  const handleClear = () => {
    setName(''); setScore(''); setResult(null);
  };

  const inputClass = "w-full bg-transparent border border-zinc-300 rounded-none text-sm p-3 focus:border-zinc-900";

  return (
    <div className="border border-zinc-200 p-8 bg-white">
      <h2 className="text-sm font-semibold tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">04. Grade Evaluation</h2>
      
      <form onSubmit={evaluateGrade} className="space-y-4 mb-8">
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Student Name</label>
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Score</label>
          <input required type="number" step="0.1" value={score} onChange={(e) => setScore(e.target.value)} className={inputClass} />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="flex-1 rounded-none uppercase tracking-widest text-xs py-3 bg-zinc-900 text-white hover:bg-zinc-700">Evaluate</button>
          <button type="button" onClick={handleClear} className="flex-1 rounded-none uppercase tracking-widest text-xs py-3 border border-zinc-300 hover:bg-zinc-50">Clear</button>
        </div>
      </form>

      {result && (
        <div className={`p-6 border ${result.isError ? 'border-red-200 bg-red-50 text-red-700' : 'border-zinc-200 bg-zinc-50'}`}>
          <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-zinc-400">Result Panel</h3>
          {result.isError ? (
            <p className="text-sm font-bold uppercase">{result.remarks}</p>
          ) : (
            <div className="space-y-2 text-sm">
              <p><span className="text-zinc-500 w-24 inline-block">Student:</span> <span className="font-medium">{result.name}</span></p>
              <p><span className="text-zinc-500 w-24 inline-block">Score:</span> <span className="font-medium">{result.score}</span></p>
              <p><span className="text-zinc-500 w-24 inline-block">Remarks:</span> <span className="font-bold uppercase tracking-wider">{result.remarks}</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}