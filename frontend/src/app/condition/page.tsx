// src/app/condition/page.tsx
"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Condition() {
  const [data, setData] = useState({
    mypage: { src: '/mypage.png', label: 'マイページ' },
    health: { src: '/health.png', label: 'コンディション' },
    recommended: { src: '/recommended.png', label: 'レコメンド' },
  });

  return (
    <div className="flex flex-col items-center p-4 h-screen font-sans">
      <div className="w-full">
        {/* ①左上に名前とコンディション文言 */}
        <h1 className="text-lg font-bold">田中さんのコンディション</h1>

        {/* ②コンディションスコア */}
        <div className="w-full bg-gray-200 p-6 my-4">
          <p className="text-left">コンディションスコア</p>
          <p className="text-center my-2">
            <span className="text-4xl">84</span>
            <span className="text-xl ml-2">良好</span>
          </p>
        </div>

        {/* ③コンディショントリビューター */}
        <h2 className="text-lg font-semibold mb-2">コンディショントリビューター</h2>

        {/* ④睡眠バロメーター */}
        <div className="mb-4">
          <div className="flex justify-between">
            <p>睡眠</p>
            <p>適度</p>
          </div>
          <div className="w-full h-2 bg-gray-300 rounded">
            <div className="bg-blue-500 h-2 rounded" style={{ width: '80%' }}></div>
          </div>
        </div>

        {/* ⑤睡眠バランスバロメーター */}
        <div className="mb-4">
          <div className="flex justify-between">
            <p>睡眠バランス</p>
            <p>良好</p>
          </div>
          <div className="w-full h-2 bg-gray-300 rounded">
            <div className="bg-pink-500 h-2 rounded" style={{ width: '70%' }}></div>
          </div>
        </div>

        {/* ⑥睡眠規則性バロメーター */}
        <div>
          <div className="flex justify-between">
            <p>睡眠規則性</p>
            <p>適度</p>
          </div>
          <div className="w-full h-2 bg-gray-300 rounded">
            <div className="bg-blue-500 h-2 rounded" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      {/* 下部の画像アイコン */}
      <div className="w-full border-t border-gray-300 mt-auto pt-4">
        <div className="w-full flex justify-around mb-4">
          {Object.keys(data).map((key) => (
            <div key={key} className="text-center">
              <div className="relative w-16 h-16 mb-2">
                <Image src={data[key].src} alt={data[key].label} layout="fill" objectFit="cover" />
              </div>
              <span className="text-xs">{data[key].label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
