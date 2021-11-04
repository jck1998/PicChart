const Mock = require('mockjs')


 Mock.mock('/api/pieinfo',{
  'data|5' :[
    {
      'item':'@cname',
      'count|1-100': 1,
      'percent|0.1-10': 1
    }
  ]
})
