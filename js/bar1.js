var myChart = echarts.init(document.getElementById('bar1'));
var option = {
    title: {
        // text: '东部省份补助金额',
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
			  
	},
    },
	
    yAxis: {
        type: 'category',
        data: ['辽宁', '福建', '山东', '浙江','江苏','上海','北京', '天津', '广东', ],
		
	axisLabel:{ show:'true',
				   textStyle:{fontSize:'13',} }
	},	
    series: [
        {
            name: '2016年',
            type: 'bar',
            data: [0.95, 1.27, 1.54, 2.86, 3.86, 3.99,4.00,4.82,9.75],
			color:'#d48d92',
			   label: {
                normal: {
                    show: true,position: 'insideRight'
                }},
			markLine : {
                data : [
                    {type : 'average', name: '平均值',lineStyle: {  color: '#848484' },label: { normal: {position: 'end',formatter: '2016平均值3.67亿元',textStyle:{color:'#4C4C4C'}}}}
                ]
            }
			
        },
        {
            name: '2013年',
            type: 'bar',
            data: [0.67, 0.54, 0.73, 1.70, 0.67, 3.521,0.93,0.65,1.27],
			color:'#e5cecf',
			 label: {
                normal: {
                    show: true,position: 'insideRight'}},
			markLine : {
                data : [
                    {type : 'average', name: '平均值',lineStyle: {  color: '#848484' },label: { normal: {position: 'end',formatter: '2013平均值1.18亿元',textStyle:{color:'#4C4C4C'}}}}
                ]
            }
        },
    ]
};

		 myChart.setOption(option);