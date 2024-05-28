const got = require('@/utils/got');

module.exports = (query) => {
    return {
      request: {
        url: 'https://m.douban.com/rexxar/api/v2/lembas/channel/30169541/feed?ck=5Zcs&for_mobile=1&start=0&count=20&nav=new', // 替换为实际的API请求地址
        method: 'GET',
        headers: {
          Referer: 'https://www.douban.com/channel/30169541/', // 替换为实际的Referer地址
        },
      },
      response: {
        title: '豆瓣摄影', // 替换为实际的标题
        link: 'https://www.douban.com/channel/30169541/', // 替换为实际的链接
        description: '在豆瓣摄影', // 替换为实际的描述
        item: query.data.map((item) => ({
          title: item.title, // 提取item内的title字段
          link: item.url, // 提取item内的url字段
          description: item.photos.map((photos) => `<img src="${photos.src}"/>`).join(''), // 提取item内的photos字段并转换为描述
        })),
      },
    };
  };