import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './Lib/lib.js';


var ABIarray = [{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"createContract","outputs":[{"name":"","type":"address"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"_fee","type":"uint256"}],"name":"setFee","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"newContracts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdrawFee","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"oracleID","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_oracleID","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_name","type":"address"},{"indexed":false,"name":"_value","type":"address"}],"name":"Print","type":"event"}];
var contractAddress ="0x4870a9da5999209e03a70f48ec4eca924d3f6fe2";
var sABI = [{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"currentState","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"share_short","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"smargin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"ECP","type":"bool"},{"name":"_margin","type":"uint256"},{"name":"_margin2","type":"uint256"},{"name":"_notional","type":"uint256"},{"name":"_long","type":"bool"},{"name":"_startDate","type":"bytes32"},{"name":"_endDate","type":"bytes32"},{"name":"_l_premium","type":"uint256"},{"name":"_s_premium","type":"uint256"}],"name":"CreateSwap","outputs":[],"payable":true,"type":"function","stateMutability":"payable"},{"constant":true,"inputs":[],"name":"paid_short","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"cancel_long","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"lmargin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"s_premium","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"l_premium","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"short_party","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"paid_long","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"long_party","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[{"name":"key","type":"bytes32"}],"name":"RetrieveData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"cancel_short","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[],"name":"Calculate","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"ECP","type":"bool"},{"name":"_margin","type":"uint256"},{"name":"_notional","type":"uint256"},{"name":"_long","type":"bool"},{"name":"_startDate","type":"bytes32"},{"name":"_endDate","type":"bytes32"},{"name":"_l_premium","type":"uint256"},{"name":"_s_premium","type":"uint256"}],"name":"EnterSwap","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function","stateMutability":"payable"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"share_long","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[],"name":"Exit","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[],"name":"PaySwap","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"oracleID","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"notional","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"inputs":[{"name":"OAddress","type":"address"},{"name":"_cpty1","type":"address"},{"name":"_creator","type":"address"}],"payable":false,"type":"constructor","stateMutability":"nonpayable"}];
var data = `6060604052341561000f57600080fd5b604051602080612181833981016040528080519060200190919050505b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1
6021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191
6908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505b6120c180
6100c06000396000f30060606040523615610081576000357c0100000000000000000000000000000
000000000000000000000000000900463ffffffff16806302d05d3f14610086578063412a5a6d14610
0db57806369fe0e2d14610125578063bd21ad1914610148578063ddca3f43146101ab578063e941f
a78146101d4578063f7bb375f146101e9575b600080fd5b341561009157600080fd5b6100996102
3e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffff
fffffffffffffffffffffff16815260200191505060405180910390f35b6100e3610264565b6040
51808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffff
ffffffffffffff16815260200191505060405180910390f35b341561013057600080fd5b610146600480803590602001909190505061047e565b005b341561015357600080fd5b61016960048080359060200190919050506104ee565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b657600080fd5b6101be61052e565b6040518082815260200191505060405180910390f35b34156101df57600080fd5b6101e7610534565b005b34156101f457600080fd5b6101fc61060d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600354341015151561027857600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166102c7610633565b808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050604051809103906000f080151561037957600080fd5b90506000805480600101828161038f9190610643565b916000526020600020900160005b83909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550507feb3a30c519bc1392bb08769865c4c9112fed90e1553cd4889d3e924f3422a8dd3382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a18091505b5090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104da57600080fd5b6509184e72a00081026003819055505b5b50565b6000818154811015156104fd57fe5b906000526020600020900160005b915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561059057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561060957600080fd5b5b5b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b604051611a018061069583390190565b81548183558181151161066a57818360005260206000209182019101610669919061066f565b5b505050565b61069191905b8082111561068d576000816000905550600101610675565b5090565b9056006060604052341561000f57600080fd5b604051606080611a01833981016040528080519060200190919080519060200190919080519060200190919050505b82600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008060006101000a81548160ff0219169083600481111561016057fe5b02179055505b5050505b611888806101796000396000f300606060405236156100ef576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302d05d3f146100f45780630b97bc86146101495780630c3f6acf1461017a5780631a40aeda146101b157806320adbed61461020b5780633e4f58fc146102345780634e1448b31461029d5780636eeba5c6146102c65780637d2429a81461031b5780638dd4f65214610370578063c24a0f8b146103ab578063cff410b4146103dc578063e19de33c146103f1578063ea8a1af01461041e578063f435d5a114610447578063f7bb375f14610474578063f855c2b2146104c9575b600080fd5b34156100ff57600080fd5b6101076104f2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561015457600080fd5b61015c610518565b60405180826000191660001916815260200191505060405180910390f35b341561018557600080fd5b61018d61051e565b6040518082600481111561019d57fe5b60ff16815260200191505060405180910390f35b6102096004808035151590602001909190803590602001909190803590602001909190803590602001909190803515159060200190919080356000191690602001909190803560001916906020019091905050610530565b005b341561021657600080fd5b61021e610756565b6040518082815260200191505060405180910390f35b610283600480803515159060200190919080359060200190919080359060200190919080351515906020019091908035600019169060200190919080356000191690602001909190505061075c565b604051808215151515815260200191505060405180910390f35b34156102a857600080fd5b6102b06109fe565b6040518082815260200191505060405180910390f35b34156102d157600080fd5b6102d9610a04565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561032657600080fd5b61032e610a2a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561037b57600080fd5b610395600480803560001916906020019091905050610a50565b6040518082815260200191505060405180910390f35b34156103b657600080fd5b6103be610b56565b60405180826000191660001916815260200191505060405180910390f35b34156103e757600080fd5b6103ef610b5c565b005b34156103fc57600080fd5b610404610fe2565b604051808215151515815260200191505060405180910390f35b341561042957600080fd5b6104316114a9565b6040518082815260200191505060405180910390f35b341561045257600080fd5b61045a6114af565b604051808215151515815260200191505060405180910390f35b341561047f57600080fd5b6104876117a9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104d457600080fd5b6104dc6117cf565b6040518082815260200191505060405180910390f35b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b6000809054906101000a900460ff1681565b60008060009054906101000a900460ff16600481111561054c57fe5b81600481111561055857fe5b14151561056457600080fd5b87151561057057600080fd5b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105cc57600080fd5b6105de87670de0b6b3a76400006117d5565b341415156105eb57600080fd5b60006009819055508460028190555083600a60146101000a81548160ff021916908315150217905550600a60149054906101000a900460ff161561069f5733600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061067c87670de0b6b3a76400006117d5565b60038190555061069486670de0b6b3a76400006117d5565b600481905550610711565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106f287670de0b6b3a76400006117d5565b60048190555061070a86670de0b6b3a76400006117d5565b6003819055505b60016000806101000a81548160ff0219169083600481111561072f57fe5b0217905550816007816000191690555082600681600019169055505b5b5050505050505050565b60045481565b600060016000809054906101000a900460ff16600481111561077a57fe5b81600481111561078657fe5b14151561079257600080fd5b87151561079e57600080fd5b600a60149054906101000a900460ff1615158515151480156107c1575085600254145b80156107d65750600654600019168460001916145b80156107eb5750600754600019168360001916145b15156107f657600080fd5b600a60149054906101000a900460ff16156108735733600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600454341015151561085d57600080fd5b866003541015151561086e57600080fd5b6108d7565b33600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060035434101515156108c557600080fd5b86600454101515156108d657600080fd5b5b60026000806101000a81548160ff021916908360048111156108f557fe5b02179055506000600d60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600d6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600191505b5b509695505050505050565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610a5a61183f565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166372061b91846000604051604001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b1515610afa57600080fd5b6102c65a03f11515610b0b57600080fd5b50505060405180519060200180519050826000018360200182815250826000191660001916815250505060008160200151111515610b4857600080fd5b806020015191505b50919050565b60075481565b6000806000600480811115610b6d57fe5b6000809054906101000a900460ff166004811115610b8757fe5b14151515610b9457600080fd5b60006004811115610ba157fe5b6000809054906101000a900460ff166004811115610bbb57fe5b14151515610bc857600080fd5b60016004811115610bd557fe5b6000809054906101000a900460ff166004811115610bef57fe5b1415610cd957600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610cd45760006003819055506000600481905550600060028190555060008060006101000a81548160ff02191690836004811115610c8157fe5b02179055503373ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050505b610fdc565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d35576000610d38565b60015b9250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d96576000610d99565b60025b91508160ff168360ff166009540101905081830160ff166009819055506002811115610fdb57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610ece57600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505050610fda565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610fd957600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505050600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050505b5b5b5b5b505050565b600060036000809054906101000a900460ff16600481111561100057fe5b81600481111561100c57fe5b14151561101857600080fd5b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480156110e6575060001515600d60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b156111d5576001600d60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600e600060018152602001908152602001600020549081150290604051600060405180830381858888f1935050505050611391565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480156112a4575060001515600d6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b15611390576001600d6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600e600060028152602001908152602001600020549081150290604051600060405180830381858888f19350505050505b5b600d60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156114765750600d6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b1561149f5760046000806101000a81548160ff0219169083600481111561149957fe5b02179055505b600191505b5b5090565b60095481565b60008060026000809054906101000a900460ff1660048111156114ce57fe5b8160048111156114da57fe5b1415156114e657600080fd5b61150f6114ff6103e86114fa600754610a50565b6117d5565b61150a600654610a50565b611809565b91506103e882141561155257600354600e60006001815260200190815260200160002081905550600454600e600060028152602001908152602001600020819055505b6103e88210156116685760035461157c61156e6103e885611825565b670de0b6b3a76400006117d5565b11156115d1576000600e600060018152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff1631600e60006002815260200190815260200160002081905550611663565b6116046115eb6115e36103e885611825565b6002546117d5565b6115ff670de0b6b3a76400006103e8611809565b6117d5565b600e60006001815260200190815260200160002081905550600e600060018152602001908152602001600020543073ffffffffffffffffffffffffffffffffffffffff163103600e600060028152602001908152602001600020819055505b61177b565b6103e882111561177a57600454611692611684846103e8611825565b670de0b6b3a76400006117d5565b11156116e7576000600e600060028152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff1631600e60006001815260200190815260200160002081905550611779565b61171a6117016116f9846103e8611825565b6002546117d5565b611715670de0b6b3a76400006103e8611809565b6117d5565b600e60006002815260200190815260200160002081905550600e600060028152602001908152602001600020543073ffffffffffffffffffffffffffffffffffffffff163103600e600060018152602001908152602001600020819055505b5b5b60036000806101000a81548160ff0219169083600481111561179957fe5b0217905550600192505b5b505090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600080828402905060008414806117f657508284828115156117f357fe5b04145b15156117fe57fe5b8091505b5092915050565b600080828481151561181757fe5b0490508091505b5092915050565b600082821115151561183357fe5b81830390505b92915050565b6040805190810160405280600080191681526020016000815250905600a165627a7a72305820d1e28a30d74d7b669e9c78e5d1b24bacd3a24a3795ff085ad39cce52446e6ace0029a165627a7a7230582094b74e335ca5cf7d66e70b8b3b005b822a6d7ec8ec95e190d3aa1e5e4708187b0029`;

