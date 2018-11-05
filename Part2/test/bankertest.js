var Banker = artifacts.require("./Banker.sol");

contract('Banker', function(accounts) {
    it("should get the balance, first account have some currency for the test", function() {
        return Banker.deployed().then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
          });
    });
    it("should be able to deposit currency", function(){
        return Banker.deployed().then(function(instance) {
            return instance.deposit.call(1000);
        }).then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(instance) {
            assert.equal(instance.valueOf(), 9000, "9000 is expected. at this point")
        });
    });
    it("should be able to withdraw coins", function(){
        return Banker.deployed().then(function(instance) {
            return instance.deposit.call(1000);
        }).then(function(instance) {
            return instance.withdraw.call(500)
        }).then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(instance) {
            assert.equal(instance.valueOf(), 9500, "9000 is expected. at this point")
        
        })

    })
}
