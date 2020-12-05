Page({
    data: {
      menu: [],
      cap_info:{},
      contentOpacity:0.0,
      account:14,
      menu: [
        { 
          name: "[五餐] 鲜香番茄炒蛋",
          sold: "1031",
          star: "4.6",
          price: "2",
          src: "../../jpg/food/1.jpg"
        },
        { 
          name: "[五餐] 肥而不腻红烧肉",
          sold: "4733",
          star: "4.8",
          price: "7",
          src: "../../jpg/food/2.jpg"
        },
        { 
          name: "[五餐] 香爽尖椒炒肉",
          sold: "877",
          star: "4.5",
          price: "5",
          src: "../../jpg/food/3.jpg"
        } 
      ], 
    },
    remarkTap: function(){
      wx.navigateTo({
        url: '/pages/remark/remark',
      })
    },
    onLoad: function(options) {
      
    },

    onReady: function () {
      this.setData({
        cap_info : getApp().cap_info,
        user : getApp().user,
        contentOpacity: 1.0
        // css 采用transition 可以不用js实现渐现
      })
    },
    backTap: function(){
      wx.navigateBack({
        delta: 1,
        complete: (res) => {console.log(res)},
      })
    },
    addTap:function(){
      wx.showActionSheet({
        itemList: ['从相册中选择', '直接拍照'],
        success: function(res) {
          console.log(res.tapIndex)
        },
        fail: function(res) {
          console.log(res.errMsg)
        }
      })
    }
});