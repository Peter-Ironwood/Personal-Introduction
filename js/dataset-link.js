window.addEventListener('load', function() {
    var dom = document.getElementById('container-datalink');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};
    
    var option;

    setTimeout(function () {
        option = {
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['Year', '2012', '2013', '2014', '2015', '2016', '2017'],
                    ['HACK', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                    ['PORT', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                    ['STAT', 40.1, 62.2, 69.5, 36.4, 28.7, 10.2],
                    ['INSD', 25.2, 37.1, 41.2, 18, 33.9, 30.2]
                ]
            },
            xAxis: { type: 'category' },
            yAxis: { gridIndex: 0 },
            grid: { top: '55%' },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' }
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' }
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' }
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' }
                },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    emphasis: {
                    focus: 'self'
                    },
                    label: {
                    formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                    itemName: 'Breach Type',
                    value: '2012',
                    tooltip: '2012'
                    }
                }
            ]
        };
        myChart.on('updateAxisPointer', function (event) {
            const xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                    }
                });
            }
        });
        myChart.setOption(option);
    });

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}, false)