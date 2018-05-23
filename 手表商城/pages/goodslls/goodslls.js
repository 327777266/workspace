// pages/index/good/good.js
Page({
  data: {
    typelist: [
      {
        id: 0,
        name: "默认"
      },
      {
        id: 1,
        name: "价格"
      },
      {
        id: 2,
        name: "销量"
      },
      {
        id: 3,
        name: "人气"
      },
  
    
    ],
    goodlist: [
      {
        id: 1,
        title: "劳力士 116610LV-97200 绿盘",
        pic: "http://productimg.xbiao.com/25/240_360/512714567315376.jpg",
        price: 70000,
      },
      {
        id: 2,
        title: "劳力士 116610LN-97200 黑盘",
        pic: "http://productimg.xbiao.com/25/240_360/512414567992431.jpg",
        price: 65900,
      },
      {
        id: 3,
        title: "劳力士 潜航者型 16610LV-93250",
        pic: "/image/11-11.jpg",
        price: 70000,
      },
      {
        id: 4,
        title: "劳力士 116500LN-78590白盘",
        pic: "http://productimg.xbiao.com/25/240_360/4366914581957438.jpg",
        price: 95000,
      },
      {
        id: 5,
        title: "劳力士 116233香槟盘镶钻",
        pic: "http://productimg.xbiao.com/25/240_360/528414567334906.jpg",
        price: 97800,
      },
      {
        id: 6,
        title: "劳力士 116710BLNR-78200",
        pic: "http://productimg.xbiao.com/25/240_360/2907914568963299.jpg",
        price: 69300,
      }
    ],
 
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
   
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    
   
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  navigateToGood: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log("navigateToGood --> id:", id);
    wx.navigateTo({
      url: '/pages/toFirst/toFirst'
    })
  },
  searchGoodByTypeId: function (e) {
    var id = e.currentTarget.dataset.id;
    this.setData({
      typeId: id
    })
    console.log("searchGoodByTypeId --> id:", id);
   
  
  },
  searchGood: function (e) {
    var id = this.data.typeId;
    var keyword = e.detail.value.keyword;
    console.log("SearchGood--> keyword:" + keyword);
   

  }
})