// pages/goodsswq/goodsswq.js
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
        title: "斯沃琪 SUTS401",
        pic: "http://productimg.xbiao.com/18/240_360/3492514609490886.jpg",
        price: 2938700,
      },
      {
        id: 2,
        title: "斯沃琪 SUON700",
        pic: "http://productimg.xbiao.com/18/240_360/987114575083936.jpg",
        price: 261400,
      },
      {
        id: 3,
        title: "斯沃琪 YAS100G",
        pic: "http://productimg.xbiao.com/18/240_360/989614575096849.jpg",
        price: 224500,
      },
      {
        id: 4,
        title: "斯沃琪 LK292G",
        pic: "http://productimg.xbiao.com/18/240_360/982614575069616.jpg",
        price: 311800,
      },
      {
        id: 5,
        title: "斯沃琪 YIS402",
        pic: "http://productimg.xbiao.com/18/240_360/5247014750435979.jpg",
        price: 888888,
      },
      {
        id: 6,
        title: "斯沃琪 YWS400",
        pic: "http://productimg.xbiao.com/18/240_360/3969114575107192.jpg",
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
      url: '/pages/toSecond/toSecond'
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