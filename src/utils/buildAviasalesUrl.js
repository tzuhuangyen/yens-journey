export function buildAviasalesUrl({
  origin,
  destination,
  marker,
  locale = 'en',
  currency = 'usd',
} = {}) {
  const params = new URLSearchParams();

  if (marker) params.set('marker', marker);
  if (locale) params.set('locale', locale);
  if (currency) params.set('currency', currency);
  if (origin) params.set('origin', origin);
  if (destination) params.set('destination', destination);

  const query = params.toString();

  return query
    ? `https://www.aviasales.com/search?${query}`
    : 'https://www.aviasales.com/search';
}
