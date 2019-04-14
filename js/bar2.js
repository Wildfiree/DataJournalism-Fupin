var myChart = echarts.init(document.getElementById('bar2'));
	
	

var option = {
    title: {
        // text: '西部省份被补助金额',
        subtext: '单位：亿元',
		subtextStyle:{color:'black'}
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
	
    legend: {
        data: ['2016年', '2013年'],
		textStyle: {
                        fontSize: 13
			
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
		axisLabel:{ show:'true',
				   textStyle:{fontSize:'15',}
    }
	},
    yAxis: {
        type: 'category',
        data: ['宁夏','重庆','内蒙', '甘肃', '青海', '陕西','广西','河北','四川', '贵州', '云南', ],
		axisLabel:{ show:'true',
				   textStyle:{fontSize:'13',} }
		 },
    series: [
        {
            name: '2016年',
            type: 'bar',
            data: [1.10,1.24,1.28, 1.30, 1.60, 2.00, 2.00, 4.52,4.90,5.00,5.55],
			color:'#5c8aad',
			 label: {
                normal: {show:true, position: 'insideRight'
                }},
			 markLine : {
                data : [
                    {type : 'average', name: '平均值',lineStyle: {  color: '#848484' },label: { normal: {position: 'end',formatter: '2016平均值2.76亿元',textStyle:{color:'#4C4C4C'}}}}
                ]
            }
        },
        
        {
            name: '2013年',
            type: 'bar',
            data: [0.33,0.42,0.93,0.86,0.37,0.37,0.40,0,1.98,2.38,3.00],
			color:'#a8c2d8',
			label: {
                normal: {
                    show: true, position: 'insideRight'
                }},
			 markLine : {
                data : [
                    {type : 'average', name: '平均值',lineStyle: {  color: '#848484' }, label: { normal: {position: 'end',formatter: '2013平均值1.1亿元',textStyle:{color:'#4C4C4C'}}},
					
					}
            
			 ]
             },
		}
		]
       };

		 myChart.setOption(option);
		