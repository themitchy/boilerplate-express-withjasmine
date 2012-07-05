var serviceModule = '../lib/services/basicService';
var http = require('http');
var rest = require('restler');

describe('A service', function(){
    
    var service;
    
    beforeEach(function(){
        service = require(serviceModule);
    });
    
    afterEach(function(){
        service.close();
    });
    
    it('responds with online status', function(done){
        
        rest.get("http://localhost:3000/status").on('success', function(data, response){
            expect(data.status).toEqual('online');
            done();
        });
        
    });
    
    
}); // A service
