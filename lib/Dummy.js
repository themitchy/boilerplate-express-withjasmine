
var Dummy =  function(val) {
    this.val = val;
};

Dummy.prototype = {
    dumbify: function(){
        return { val: this.val };
    }
}

module.exports = Dummy;
