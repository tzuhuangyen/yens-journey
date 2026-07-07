export function buildAviasalesUrl({ origin, destination }) {
  const marker = '551722'; // 你的 Affiliate ID

  // 取得今天、30天後、37天後的日期物件
  const today = new Date();
  const departDateObj = new Date(today);
  departDateObj.setDate(today.getDate() + 30); // 30天後出發

  const returnDateObj = new Date(today);
  returnDateObj.setDate(today.getDate() + 37); // 7天後回程

  // 格式化為 Aviasales 要求的 DDMM 格式 (例如 0508 代表 8月5日)
  const formatDDMM = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}${month}`;
  };

  const departDate = formatDDMM(departDateObj);
  const returnDate = formatDDMM(returnDateObj);

  // 建立符合 Aviasales 規範的搜尋網址
  return `https://www.aviasales.com/search/${origin}${departDate}${destination}${returnDate}1?marker=${marker}`;
}

// 額外導出 buildPopularRouteUrl，確保 PopularRouteCards.jsx 讀取時不會報錯
export const buildPopularRouteUrl = buildAviasalesUrl;