var fContract = web3.eth.contract(ABIarray).at(contractAddress);
var newval = web3.toWei('.01', 'ether');

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
  	var template = Template.instance();
    web3.eth.getBalance(web3.eth.accounts[0],
    	function(err,res){
    	TemplateVar.set(template, "counter", web3.fromWei(res));
    })
  },
    counter1() {

	var template = Template.instance();

	fContract.fee(function(err,res){
		TemplateVar.set(template,"counter1",web3.fromWei(res))
	});
},
});


Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },

});


Template.factory.helpers({
});

async function waitForTxToBeMined (txHash) {
  let txReceipt
  while (!txReceipt) {
    try {
      txReceipt = await eth.getTransactionReceipt(txHash)
    } catch (err) {
      return indicateFailure(err)
    }
  }
  indicateSuccess()
}

Template.factory.events({

	'click button.create': function (err, template) {
    fContract.createContract({from:web3.eth.accounts[0],value:newval,gas: 2000000},function(error, result){
    if(!error) {
        console.log("#" + result + "#")
    } else {
        console.error(error);
    }
  })
},
	'click button.addresult': function (err, template) {
	let transferEvent = fContract.Print({}, {fromBlock: 0, toBlock: 'latest'})
	transferEvent.get((error, logs) => {
	  // we have the logs, now print them
	  logs.forEach(log => console.log(log.args['_value']))
	  console.log(logs[logs.length-1].args['_value'])
	  for(i = logs.length-1; i > 0; i--){
	  	if(logs[i].args['_name'] == web3.eth.accounts[0]){
	 		 var check = logs[i].args['_value'];
	 		 i = 0;
	 	}
  	  }
  	  document.getElementById("returnedadd").innerHTML = check;
	})
	},

	   });


