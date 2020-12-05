Page({
  data: {
    url:"",
    name:"",
    user:{},
    list_info:[
    {
        value:"",
        name:"您的工号"
    },
    {
        value:"",
        name:"您的邮箱"
    }
    ],
    list_card1: [
        { 
          src: "icon-phone",
          text: "更改手机",
        },
        {
          src: "icon-pwd",
          text: "更改密码",
        },
        {
          src: "icon-contact",
          text: "联系反馈",
        },
        {  
          src: "icon-exit",
          text: "退出登录",
        },
      
    ],   
    list_card2: [
      {
          "src": "icon-company",
          "name": "杭州丰美餐饮管理有限公司",
          "description":""
      },
      {
          "src": "icon-me",
          "name": "个性化设置",
          "description":"自己颜色风格的小程序"
      },
      {
          "src": "icon-order",
          "name": "应用介绍 ",
          "description":"这个应用的故事"
      },
      {
          "src": "icon-contact",
          "name": "关于我们",
          "description":"想知道我们的故事吗"
      },
  ]
  },

  onLoad: function (options){
    
    this.setData({
      url: getApp().url,
      user : getApp().user,
      name : getApp().Tname
    });
  
  },

  btnTap: function (res){
    switch(res.currentTarget.dataset.index) {
      case 0:{
        wx.navigateTo({
          url: '/pages/_emailChange/emailChange',
        })
        break;
      }   
      case 1:{
        wx.navigateTo({
          url: '/pages/_pwdChange/pwdChange',
          })
        break;
      }
          
      case 2:{
        wx.navigateTo({
          url: '/pages/_feedback/feedback',
        })
        break;
      }
      case 3:{
        wx.navigateTo({
          url: '/pages/login/login',
        })
        wx.setStorageSync('i', "");
        wx.setStorageSync('a', "");
        wx.setStorageSync('r', "");
        break;
      }
          
      default:{
        break;
      }
        
    }   
  },
})