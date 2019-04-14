var myChart = echarts.init(document.getElementById('pie1'));
	
	


var option = {
     tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
	title: {
        text: '广西贫困县数量',
        x:'center',
        textStyle:{color:'#b5b5b6'},
        subtextStyle:{color:'black'}
    },
	        color:['#d48d92', '#a8c2d8','#e5cecf'],
   
    series: [
        {
            name:'贫困县数量',
            type:'pie',
            radius: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
					textStyle:{fontSize:'17',}}
                    
                },
               
            
		  
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:10, name:'百色市'},
                {value:7, name:'河池市'},
                {value:16, name:'其他'},
                
            ]
        }
    ]
};


		 myChart.setOption(option);
		