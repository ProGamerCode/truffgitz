pragma solidity ^0.7.1;

contract CMCOracle {

  constructor() public {

emit CallbackGetBTCCap();



  }
uint btcMarketCap;
address owner = msg.sender;
 event CallbackGetBTCCap();                          
  function updateBTCCap() public {                       // Calls the callback function
    CallbackGetBTCCap();
  }

function setBTCCap(uint cap) public {
    // If it isn't sent by a trusted oracle
    // a.k.a ourselves, ignore it
    require(msg.sender == owner);
    btcMarketCap = cap;
  }

  function getBTCCap() public returns (uint) {
    return btcMarketCap;
  }
}
