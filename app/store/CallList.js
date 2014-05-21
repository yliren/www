Ext.define('MyApp.store.CallList', {
    extend: 'Ext.data.Store',
    config: {
			model : 'MyApp.model.Call',
			autoLoad : true,
			sorters: 'name',
	
			grouper: {
			groupFn: function(record) {
				return record.get('name')[0];
			}
			},
			proxy: {
	            type: 'ajax',
				//url: 'app/testphp.php?act=loadcall',
                url:'app/testphp.php',
				reader :{
					type : 'json',
					rootProperty:'records'
				},
				writer :{
					type : 'json'
				},
	            api: {
	                create: 'app/testphp.php?act=createcall',
	                read: 'app/testphp.php?act=loadcall'//,
//	                update: '../../services/hotels.php?act=updatehotel',
////	                destroy: '../../services/hotels.php?act=erasehotel'
	            }
	        }
	/*
         data: [
       { name: 'CEA',   ctype: 'public'  },
	   { name: 'E-TF1',   ctype: 'groupe'  },
	   { name: 'ONISEP',   ctype: 'public'  },
	   { name: 'Docapost',   ctype: 'groupe'  }
       ]*/
    }
});