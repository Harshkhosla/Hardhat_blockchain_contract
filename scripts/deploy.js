const{ethers ,run ,network }=require("hardhat")


async function main(){
  const SimpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorage"
  )
  console.log("Deploying contract");
  const simpleStorage =await SimpleStorageFactory.deploy()
  await simpleStorage.deployed();
  console.log(`deployed contract to ${simpleStorage.address}`);
  // console.log(network.config);
  if(network.config.chainId===4 && process.env.ETHER_SCAN_API_KEY ){
    await simpleStorage.deployTransaction.wait(6)
    await verify(simpleStorage.address,[])
  }
  const currentValue =await simpleStorage.retrieve()
  console.log(currentValue);
  const transctionresponse =await simpleStorage.store(7)
  await transctionresponse.wait(1);
  // update the current value
  const updatevalue= await  simpleStorage.retrieve()
  console.log(`updated value is${updatevalue}`); 
}




async function  verify  (contractAddress,arg){
  console.log("verefying contract ....");
  try{

    await run("verify:verify",{
      address:contractAddress,
      constructorArguments:args,
    })
  }catch(e){
    if(e.message.toLowerCase().includes("already verify")){
      console.log("already verify");
    }else{
      console.log(e);
    }
  }
  }



main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
});