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
    const fetchViewCount = () => {
      // GoatCounter 允許透過此端點獲取單一頁面的 count
      const apiUrl = `https://yensjourney.goatcounter.com/counter/${encodeURIComponent(currentPath)}.json`;

      fetch(apiUrl)
        .then((res) => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then((data) => {
          // data.count 格式通常為數字
          if (data && typeof data.count === 'number') {
            setViews(data.count);
          }
        })
        .catch((err) => {
          console.warn('Failed to fetch view count:', err);
        });
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
