// pages/index/good/detail/detail.js
Page({
  data: {
    deail: {
      id: 1,
      title: "劳力士1950系列3日动力储存自动专业潜水红金腕表",
      price: 169.00,

      tcs: [
        "官方标配",
        "简约黑",
        "奢华金",
        "深空灰"
      ],
      tcprices: [
        19800,
        17900,
        19000,
        18800
      ],
      tc: 1,
      pics: [
       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524220658992&di=20132e4d830720e27ef91b5b1d131c92&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0188b859afe2fca8012028a95bf3d0.png%402o.jpg",
      ],
      xqs: [
        {
          type: 0,
          content: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524221496816&di=c9515a3380756c6e82bd8c2c3d2ff548&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f66f5907f061a801214550bcd540.JPG%401280w_1l_2o_100sh.png",
        },
        {
          type: 0,
          content: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524221496816&di=c9515a3380756c6e82bd8c2c3d2ff548&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f66f5907f061a801214550bcd540.JPG%401280w_1l_2o_100sh.png"
        },
        {
          type: 0,
          content: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524221496816&di=c9515a3380756c6e82bd8c2c3d2ff548&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f66f5907f061a801214550bcd540.JPG%401280w_1l_2o_100sh.png"
        },
        {
          type: 1,
          content: ""
        }
      ]
    },
    // id: 1
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    if (options) {
      if (options.id) {
        console.log(options.id)
        this.setData({
          id: options.id
        })
      }
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var id = this.data.id;
    console.log("onShow --> id:", id);
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 390000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/good_get.do?id=' + id,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        that.setData({
          deail: res.data
        })
      },
      
      complete: function () {
        // complete
        wx.hideToast();
      }
    })
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  buyNow: function (e) {
    var id = this.data.deail.id;
    var tc = this.data.deail.tc;
    console.log("buyNow --> id:", id);
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 390000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/good_buy.do?id=' + id + '&tc=' + tc,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        if (res.data.flag) {
          var orderId = res.data.orderId;
          wx.navigateTo({
            url: '../../../user/order/detail/detail?id=' + orderId
          })
        } else {
          setTimeout(function () {
            wx.showToast({
              title: "操作失败",
              duration: 1500
            })
          }, 100)
        }
      },
      fail: function () {
        // fail
        setTimeout(function () {
          wx.showToast({
            title: "操作失败",
            duration: 1500
          })
        }, 100)
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })
  },
  addToCart: function (e) {
    var id = this.data.deail.id;
    var tc = this.data.deail.tc;
    console.log("onShow --> id:", id);
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 390000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/good_addToCart.do?id=' + id + '&tc=' + tc,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        if (res.data.flag) {
          setTimeout(function () {
            wx.showToast({
              title: "加入购物车成功",
              duration: 1500
            })
          }, 100)
        } else {
          setTimeout(function () {
            wx.showToast({
              title: "操作失败",
              duration: 1500
            })
          }, 100)
        }
      },
      fail: function () {
        // fail
        setTimeout(function () {
          wx.showToast({
            title: "操作失败",
            duration: 1500
          })
        }, 100)
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })



  },
  changeTc: function (e) {
    var tc = e.detail.value;
    console.log("changeTc--> tc:", tc)
    this.setData({
      " deail.tc": tc
    })
  }
})