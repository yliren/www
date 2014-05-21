Ext.define("MyApp.store.Statstore", {
    extend: 'Ext.data.Store',
    config: {
		fields: ['name', 'value1', 'value2'],
		data: [
			{ name: 'Jan', value1: 5, value2: 12 },
			{ name: 'Feb', value1: 23, value2: 42 },
			{ name: 'Mar', value1: 83, value2: 13 },
			{ name: 'Apr', value1: 233, value2: 34 },
			{ name: 'May', value1: 509, value2: 24 },
			{ name: 'Jun', value1: 864, value2: 2 },
			{ name: 'Jul', value1: 1144, value2: 25 },
			{ name: 'Aug', value1: 1179, value2: 24 },
			{ name: 'Sep', value1: 946, value2: 39 },
			{ name: 'Oct', value1: 591, value2: 42 },
			{ name: 'Nov', value1: 288, value2: 23 },
			{ name: 'Dec', value1: 109, value2: 34 }
		]
	}
});