Template.bulletin.events({

	'click button.bulletin': function (err, template) {
	let transferEvent = fContract.Print({}, {fromBlock: 0, toBlock: 'latest'})
	transferEvent.get((error, logs) => {
	  // we have the logs, now print them
	  logs.forEach(log => console.log(log.args['_value']))
	  console.log(logs[logs.length-1].args['_value'])
	  var check = "<br>";
	  for(i = 0; i < logs.length; i++){
	 	check += logs[i].args['_value'] + "<br>";
  	 		var add = logs[i].args['_value'];
			var sInstance = web3.eth.contract(sABI).at(add);
			var j = 0;
			j = sInstance.currentState.call(function(err,res){j = res.toNumber();
			console.log(j);
				if (j>0 && j < 4){ console.log('State- ',sInstance.currentState.call(function(err,res){return res.toNumber()}));
				console.log('Notional-'); sInstance.notional.call(function(err,res){console.log(res.toNumber())});
				 console.log(' Long Margin-');sInstance.lmargin.call(function(err,res){console.log(res.toNumber())});
				 console.log(' Short Margin-');sInstance.smargin.call(function(err,res){console.log(res.toNumber())});
				 console.log(' Long Premium-');sInstance.l_premium.call(function(err,res){console.log(res.toNumber())});
				 console.log(' Short Premium- ');sInstance.s_premium.call(function(err,res){console.log(res.toNumber())});
				 console.log(' StartDate-');sInstance.startDate.call(function(err,res){console.log(web3.toAscii(res).substring(0,8))});
				 console.log(' endDate-');sInstance.endDate.call(function(err,res){console.log(web3.toAscii(res).substring(0,8))});
					}
				})
		}
  	  document.getElementById("bulletinboard").innerHTML = check;
	})
	},

});

