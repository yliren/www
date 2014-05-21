Ext.require([
    'MyApp.view.Call'
]);


var tbar = {
 xtype : 'toolbar',
 docked : 'top',
 title : 'Prospection Tracker'
}

Ext.define('MyApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    config: {
        fullscreen: true,
		defaults :{
		iconMask : true
		},
		layout : {
		type : 'vbox',
		pack : 'center',
		align : 'center'
		},

        items: [
        tbar,
		{
			xtype :'spacer'
		},{
		    id : 'addButton',
			xtype: 'button',
			text :'New call',
			iconAlign : 'bottom',
			iconCls : 'add',
			width : 150
		},{
			xtype :'spacer'
		},{
		    xtype: 'button',
			id : 'statButton',
			iconAlign : 'bottom',
			iconCls : 'bookmarks',
			text :'Statistics',
			width : 150
		},{
			xtype :'spacer'
		},		{
			id : 'listButton',
		    xtype: 'button',
			text :'History',
			iconAlign : 'bottom',
			iconCls : 'time',
			width : 150
		},{
			xtype :'spacer'
		}
    ]
    }
});
