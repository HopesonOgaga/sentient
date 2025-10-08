import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

export default function Randomizer() {
  const [username, setUsername] = useState('');
  const [count, setCount] = useState(null);
  const resultRef = useRef(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('gmsorData'));
    if (storedData && Date.now() - storedData.timestamp < 10 * 60 * 1000) {
      setCount(storedData.count);
    }
  }, []);

  const handleCheck = () => {
    if (!username.trim()) return alert('Enter your X (Twitter) username first!');

    const storedData = JSON.parse(localStorage.getItem('gmsorData'));

    if (storedData && Date.now() - storedData.timestamp < 10 * 60 * 1000) {
      setCount(storedData.count);
      return;
    }

    let newCount;
    if (storedData && Date.now() - storedData.timestamp >= 10 * 60 * 1000) {
      newCount = storedData.count + Math.floor(Math.random() * 6) + 5;
    } else {
      newCount = Math.floor(Math.random() * 801) + 200;
    }

    const data = { username, count: newCount, timestamp: Date.now() };
    localStorage.setItem('gmsorData', JSON.stringify(data));
    setCount(newCount);
  };

  const handleDownload = async () => {
    if (!resultRef.current) return;

    const canvas = await html2canvas(resultRef.current, { backgroundColor: '#000' });
    const link = document.createElement('a');
    link.download = `${username}_gmsor_count.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">
        How many times did you say <span className="text-blue-400">gmsor</span>? 😎
      </h1>
      <p className="text-gray-400 mb-6">Drop your X handle and let’s find out 👇</p>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="@yourhandle"
        className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-4 w-64 text-center border border-gray-700 focus:border-blue-400 outline-none"
      />

      <button
        onClick={handleCheck}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-all"
      >
        Check my gmsor count 🚀
      </button>

      {count !== null && (
        <div ref={resultRef} className="mt-8 text-center bg-gray-800 p-6 rounded-xl shadow-lg w-80">
          <h2 className="text-2xl font-semibold mb-2">@{username}</h2>
          <p className="text-lg text-gray-300">
            You’ve said <span className="text-blue-400 font-bold">{count}</span> gmsor(s) on X 🫡
          </p>
          <p className="text-sm text-gray-500 mt-2 hidden">(Updated every 10 minutes)</p>

          <button
            onClick={handleDownload}
            className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            📸 Download Result
          </button>
        </div>
      )}
    </div>
  );
}
