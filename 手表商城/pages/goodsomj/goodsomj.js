// pages/goodsomj/goodsomj.js
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
        title: "欧米茄 424.13.40.20.02.001",
        pic: "http://productimg.xbiao.com/23/240_360/2646014568031076.jpg",
        price: 2938700,
      },
      {
        id: 2,
        title: "欧米茄 212.30.41.20.01.003",
        pic: "http://productimg.xbiao.com/23/240_360/1191114568913702.jpg",
        price: 261400,
      },
      {
        id: 3,
        title: "欧米茄 431.33.41.21.03.001",
        pic: "http://productimg.xbiao.com/23/240_360/720714568039803.jpg",
        price: 224500,
      },
      {
        id: 4,
        title: "欧米茄 231.10.42.21.03.003",
        pic: "http://productimg.xbiao.com/23/240_360/3592114575984922.jpg",
        price: 311800,
      },
      {
        id: 5,
        title: "欧米茄 123.20.24.60.55.001",
        pic: "http://productimg.xbiao.com/23/240_360/584614579220425.jpg",
        price: 888888,
      },
      {
        id: 6,
        title: "欧米茄 431.13.41.21.02.001",
        pic: "http://productimg.xbiao.com/23/240_360/723214568034041.jpg",
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
      url: '/pages/toThird/toThird'
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