function formatDDMM(dateStr) {
  if (!dateStr) return '';
  const [, month, day] = dateStr.split('-'); // 直接拆字串，避免時區問題
  return `${day}${month}`;
}

export function buildAviasalesUrl({
  origin,
  destination,
  departDate,
  returnDate,
}) {
  const marker = '755271'; // 已更新為你的實際 Travelpayouts Partner ID
  const depart = formatDDMM(departDate);
  const ret = formatDDMM(returnDate);

  return `https://www.aviasales.com/search/${origin}${depart}${destination}${ret}1?marker=${marker}`;
}

export const buildPopularRouteUrl = buildAviasalesUrl;
