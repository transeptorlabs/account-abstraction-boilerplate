// This file is here to deploy ERC-4337 contracts. 
// These contracts need to be deployed on the local network to fully support Account abstraction.

const { DeterministicDeployer } = require("@account-abstraction/sdk");
const { EntryPoint__factory, SimpleAccountFactory__factory } =  require("@account-abstraction/contracts");

const { network } = require("hardhat");

async function main() {
  if (network.config.chainId !== 1337 && network.config.chainId !== 31337) {
    console.log('NOT deploying EntryPoint. use pre-deployed entrypoint')
    process.exit(1)
  }

  // Deploy EntryPoint
  const dep = new DeterministicDeployer(ethers.provider)
  const epAddr = DeterministicDeployer.getAddress(EntryPoint__factory.bytecode)
  if (await dep.isContractDeployed(epAddr)) {
    console.log(`EntryPoint already deployed at ${epAddr}`)
  } else {
    await dep.deterministicDeploy(EntryPoint__factory.bytecode)
    console.log(`Deployed EntryPoint at ${epAddr} on chainId ${network.config.chainId}`)
  }

  // Deploy SimpleAccountFactory
  const accountDeployerAdd = DeterministicDeployer.getAddress(new SimpleAccountFactory__factory(), 0, [epAddr])
  if (await dep.isContractDeployed(accountDeployerAdd)) {
    console.log(`Simple account factory already deployed at ${accountDeployerAdd}`)
  } else {
    await dep.deterministicDeploy(new SimpleAccountFactory__factory(), 0, [epAddr])
    console.log(`Deployed Simple account factory at ${accountDeployerAdd} on chainId ${network.config.chainId}`)
  }
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
