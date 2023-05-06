//Installation #----------------------------------
>npm install web3
>node
>const Web3=require('web3');

//Check Balance #----------------------------------

//mainnet Infura and copy infure url
>const rpcURL="https://mainnet.infure.io-----";
>const web3=new Web3(rpcURL);
>const address="use any address from etherscan";
>web3.eth.getBalance(address,(err,wei)=>{
balance=web3.utils.fromWei(wei,'ether')
});
>console.log(balance);
>const Web3=require('web3')

//===================================================

//create project and copy rpc url
>const rpcURL='rpc url';
>const web3=new Web3(rpcURL);
>const address='';
>web3.eth.getBalance(address,(err,wei)=>{
balance=web3.utils.fromWei(wei,'ether')
});
>console.log(balance);

//Read Data from contract #-------------------------------

>node
>const Web3=require('web3');
//mainnet Infura and copy infure url
>const rpcURL="https://mainnet.infure.io-----";
>const web3=new Web3(rpcURL);
>const abi=[{copy contract ABI}];
>const address="any address";
>const contract=new web3.eth.Contract(abi,address);
>contract.methods.totalSupply().call((err,result)=>{
console.log(result)});

>contract.methods.name().call((err,result)=>{
console.log(result)});

>contract.methods.symbol().call((err,result)=>{
console.log(result)});

>contract.methods.balanceOf('address').call(err,result)=>{
console.log(result)});

