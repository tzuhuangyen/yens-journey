function formatDDMM(dateStr) {
  if (!dateStr) return ''; // ← 加這行，沒日期就回傳空字串
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}${month}`;
}

export function buildAviasalesUrl({
  origin,
  destination,
  departDate,
  returnDate,
}) {
  const marker = '744200';
  const depart = formatDDMM(departDate); // 沒日期 → 空字串
  const ret = formatDDMM(returnDate); // 沒日期 → 空字串

  return `https://www.aviasales.com/search/${origin}${depart}${destination}${ret}1?marker=${marker}`;
}

export const buildPopularRouteUrl = buildAviasalesUrl;
