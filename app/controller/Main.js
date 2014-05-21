var clistpanel;
var cview;
var vstat;

var cstore = Ext.create('MyApp.store.CallList');


Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: { 
            addButton: 'button[id=addButton]',
			listButton: 'button[id=listButton]',
			statButton: 'button[id=statButton]'
        },

        control: {
            addButton: {
                tap: 'onAddButtonTap'
            },
			listButton: {
                tap: 'onListButtonTap'
            },
			statButton: {
                tap: 'onStatButtonTap'
            }
			
        }

    },


    launch: function() {
        clistpanel = Ext.create('MyApp.view.CallListPanel');
        cview = Ext.create('MyApp.view.Call');
        vstat = Ext.create('MyApp.view.Stat');
    },


    onAddButtonTap: function(button) {
		Ext.Viewport.setActiveItem(cview);
	},

	onListButtonTap: function(button) {
        var callsStore = clistpanel.getItems().items[1].getStore();
        /*reload the store attached with the calllist*/
        callsStore.load();
	    Ext.Viewport.setActiveItem(clistpanel);

    },
	
	onStatButtonTap: function(button) {
	    var store = Ext.create('MyApp.store.Statstore');
		//TODO..
		//vstat.setStore(store);
		Ext.Viewport.setActiveItem(vstat);
		
    }
	

});