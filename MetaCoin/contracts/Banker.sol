pragma solidity ^0.4.0;
contract Ass2 {
    address public owner;
    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    constructor() public {
		balances[tx.origin] = 10000;
	}

    function withdraw(uint256 amount) public {
        require(amount <= balances[msg.sender]);
        balances[msg.sender] -= amount;
        msg.sender.transfer(amount);
    }
    
    function balanceOf(address _owner) public view returns(uint256 balance) {
        return balances[_owner];
    }
    
    function deposit(uint256 amount) public payable {
        require(msg.value == amount);
        balances[msg.sender] += amount;  
    }
}
}
