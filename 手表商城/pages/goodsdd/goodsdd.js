// pages/goodsdd/goodsdd.js
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
        title: "帝舵 56000-68060银色提花",
        pic: "http://productimg.xbiao.com/35/240_360/1420714568936463.jpg",
        price: 2938700,
      },
      {
        id: 2,
        title: "帝舵 M79250BM-0001",
        pic: "http://productimg.xbiao.com/35/240_360/4376214587025808.jpg",
        price: 261400,
      },
      {
        id: 3,
        title: "帝舵 72033-62453 10di",
        pic: "http://productimg.xbiao.com/35/240_360/1423814691713277.gif",
        price: 224500,
      },
      {
        id: 4,
        title: "帝舵 79733N",
        pic: "http://productimg.xbiao.com/35/240_360/5450014902407977.jpg",
        price: 311800,
      },
      {
        id: 5,
        title: "帝舵 79220R 不锈钢表带",
        pic: "http://productimg.xbiao.com/35/240_360/1909614605385932.jpg",
        price: 888888,
      },
      {
        id: 6,
        title: "帝舵 m79230n-0002",
        pic: "http://productimg.xbiao.com/35/240_360/4376514587037595.jpg",
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
      url: '/pages/toSeventh/toSeventh'
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