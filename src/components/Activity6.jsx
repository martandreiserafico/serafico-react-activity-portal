import React, { useState } from 'react';

export default function Activity6() {
  const [name, setName] = useState('');
  const [kwh, setKwh] = useState('');
  const [result, setResult] = useState(null);

  const calculateBill = (e) => {
    e.preventDefault();
    const consumption = parseFloat(kwh);
    if (isNaN(consumption) || consumption < 0) return;

    let rate = 0;
    if (consumption <= 100) rate = 10;
    else if (consumption <= 200) rate = 12;
    else if (consumption <= 300) rate = 15;
    else rate = 18;

    const total = consumption * rate;
    const usageStatus = total >= 5000 ? "High Electricity Usage" : "Normal Electricity Usage";

    setResult({ name, consumption, rate, total, usageStatus });
  };

  return (
    <div className="border border-zinc-200 p-8 bg-white">
      <h2 className="text-sm font-semibold tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">06. Electricity Bill</h2>
      
      <form onSubmit={calculateBill} className="space-y-4 mb-8">
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Customer Name</label>
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-zinc-300 p-3 text-sm focus:border-zinc-900" />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-2">Consumption (kWh)</label>
          <input required type="number" step="0.1" value={kwh} onChange={(e) => setKwh(e.target.value)} className="w-full border border-zinc-300 p-3 text-sm focus:border-zinc-900" />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="flex-1 uppercase tracking-widest text-xs py-3 bg-zinc-900 text-white hover:bg-zinc-700">Calculate Bill</button>
          <button type="button" onClick={() => { setName(''); setKwh(''); setResult(null); }} className="flex-1 uppercase tracking-widest text-xs py-3 border border-zinc-300 hover:bg-zinc-50">Clear</button>
        </div>
      </form>

      {result && (
        <div className="p-6 border border-zinc-200 bg-zinc-50">
          <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-zinc-400">Result Panel</h3>
          <div className="space-y-2 text-sm">
            <p><span className="text-zinc-500 w-32 inline-block">Customer Name:</span> <strong>{result.name}</strong></p>
            <p><span className="text-zinc-500 w-32 inline-block">Consumption:</span> <strong>{result.consumption} kWh</strong></p>
            <p><span className="text-zinc-500 w-32 inline-block">Rate Applied:</span> <strong>₱{result.rate} / kWh</strong></p>
            <p><span className="text-zinc-500 w-32 inline-block">Total Bill:</span> <strong>₱{result.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
            <div className="pt-4 mt-4 border-t border-zinc-200">
              <span className="text-xs tracking-widest uppercase text-zinc-500 block mb-1">Usage Status</span>
              <span className={`font-bold uppercase ${result.total >= 5000 ? 'text-red-600' : 'text-green-600'}`}>{result.usageStatus}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}