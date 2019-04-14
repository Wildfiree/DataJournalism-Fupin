 var myChart = echarts.init(document.getElementById('pie2'));
	
	


var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title: {
        text: '河北贫困县数量',
        // show: true,
        // position:'center',
        x:'center',
        textStyle:{color:'#b5b5b6'},
        subtextStyle:{color:'black'}
    },
	color:['#d48d92', '#a8c2d8','#5c8aad','#e5cecf'],
    series: [
        {
            name:'贫困县数量',
            type:'pie',
            radius: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
					textStyle:{fontSize:'17',}
                    
                },
                
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:11, name:'张家口市'},
                {value:8, name:'保定市'},
                {value:6, name:'承德市'},
				{value:20,name:'其他'}
                
            ]
        }
    ]
};


		 myChart.setOption(option);