<template>
  <div id="c1"></div>
<!--  <div>{{info}}</div>-->
</template>

<script>
  import { Chart } from '@antv/g2';
  import axios from 'axios';


  export default {
    name: "PieChart",
    data(){
      return{
        info:[]
      }
    },
    mounted(){
      this.initPieChart()
    },
    methods:{
      initPieChart(){
        const chart = new Chart({
          container: 'c1',
          autoFit: true,
          height: 500,
        });

        chart.coordinate('theta', {
          radius: 0.75,
        });

        chart.data(this.info);

        chart.scale('percent', {
          formatter: (val) => {
            val = val * 100 + '%';
            return val;
          },
        });

        chart.tooltip({
          showTitle: false,
          showMarkers: false,
        });

        chart
            .interval()
            .position('percent')
            .color('item')
            .label('percent', {
              content: (data) => {
                return `${data.item}: ${data.percent * 100}%`;
              },
            })
            .adjust('stack');

        chart.interaction('element-active');

        chart.render();

        axios.get('./mock/pieinfo.json').then(res =>{JSON.parse(this.info=res.data.data)});


      }
    }
  }
</script>