Template.swap.onCreated(function swapOnCreated() {
  // counter starts at 0
  this.counter2 = new ReactiveVar(0);
});


Template.swap.helpers({
  counter2() {
  	var template = Template.instance();
    web3.eth.getBalance(web3.eth.accounts[0],
    	function(err,res){
    	TemplateVar.set(template, "counter2", res);
    })
  },
});

Template.swap.events({
	'click button.swap':function (err, template) {
    var x = document.getElementById("SwapForm");
    var nums = [];
    var bools = [];
    var dates = [];
    var i;
    for (i = 0; i < x.length ;i++) {
    	if(i==0){
    		var s_address = x.elements[i].value;
    	}
    	else if(i==1 || i ==5){
    		bools[i] = (x.elements[i].value == 'true');
    	}
    	else if(i==2 || i ==3 || i==4 || i > 7){
    		nums[i] = parseInt(x.elements[i].value);
    	}
    	else if (i == 6 || i == 7){
    		dates[i]="" + x.elements[i].value
    	}
        
    }
    var eth_val = 0;
    if (bools[5] == true) {
    	eth_val = eval(nums[3]+nums[8]/1000)
    }
    else {
    	eth_val = eval(nums[3]+nums[9]/1000)
    }
    console.log(eth_val)
    console.log(web3.toWei(eth_val, 'ether'))
    console.log(s_address,bools[1],nums[2],nums[3],nums[4],bools[5],web3.fromAscii(dates[6]),web3.fromAscii(dates[7]),nums[8],nums[9]);

    console.log(true,1, 1, 10, true, web3.fromAscii("20170730"),web3.fromAscii("20170731"),0,0)
    console.log(s_address)
    	var sContract = web3.eth.contract(sABI).at(s_address);

	    sContract.CreateSwap(bools[1],nums[2],nums[3],nums[4],bools[5],web3.fromAscii(dates[6]),web3.fromAscii(dates[7]),nums[8],nums[9],{from:web3.eth.accounts[0],value: web3.toWei(eth_val, 'ether'),gas: 2000000},function(error, result){
	    if(!error) {
	        console.log("#" + result + "#")
	    } else {
	        console.error(error);
	    }
	})
},
});

