/**
 * 將 "YYYY-MM-DD" 格式轉換為 Aviasales 要求的 "DDMM" 格式
 * 例如：2026-08-23 → 2308
 */
function formatDDMM(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}${month}`;
}

/**
 * 建立 Aviasales 搜尋網址
 *
 * 單程格式：https://www.aviasales.com/search/TPE2308NRT1?marker=xxx
 * 來回格式：https://www.aviasales.com/search/TPE2308NRT30091?marker=xxx
 */
export function buildAviasalesUrl({
  origin,
  destination,
  departDate,
  returnDate,
}) {
  const marker = '551722';

  const depart = formatDDMM(departDate);

  // 單程：沒有 returnDate，URL 不含回程日期
  if (!returnDate) {
    return `https://www.aviasales.com/search/${origin}${depart}${destination}1?marker=${marker}`;
  }

  // 來回：含回程日期
  const ret = formatDDMM(returnDate);
  return `https://www.aviasales.gitcom/search/${origin}${depart}${destination}${ret}1?marker=${marker}`;
}

// PopularRouteCards 也用這個
export const buildPopularRouteUrl = buildAviasalesUrl;
