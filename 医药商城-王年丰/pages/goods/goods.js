// pages/goods/goods.js
Page({
  data: {
    typelist: [
      {
        id: 0,
        name: "全部"
      },
      {
        id: 1,
        name: "老人用药"
      },
      {
        id: 2,
        name: "儿童用药"
      },
      {
        id: 3,
        name: "两性用品"
      },
      {
        id: 4,
        name: "母婴用品"
      },
      {
        id: 5,
        name: "保健养生"
      },
      {
        id:6,
        name: "皮肤护理"
      },
      {
        id: 7,
        name: "心脑血管"
      },

    ],
    goodlist: [
      {
        id: 1,
        title: "汤臣倍健 健力多 软骨素片",
        pic: "https://p2.maiyaole.com/img/item/201802/28/200_20180228145523143.jpg",
        price: 299,
      },
      {
        id: 2,
        title: "修正 氨基葡萄糖",
        pic: "https://p2.maiyaole.com/img/201802/02/200_20180202121945314.jpg",
        price: 200,
      },
      {
        id: 3,
        title: "德国 aptamil奶粉1段",
        pic: "https://p3.maiyaole.com/img/201609/21/200_2016092116185351.jpg",
        price: 555,
      },
      {
        id: 4,
        title: "德国 aptamil奶粉金粉装2段",
        pic: "https://p1.maiyaole.com/img/201707/25/200_20170725164155930.jpg",
        price: 356,
      },
      {
        id: 5,
        title: "碧生源 常青茶",
        pic: "https://p1.maiyaole.com/img/item/201711/24/200_20171124193106624.jpg",
        price: 66.8,
      },
      {
        id: 6,
        title: "左旋肉碱茶多酚片",
        pic: "https://p1.maiyaole.com/img/201805/11/200_20180511140256812.jpg",
        price: 49,
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
      url: '/pages/rush/rush'
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