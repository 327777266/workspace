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
        title: "百达翡丽 6104G-001",
        pic: "http://productimg.xbiao.com/59/240_360/974314619082909.jpg",
        price: 2938700,
      },
      {
        id: 2,
        title: "百达翡丽 5227G-001",
        pic: "http://productimg.xbiao.com/59/240_360/2892714568270605.jpg",
        price: 261400,
      },
      {
        id: 3,
        title: "百达翡丽 5711/1A 010 不锈钢",
        pic: "http://productimg.xbiao.com/59/240_360/220814581073193.jpg",
        price: 224500,
      },
      {
        id: 4,
        title: "百达翡丽 5146R 玫瑰金",
        pic: "http://productimg.xbiao.com/59/240_360/224114568232659.jpg",
        price: 311800,
      },
      {
        id: 5,
        title: "百达翡丽 5002P 铂金",
        pic: "http://productimg.xbiao.com/59/240_360/1035714567311753.jpg",
        price: 888888,
      },
      {
        id: 6,
        title: "百达翡丽 5712R-001",
        pic: "http://productimg.xbiao.com/59/240_360/221114581207306.jpg",
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
      url: '/pages/toFifth/toFifth'
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