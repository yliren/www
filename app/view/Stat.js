Ext.require([
    'Ext.chart.CartesianChart',
	'Ext.chart.axis.Numeric',
	'Ext.chart.axis.Category',
	//'Ext.chart.series.Line',
	'Ext.chart.series.Bar'
]);


var tbar = {
 xtype : 'toolbar',
 docked : 'top',
 title : 'Prospection Tracker',
 items: [
		{
            xtype: 'button',
            iconCls : 'arrow_left',
			id: 'backButtonstat'
        }
	]
}
var storestat = Ext.create("Ext.data.Store", {
    fields: ['name', 'value1', 'value2'],
    data: [
        { name: 'Jan', value1: 5, value2: 12 },
        { name: 'Feb', value1: 23, value2: 42 },
        { name: 'Mar', value1: 83, value2: 13 },
        { name: 'Apr', value1: 233, value2: 34 },
        { name: 'May', value1: 509, value2: 24 },
        { name: 'Jun', value1: 864, value2: 2 },
        { name: 'Jul', value1: 1144, value2: 25 },
        { name: 'Aug', value1: 1179, value2: 24 },
        { name: 'Sep', value1: 946, value2: 39 },
        { name: 'Oct', value1: 591, value2: 42 },
        { name: 'Nov', value1: 288, value2: 23 },
        { name: 'Dec', value1: 109, value2: 34 }
    ]
});



Ext.define('MyApp.view.Stat', {
    extend: 'Ext.Panel',
    xtype: 'stat',

    config: {
        fullscreen: true,
    layout: 'fit',
    style: 'background: white',
    items: [
		tbar,
        {
            xtype: 'chart',
            background: "none",
            store: storestat,
            legend: {
                position: "bottom"
            },
            series: [
                {
                    type: 'bar',
                    xField: 'name',
                    yField: ['value2'],
                    title: ['RDV OK'],
                    style: {
                        maxBarWidth: 15,
                        lineWidth: 1.5,
                        fill: "#a61120",
                        stroke: 'black',
                        shadowColor: 'rgba(0,0,0,0.7)',
                        shadowBlur: 10,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3
                    }
                }
            ],
            axes: [
                {
                    type: 'numeric',
                    position: 'left',
                    grid: {
                        odd: {
                            fill: '#fafafa'
                        }
                    },
                    style: {
                        axisLine: false,
                        estStepSize: 20,
                        stroke: '#ddd'
                    },
                    minimum: 0,
                    maximum: 50
                },
                {
                    type: 'category',
                    position: 'bottom',
                    visibleRange: [0, 0.7],
                    style: {
                        estStepSize: 1,
                        stroke: '#999'
                    }
                }
            ]
        }

    ]
		
	}
});




