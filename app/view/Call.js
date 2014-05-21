var tbar = {
 xtype : 'toolbar',
 docked : 'top',
 title : 'Prospection Tracker',
 items: [
		{
            xtype: 'button',
            iconCls : 'arrow_left',
			id: 'buttonBack'
        }
	]
}




var bbar = {
 xtype: 'toolbar',
    docked: 'bottom',
    layout: { pack: 'center' },
    items: [
        {
            xtype: 'button',
            iconCls : 'add',
			id: 'buttonOK'
        }, {
            xtype: 'button',
            iconCls : 'trash',
			id: 'buttonCancel'
        },
	]
}


Ext.define('MyApp.view.Call', {
    extend: 'Ext.Panel',
    xtype: 'main',

    config: {
        fullscreen: true,
		id : 'callForm',

        items: [
        tbar,
		{
		 xtype: 'fieldset',
            ui: 'light',
            title: 'Call record',
            items: [
                {
                    xtype: 'textfield',
                    id: 'cname',
                    label: 'Name',
                    name: 'name'
                },
                {
                    xtype: 'selectfield',
                    label: 'Type',
                    options: [
                        {text: 'Start-up',  value: 'Start-up'},
                        {text: 'PME', value: 'PME'},
                        {text: 'Group',  value: 'Group'},
						{text: 'Public',  value: 'Public'},
						{text: 'Other',  value: 'Other'}
                    ]
                },
				{
                    xtype: 'datepickerfield',
                    label: 'Date',
                    name: 'date',
                    value: new Date()
                },
				{
                    xtype: 'timepickerfield',
                    label: 'Time',
                    name: 'time',
					value: new Date()
                },
				{
                    xtype: 'selectfield',
                    label: 'Result',
                    options: [
                        {text: 'Negative',  value: 'N'},
                        {text: 'Appointement OK', value: 'O'}
                    ]
                },{
                    xtype: 'textareafield',
                    label: 'Comment',
                    maxRows: 4,
                    name: 'comment'
                }
            ]
		},
		bbar
    ]
    }
});
