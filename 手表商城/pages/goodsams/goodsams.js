// pages/goodsams/goodsams.js
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
        title: "爱马仕 035184WW00",
        pic: "http://productimg.xbiao.com/64/240_360/1567314604484852.jpg",
        price: 35000,
      },
      {
        id: 2,
        title: "爱马仕 W038700WW00",
        pic: "http://productimg.xbiao.com/64/240_360/2881614720230366.jpg",
        price: 53200,
      },
      {
        id: 3,
        title: "爱马仕 HH1.201.130/VBA",
        pic: "http://productimg.xbiao.com/64/240_360/2200414611249314.jpg",
        price: 23000,
      },
      {
        id: 4,
        title: "爱马仕 HH1.210.260/VBA1",
        pic: "http://productimg.xbiao.com/64/240_360/2278314622595323.jpg",
        price: 311800,
      },
      {
        id: 5,
        title: "爱马仕 Dans un Jardin anglais英式花园",
        pic: "http://productimg.xbiao.com/64/240_360/5844915054619213.jpg",
        price: 888888,
      },
      {
        id: 6,
        title: "爱马仕 Arceau Tiger Tiger 老虎",
        pic: "http://productimg.xbiao.com/64/240_360/5845215054623656.jpg",
        price: 328000,
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
      url: '/pages/toEighth/toEighth'
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