// 這裡存放你所有的文章資料。以後寫新文章，只要複製格式往後加即可！
export const articles = {
  budapest: {
    title:
      '2026 布達佩斯自由行攻略｜第一次去匈牙利必看！5天4夜行程、住宿、交通、景點、美食完整整理',
    countryCode: 'HU', // 匈牙利的國家代碼
    heroImage:
      'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=1200&q=80',
    description:
      '第一次去匈牙利怎麼玩？本篇整理最新布達佩斯自由行攻略，包含5天4夜行程安排、住宿推薦、交通方式、景點、美食與預算，帶你輕鬆完成旅遊規劃。',

    // 住宿推薦連結
    hotelUrl:
      'https://tp.media/r?marker=755271&trs=297495&p=2075&u=https%3A%2F%2Fhotellook.com',
    // 租車連結
    carUrl:
      'https://tp.media/r?marker=755271&trs=297495&p=3257&u=https%3A%2F%2Fwww.discovercars.com',
    // 預設搜尋的機場代碼
    defaultAirport: 'BUD',
  },

  // 以後有第二篇文章（例如日本），直接在下面加：
  /*
  "tokyo": {
    title: "2026 東京自由行攻略...",
    countryCode: "JP",
    heroImage: "...",
    description: "...",
    hotelUrl: "...",
    carUrl: "...",
    defaultAirport: "NRT"
  }
  */
};

// 方便地圖點擊時，快速透過國家代碼 (例如 HU) 找到對應的文章網址 (例如 budapest)
export const countryToArticlePath = Object.keys(articles).reduce(
  (acc, path) => {
    const country = articles[path].countryCode;
    acc[country] = `/blog/${path}`;
    return acc;
  },
  {},
);
