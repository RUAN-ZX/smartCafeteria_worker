Page({
  data: {
    
    swiperList: [
      "../../jpg/banner/1.jpg",
      "../../jpg/banner/2.jpg",
      "../../jpg/banner/3.jpg"
    ],
    r: [
    ],
    contentOpacity:0.0,
    
    cap_info:{},
  },
  onLoad: function () {
    let pic = getApp().pic;
    this.setData({
      r:[
        {
          rname: "A-Ryan",
          rtime: "2020-11-25 12:00",
          rpreface: pic+"u/1.jpg",
        },
        {
          rname: "SST1",
          rtime: "2020-11-25 11:40",
          rpreface: pic+"u/2.jpg",
        },
        {
          rname: "233233",
          rtime: "2020-11-25 11:30",
          rpreface: pic+"u/3.jpg",
        },
        {
          rname: ":)",
          rtime: "2020-11-25 11:20",
          rpreface: pic+"u/4.jpg",
        },
        {
          rname: "Alexander",
          rtime: "2020-11-25 11:10",
          rpreface: pic+"u/5.jpg",
        },
      ],
    })
  },
  onReady: function () {
    this.setData({
      cap_info : getApp().cap_info,
      user : getApp().user,
      contentOpacity: 1.0
      // css 采用transition 可以不用js实现渐现
    })
  },
  addTap:function(){
    wx.navigateTo({
      url: '/pages/orderfinish/orderfinish',
    })
  },
  rests:function(e){
    // e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  }

})