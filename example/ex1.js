var js2cxml = require('../lib/js2cxml'),
    data = {
        'node': 'soap:Envelope',
        '@': {'xmlns:soap':'stuff'},
        'children': [
             "this is a test",
             {
                'node':'foo:bar'
             }]};
console.log(js2cxml(data));
