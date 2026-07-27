import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ViewCount() {
  const location = useLocation();
  const [views, setViews] = useState(null);

  // 格式化路徑，將 Hash 路由轉成乾淨的 path (例如: /destinations/hungary)
  const currentPath = location.pathname + location.search;

  useEffect(() => {
    // 1. 手動向 GoatCounter 發送 Pageview 事件
    const sendGoatCounterHit = () => {
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({
          path: currentPath,
          title: document.title,
          event: false,
        });

        // 發送完後，稍等一下再抓取最新數字
        setTimeout(fetchViewCount, 1000);
      } else {
        // 如果 script 還沒載入完，等 1 秒再試一次
        setTimeout(sendGoatCounterHit, 1000);
      }
    };

    // 2. 從 GoatCounter API 讀取該頁面的瀏覽次數
    const fetchViewCount = async () => {
      try {
        // 1. 將路徑中的斜線編碼，這是 GoatCounter API 的規範
        const encodedPath = encodeURIComponent(currentPath);
        const url = `https://yensjourney.goatcounter.com/counter/${encodedPath}.json`;

        console.log('正在請求瀏覽數，網址為:', url);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('GoatCounter 回傳的原始資料:', data);

        // 2. 安全地解析 count 數字
        // 有時 GoatCounter 會回傳 { count: "12" } (字串) 或 { count: 12 } (數字)
        // 如果該頁面完全沒有人看過，它可能會回傳 { count: "0" } 或是空值
        let countVal = 0;
        if (data && data.count !== undefined) {
          // 去除可能存在的逗號（例如 "1,234"），並轉成純數字
          const cleanCount = String(data.count).replace(/,/g, '');
          countVal = parseInt(cleanCount, 10) || 0;
        }

        console.log('解析後的瀏覽次數為:', countVal);
        setViews(countVal);
      } catch (error) {
        console.error('無法獲取瀏覽數:', error);
        // 如果出錯，我們也給它一個預設值 0，避免畫面一直卡在「讀取中...」
        setViews(0);
      }
    };

    sendGoatCounterHit();
  }, [currentPath]);

  if (views === null) {
    return <span className='text-sm text-gray-400'>👀 讀取中...</span>;
  }

  return (
    <span className='text-sm text-gray-500 font-medium inline-flex items-center gap-1'>
      👀 已有 {views.toLocaleString()} 人讀過
    </span>
  );
}
