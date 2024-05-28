const got = require('@/utils/got');

module.exports = async (ctx) => {
    const link = 'https://www.douban.com/channel/30169541/';
    const response = await got({
        method: 'get',
        url: 'https://m.douban.com/rexxar/api/v2/lembas/channel/30169541/feed?ck=5Zcs&for_mobile=1&start=0&count=20&nav=new',
        headers: {
            Referer: link,
        },
    });

  
    const data = response.data.items;
    ctx.state.data = {
        title: '豆瓣摄影',
        link,
        description: '在豆瓣摄影',
        item: data.map(({ title, url, photos }) => ({
            title: title,
            link: url,
            description: photos.map(photo => `<img src="${photo.src}" />`).join(''),
        })),
    };
};