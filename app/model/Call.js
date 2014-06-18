Ext.define('MyApp.model.Call', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
        //    { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'cType', type: 'int' },
            { name: 'cTime', type: 'string' },
            { name: 'result', type: 'int' }
         //   { name: 'comment', type: 'auto' }

        ]
        /*
		 proxy: {
	            type: 'ajax',
				url: 'app/testphp.php',
	            api: {
	                create: 'app/testphp.php?act=createcall',
	                read: 'app/testphp.php?act=loadcall'
//	                update: '../../services/hotels.php?act=updatehotel',
////	                destroy: '../../services/hotels.php?act=erasehotel'
	            }
	        }
	        */
    }
}
);
