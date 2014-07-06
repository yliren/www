Ext.define('MyApp.controller.CallList', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            backButtonclist: 'button[id=backButtonclist]'
        },

        control: {
            backButtonclist: {
                tap: 'onBackButtonclistTap'
            }
        }
    },

    launch: function() {
        console.log("Loaded CallList Controler-------------");

    },

    onBackButtonclistTap: function(button) {
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), false);
    }
});

