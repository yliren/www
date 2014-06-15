Ext.define('MyApp.controller.Call', {
    extend: 'Ext.app.Controller',

    config: {
        refs: { 
            okButton: '#buttonOK',
			cancelButton: '#buttonCancel',
            backButton: '#buttonBack',
			callName: '#cname',
            callResult: '#cresult',
            callType: '#ctype'
        },

        control: {
            okButton: {
                tap: 'onOkButtonTap'
            },
			cancelButton: {
                tap: 'onCancelButtonTap'
            },
			backButton: {
                tap: 'onCancelButtonTap'
            }

        }

    },

    launch: function() {
        console.log("Loaded Call Controler.");
    },

    onOkButtonTap: function(button) {
	    var call = Ext.create('MyApp.model.Call', {name: this.getCallName().getValue(),
                                                   result: this.getCallResult().getValue(),
                                                   cType: this.getCallType().getValue()});

        console.log("Call result."+this.getCallType().getValue());
        var callsStore = clistpanel.getItems().items[1].getStore();
        /*reload the store attached with the calllist*/
        callsStore.load();
		callsStore.add(call);
		callsStore.sync();
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), false);
    },
	onCancelButtonTap: function(button) {
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), false);
    }


});