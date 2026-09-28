// src/utils/buildTravelpayoutsUrl.js

export function buildTravelpayoutsUrl({
  origin,
  destination,
  departureDate,
  returnDate,
  locale = 'en',
  currency = 'usd',
  marker,
} = {}) {
  const params = new URLSearchParams();

  if (marker) params.set('marker', marker);
  if (locale) params.set('locale', locale);
  if (currency) params.set('currency', currency);

  if (origin) params.set('origin', origin);
  if (destination) params.set('destination', destination);

  if (departureDate) params.set('departure_date', departureDate);
  if (returnDate) params.set('return_date', returnDate);

  const queryString = params.toString();

  return queryString
    ? `https://www.travelpayouts.com/flight_searches/show?${queryString}`
    : 'https://www.travelpayouts.com/flight_searches/show';
}
