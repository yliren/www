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
    '<div class="cNegative">{name}</div>',
    '</tpl>',
    '<tpl if="result == 1"">',
    '<div  class="cOK">{name}</div>',
    '</tpl>',
    '<tpl if="result == 2"">',
    '<div  class="cAbsent">{name}</div>',
    '</tpl>',
    '<tpl if="result == 3"">',
    '<div  class="cOther">{name}</div>',
    '</tpl>',
    '<tpl if="result == 4"">',
    '<div  class="cOperator">{name}</div>',
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
    cls:'myList',
    listeners : {
        itemtap: function (list, index, item, record) {
            console.log("item selected!"+record);
            //charger la page Call avec les données correspondantes.
            cview.
            Ext.Viewport.setActiveItem(cview);
        }
    }

   // grouped: true
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
