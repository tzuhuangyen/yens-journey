const DEFAULT_MARKER = 'YOUR_MARKER';

function formatDateForAviasales(dateString) {
  if (!dateString) return '';

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');

  return `${day}${month}`;
}

function getMarker() {
  return import.meta.env.VITE_TRAVELPAYOUTS_MARKER || DEFAULT_MARKER;
}

export function buildAviasalesUrl({
  origin,
  destination,
  departDate,
  returnDate,
}) {
  const marker = getMarker();

  const cleanOrigin = origin.trim().toUpperCase();
  const cleanDestination = destination.trim().toUpperCase();

  const formattedDepartDate = formatDateForAviasales(departDate);
  const formattedReturnDate = formatDateForAviasales(returnDate);

  let searchPath = `${cleanOrigin}${formattedDepartDate}${cleanDestination}`;

  if (formattedReturnDate) {
    searchPath += formattedReturnDate;
  }

  return `https://www.aviasales.com/search/${searchPath}?marker=${marker}`;
}

export function buildPopularRouteUrl({ origin, destination }) {
  const marker = getMarker();

  const cleanOrigin = origin.trim().toUpperCase();
  const cleanDestination = destination.trim().toUpperCase();

  return `https://www.aviasales.com/search/${cleanOrigin}${cleanDestination}?marker=${marker}`;
}
