const singleLine = require('single-line-log').stdout
const provinces = [
  '河北', '山西', '黑龙江', '吉林', '辽宁', '江苏', '浙江', '安徽', '福建', '江西', '山东', 
  '河南', '湖北', '湖南', '广东', '海南', '四川', '贵州', '云南', '陕西', '甘肃', '青海', 
  '台湾', '内蒙古', '广西', '西藏', '宁夏', '新疆', '北京', '天津', '上海', '重庆', '香港', '澳门'
]

async function province(str) {
  let milliSecond = 1000 * 5
  setInterval(() => {
    milliSecond = milliSecond - 60
    let i = Math.round(Math.random() * (provinces.length))
    if(milliSecond<=0){
      if(str){
        singleLine(`[${Math.round(milliSecond / 1000)}秒] ----------------- ${str}`)
      }else{
        singleLine(`[${Math.round(milliSecond / 1000)}秒] ----------------- ${provinces[i]}`)
      }
      console.log('出发吧！！！')
      process.exit(1)
    }else{
      singleLine(`[${Math.round(milliSecond / 1000)}秒] ----------------- ${provinces[i]}`)
    }
  }, 60);
}


module.exports = province;