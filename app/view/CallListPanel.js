var tbarclist = {
 xtype : 'toolbar',
 docked : 'top',
 title : 'Prospection Tracker',
 items: [
		{
            xtype: 'button',
            iconCls : 'arrow_left',
			id: 'backButtonclist'
        }
	]
};

var  callItemTpl = new Ext.XTemplate(
    '<tpl for=".">',
    '<tpl if="result == 0"">',
    '<div class="call" >{name}</div>',
    '</tpl>',
    '<tpl if="result == 1"">',
    '<div class="call"  style="background-color:#ff0000">{name}</div>',
    '</tpl>',
    '</tpl>'
);


var liststore = Ext.create('MyApp.store.CallList');
//var liststore = Ext.getStore('CallList');

var listPanel = {
    xtype : 'list',
    store : liststore,
    id: 'itemlist',
    //itemTpl: '<div class="call">{name}  {result}</div>',
    itemTpl:callItemTpl,
    grouped: true
};

Ext.define('MyApp.view.CallListPanel', {
    extend: 'Ext.Container',
    xtype: 'calllistpan',
    
    config: {
        fullscreen: true,
		layout: 'fit',
		id : 'calllistpan',
		items: [
            tbarclist,
			/*
			{
			xtype :'list',
			itemTpl: '<div class="call">{name}</div>',
			store: liststore,
			grouped: true
			}*/
			listPanel
		]		
	}

	
});
