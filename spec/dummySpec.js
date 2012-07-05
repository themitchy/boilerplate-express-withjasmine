var Dummy = require('../lib/Dummy');

describe('A Dummy module', function(){
    
    var d;
    beforeEach(function(){
        d = new Dummy('foo');
    });
    
    it('produces an object based on the consructor params', function(){
       var data = d.dumbify();
       expect(data.val).toEqual('foo'); 
    });
    
}); // A Dummy module
