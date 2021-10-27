const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Sun Shangxiang", "Zhang Chunhua", "Li Dian",
      "Wang Yuanji", "Ma Chong", "Diao Chan"],   // Names
    [
      "QmVgF5cJnRttSzTa6m3dqUrAChhjaaJJX1pJMUveQGVg9w",
      "QmbSNd2ZMLdaUXnvWRWcRigZAdTQ8Egh5LWtvy5geAJPrj",
      "QmedUEq6qencMd95DQ74BcRbZf7LducH3pTKenbUxQXt5m",
      "QmaZBwJd39b9R2pQeaYGRic7VeSeW5yKHZKEnTcyNbc4Tr",
      "QmQMSP9rVwyATfbRXkhmAtQ9raTKRuShDJGqbLmJVfebin",
      "QmNymbAQEPbcy7FRe5Yrbs6sHegkfBzQqggobhbwZkNQna"
    ], // Images
    [150, 175, 250, 200, 300, 350], // HP values
    [40, 30, 60, 45, 70, 55], // Attack damage values,
    "Lu Bu", // Boss name
    "QmadNDaeBzktawXQteJKBgkKHHToKgnGyJGHXXDytPDznQ", // Boss image
    10000, // Boss HP
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("contract deployed to: ", gameContract.address);

  let txn;
  // Mint Wang Yuanji (ID: 3)
  txn = await gameContract.mintCharacterNFT(3);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err){
    console.error(err);
    process.exit(1);
  }
}

runMain();