Ext.define('MyApp.controller.Stat', {
    extend: 'Ext.app.Controller',

    config: {
        refs: { 
            backButtonstat: 'button[id=backButtonstat]'
        },

        control: {
            backButtonstat: {
                tap: 'onBackButtonstatTap'
            }
			
        },

    },


    launch: function() {
        console.log("Loaded Controler Stat-------------"+this);
    },

	onBackButtonstatTap: function(button) {
        console.log("back in Stat");
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(),false);
    }

});

