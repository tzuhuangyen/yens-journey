export const destinations = [
  {
    slug: 'hungary',
    alpha2: 'hu',
    city: 'Europe • Hungary',
    title:
      '2026 布達佩斯自由行攻略 | 第一次去匈牙利必看！5天4夜行程、住宿、交通、景點、美食完整整理',
    excerpt:
      '多瑙河畔的璀璨明珠、百年塞切尼溫泉、高 CP 值的復古廢墟酒吧。這份親自實測的 5 天 4 夜懶人包，帶你用最聰明、最划算的方式玩轉布達佩斯！',
    image:
      'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80',
    date: '2026-07-20',
    published: true,
  },
  {
    slug: 'italy',
    alpha2: 'it',
    city: 'Europe • Italy',
    title:
      '2026 義大利自由行攻略｜第一次去義大利必看！7天6夜行程、住宿、交通、景點、美食完整整理',
    excerpt:
      '從羅馬競技場到威尼斯運河，一次玩遍羅馬、佛羅倫斯、威尼斯三大城市，完整行程、預算與住宿建議一次整理給你。',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
    date: '2026-08-01',
    published: true,
  },
  {
    slug: 'france',
    alpha2: 'fr',
    city: 'Europe • France',
    title:
      '2026 法國自由行攻略｜第一次到法國必看！巴黎、交通、住宿、美食與行程完整整理',
    excerpt:
      '第一次到法國怎麼玩？整理巴黎交通、住宿區域、5 天 4 夜行程與預算建議，適合第一次前往法國自由行的新手。',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    date: '2026-07-31',
    published: true,
  },
  // ✅ 以後新增國家攻略，只要在這裡加一筆物件就好
  // 三個地方（地圖上色、首頁精選卡片、Travel 頁面文章列表）都會自動同步更新
];

export function getPublishedDestinations() {
  return destinations
    .filter((d) => d.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
