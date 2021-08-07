import Vue from 'vue'
import Router from "vue-router"
import Main from "../views/Main"
import NavTop from "../views/NavTop"
import Chart1 from "../views/DoubleLineChart"
import NavLeft from "../views/NavLeft"
import Chart2 from "../views/PieChart"

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/login',
      component:Main
    },{
        path: '/main',
        component:NavTop
    },
    {
      path:'/chart1',
      component:Chart1
    },
    {
      path:'/nav',
      component:NavLeft
    },
    {
      path:'/chart2',
      component:Chart2
    }
  ]
})