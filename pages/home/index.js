// pages/home/index.js
const app = getApp()
console.log(app)
let url = app.globalData.url
console.log(url)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: url + 'homepage',
      header: {
        'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
      },
      success:res=>{
        console.log(res.data)
        let { swipers, logos, pageRow, quicks}=res.data
        this.setData({
          swipers: swipers,
          logos: logos,
          pageRow: pageRow,
          quicks: quicks
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})