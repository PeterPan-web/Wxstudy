export default {
  install: (Vue, options) => {
    require.config({
      paths: {
        'vue': 'path/to/vue',
        'echarts': 'path/to/echarts',
        'vue-echarts': 'path/to/vue-ehcarts'
      }
    })
    require(
      [
        'vue-echarts',
        'echarts/lib/chart/pie',
        'echarts/lib/chart/line',
        'echarts/lib/component/tooltip',
        'echarts/lib/component/legend',
        'echarts/lib/component/markArea',
        'echarts/lib/component/title',
        'echarts/lib/component/dataZoom'
      ],
      function (ECharts) {
        // register component to use...
        Vue.component('v-chart', ECharts)
      })
  }
}
