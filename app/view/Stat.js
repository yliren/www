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
    fields: ['calldate', 'resultOk', 'resultKo', 'getOtherInfo'],
    data: [
        { calldate: 'Jan', resultOk: 5, resultKo: 12,  getOtherInfo: 5},
        { calldate: 'Feb', resultOk: 23, resultKo: 42,  getOtherInfo: 4},
        { calldate: 'Mar', resultOk: 8, resultKo: 13,  getOtherInfo: 7},
        { calldate: 'Apr', resultOk: 23, resultKo: 34,  getOtherInfo: 9},
        { calldate: 'May', resultOk: 5, resultKo: 24,  getOtherInfo: 3},
        { calldate: 'Jun', resultOk: 8, resultKo: 2,  getOtherInfo: 3},
        { calldate: 'Jul', resultOk: 11, resultKo: 25,  getOtherInfo: 23},
        { calldate: 'Aug', resultOk: 11, resultKo: 24,  getOtherInfo: 4},
        { calldate: 'Sep', resultOk: 9, resultKo: 39,  getOtherInfo: 31},
        { calldate: 'Oct', resultOk: 1, resultKo: 42,  getOtherInfo: 20},
        { calldate: 'Nov', resultOk: 2, resultKo: 23,  getOtherInfo: 1},
        { calldate: 'Dec', resultOk: 1, resultKo: 34,  getOtherInfo: 3}
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
                    xField: 'calldate',
                    yField: ['resultKo', 'resultOk'],
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
                    title: 'Nb calls',
                   /* style: {
                        axisLine: false,
                        estStepSize: 20,
                        stroke: '#ddd'
                    },*/
                    minimum: 0,
                    maximum: 50
                },
                {
                    type: 'category',
                    position: 'bottom'
                   /* style: {
                        estStepSize: 1,
                        stroke: '#999'
                    }*/
                }
            ]
        }

    ]
		
	}
});




