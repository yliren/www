Ext.define('MyApp.view.CallList', {
    extend: 'Ext.List',
    xtype: 'calllist',

    config: {
        fullscreen: true,
		id : 'calllist',
		itemTpl: '<div class="call">{name}</div>',
		//store: store,
		grouped: true
		
	}
});


