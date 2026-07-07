export const popularRoutes = [
  {
    id: 'taipei-tokyo',
    label: 'Taipei to Tokyo',
    origin: 'TPE',
    destination: 'NRT',
    region: 'japan',
    description:
      'A classic Taiwan to Japan route for city trips, cherry blossoms, and family travel.',
  },
  {
    id: 'taipei-osaka',
    label: 'Taipei to Osaka',
    origin: 'TPE',
    destination: 'KIX',
    region: 'japan',
    description:
      'Great for Kansai trips, Kyoto, Nara, Universal Studios, and food-focused travel.',
  },
  {
    id: 'taipei-seoul',
    label: 'Taipei to Seoul',
    origin: 'TPE',
    destination: 'ICN',
    region: 'asia',
    description:
      'A short and flexible route for culture, food, shopping, and weekend trips.',
  },
  {
    id: 'taipei-bangkok',
    label: 'Taipei to Bangkok',
    origin: 'TPE',
    destination: 'BKK',
    region: 'asia',
    description:
      'A warm-weather route for food, hotels, family trips, and easy city breaks.',
  },
  {
    id: 'budapest-taipei',
    label: 'Budapest to Taipei',
    origin: 'BUD',
    destination: 'TPE',
    region: 'europe-taiwan',
    description:
      'Useful for planning long-haul trips between Central Europe and Taiwan.',
  },
  {
    id: 'vienna-taipei',
    label: 'Vienna to Taipei',
    origin: 'VIE',
    destination: 'TPE',
    region: 'europe-taiwan',
    description:
      'A practical route option for travelers based in Austria, Hungary, or nearby countries.',
  },
];

export function getPopularRoutesByIds(routeIds = []) {
  return popularRoutes.filter((route) => routeIds.includes(route.id));
}
