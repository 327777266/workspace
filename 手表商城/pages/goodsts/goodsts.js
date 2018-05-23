// pages/goodsts/goodsts.js
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
        title: "天梭 T41.1.483.33",
        pic: "http://productimg.xbiao.com/13/240_360/732714567310375.jpg",
        price: 2938700,
      },
      {
        id: 2,
        title: "天梭 T063.610.16.037.00",
        pic: "http://productimg.xbiao.com/13/240_360/757914568119264.jpg",
        price: 261400,
      },
      {
        id: 3,
        title: "天梭 T41.1.423.33",
        pic: "http://productimg.xbiao.com/13/240_360/26714568038749.jpg",
        price: 224500,
      },
      {
        id: 4,
        title: "天梭 T41.1.483.53",
        pic: "http://productimg.xbiao.com/13/240_360/732914567994644.jpg",
        price: 311800,
      },
      {
        id: 5,
        title: "天梭 T006.407.11.033.00",
        pic: "http://productimg.xbiao.com/13/240_360/5540814963946867.jpg",
        price: 888888,
      },
      {
        id: 6,
        title: "天梭 T063.617.16.037.00",
        pic: "http://productimg.xbiao.com/13/240_360/758114568939874.jpg",
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
      url: '/pages/deail/deail'
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