Template.enterswap.events({
	'click button.eswap':function (err, template) {
    var x = document.getElementById("ESwapForm");
    var nums = [];
    var bools = [];
    var dates = [];
    var i;
    for (i = 0; i < x.length ;i++) {
    	if(i==0){
    		var s_address = x.elements[i].value;
    	}
    	else if(i==1 || i ==5){
    		bools[i] = (x.elements[i].value == 'true');
    	}
    	else if(i==2 || i ==3 || i==4 || i > 7){
    		nums[i] = parseInt(x.elements[i].value);
    	}
    	else if (i == 6 || i == 7){
    		dates[i]="" + x.elements[i].value
    	}
        
    }
    var eth_val = 0;
    if (bools[5] == true) {
    	eth_val = eval(nums[3]+nums[8]/1000)
    }
    else {
    	eth_val = eval(nums[3]+nums[9]/1000)
    }
    console.log(s_address,bools[1],nums[2],nums[3],nums[4],bools[5],web3.fromAscii(dates[6]),web3.fromAscii(dates[7]),nums[8],nums[9]);

	console.log(s_address)
    	var sContract = web3.eth.contract(sABI).at(s_address);
	    sContract.EnterSwap(bools[1],nums[2],nums[4],bools[5],web3.fromAscii(dates[6]),web3.fromAscii(dates[7]),nums[8],nums[9],{from:web3.eth.accounts[0],value: web3.toWei(eth_val, 'ether'),gas: 2000000},function(error, result){
	    if(!error) {
	        console.log("#" + result + "#")
	    } else {
	        console.error(error);
	    }
	})
},
});

Template.calculate.events({
	'click button.calculate':function (err, template) {
		var x = document.getElementById("calculate");
		var s_address = x.elements[0].value;
	console.log(s_address)
    	var sContract = web3.eth.contract(sABI).at(s_address);
	    sContract.Calculate({from:web3.eth.accounts[0],value: 0,gas: 2000000},function(error, result){
	    if(!error) {
	        console.log("#" + result + "#")
	    } else {
	        console.error(error);
	    }
	})
},
});

Template.exit.events({
	'click button.exit':function (err, template) {
		var x = document.getElementById("exit");
		var s_address = x.elements[0].value;
	console.log(s_address)
    	var sContract = web3.eth.contract(sABI).at(s_address);
	    sContract.Exit({from:web3.eth.accounts[0],value: 0,gas: 2000000},function(error, result){
	    if(!error) {
	        console.log("#" + result + "#")
	    } else {
	        console.error(error);
	    }
	})
},
});


Template.payswap.events({
	'click button.payswap':function (err, template) {
		var x = document.getElementById("payswap");
		var s_address = x.elements[0].value;
	console.log(s_address)

    	var sContract = web3.eth.contract(sABI).at(s_address);
	    sContract.PaySwap({from:web3.eth.accounts[0],value: 0,gas: 2000000},function(error, result){
	    if(!error) {
	        console.log("#" + result + "#")
	    } else {
	        console.error(error);
	    }
	})
},
});

Template.dateconvert.events({
	'click button.dateconvert':function (err, template) {
	var x = document.getElementById("dateconvert");
	var date = web3.fromAscii(x.elements[0].value);
	console.log("\"" + date+ "\"")

    document.getElementById("hexdate").innerHTML = "\"" + date+ "\"";
},
});