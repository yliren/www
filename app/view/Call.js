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
                    id: 'ctype',
                    options: [
                        {text: 'Start-up',  value: '0'},
                        {text: 'PME', value: '1'},
                        {text: 'Group',  value: '2'},
						{text: 'Public',  value: '3'},
						{text: 'Other',  value: '4'}
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
                    id: 'cresult',
                    options: [
                        {text: 'Negative',  value: '0'},
                        {text: 'Appointement OK', value: '1'},
                        {text: 'Staff absent', value: '2'},
                        {text: 'Got other contact', value: '3'},
                        {text: 'Operator blocking', value: '4'}
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
