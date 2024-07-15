// src/app/recommended/page.tsx
"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Recommended() {
  const [data, setData] = useState({
    mypage: { src: '/mypage.png', label: 'マイページ' },
    health: { src: '/health.png', label: 'コンディション' },
    recommended: { src: '/recommended.png', label: 'レコメンド' },
  });

  return (
    <div className="flex flex-col items-center p-4 h-screen font-sans">
      <div className="w-full">
        {/* ①田中さんへのレコメンド */}
        <h1 className="text-lg font-bold">田中さんへのレコメンド</h1>

        {/* ②薄いグリーンの網掛け内に「レコメンド」の文字 */}
        <div className="w-1/3 bg-green-100 p-4 my-4">
          <p className="text-left text-xs font-bold">レコメンド</p>
        </div>

        {/* ③グレーの網掛けに文言を表示 */}
        <div className="relative w-full bg-gray-200 p-4 my-4">
          <p className="text-left">
            高ストレス状態が続いており、意識的に休息をとることが必要です。
            <br />
            性格傾向からブレインフォグや燃え尽き症候群となる可能性が高く、
            <br />
            パフォーマンスが低下するリスクがあります。
          </p>
        </div>

        {/* ④薄いブルーの網掛け内に「アクティビティ」の文字 */}
        <div className="flex justify-between items-center mb-4">
          <div className="w-1/3 bg-blue-100 p-4">
            <p className="text-left text-xs font-bold">アクティビティ</p>
          </div>
          <div className="w-2/3 text-xs ml-4">
            <p>提案内容について評価してください。評価を基にあなたに合った提案をいたします。</p>
          </div>
        </div>

{/* ⑤アクティビティの文言表示 */}
<div className="w-full p-4 my-2 text-sm">
  <div className="flex">
    <div className="w-2/3 bg-gray-200 p-4">
      <p className="text-left">
        緊張状態が続いています。目を閉じて、長い呼吸を1~2分程度してみましょう。
      </p>
    </div>
    <div className="w-1/3 flex justify-center items-center">
      <div className="flex space-x-1">
        <Image src="/good.png" alt="Good" width={77} height={77} />
        <Image src="/bad.png" alt="Bad" width={77} height={77} />
      </div>
    </div>
  </div>
</div>
<div className="w-full p-4 my-2 text-sm">
  <div className="flex">
    <div className="w-2/3 bg-gray-200 p-4">
      <p className="text-left">
        〇〇公園では、紫陽花が見ごろのようです。気分転換に散歩してみてはいかがでしょう。
      </p>
    </div>
    <div className="w-1/3 flex justify-center items-center">
      <div className="flex space-x-1">
        <Image src="/good.png" alt="Good" width={77} height={77} />
        <Image src="/bad.png" alt="Bad" width={77} height={77} />
      </div>
    </div>
  </div>
</div>
<div className="w-full p-4 my-2 text-sm">
  <div className="flex">
    <div className="w-2/3 bg-gray-200 p-4">
      <p className="text-left">
        〇〇では、入浴＋サウナセットがXXXXで入れます。脳疲労が取れるので、あなたにお勧めです。
      </p>
    </div>
    <div className="w-1/3 flex justify-center items-center">
      <div className="flex space-x-1">
        <Image src="/good.png" alt="Good" width={77} height={77} />
        <Image src="/bad.png" alt="Bad" width={77} height={77} />
      </div>
    </div>
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
