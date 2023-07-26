# Account Abstraction Boilerplate

This repository contains a sample project that you can use as the starting point
for your Account Abstraction Ethereum project. It's also a great fit for learning the basics of
smart contract development.

## Start local node 

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/transeptorlabs/account-abstraction-boilerplate.git
cd account-abstraction-boilerplate
npm install
```

Once installed, let's run an ETH client on your local network:

```sh
npm run node
```

Next, on a new terminal, go to the repository's root folder and run this to
deploy Account Abstraction and your contract:

```sh
npm run deploy:all
```

Next, we can use use `.env.sample` to create .env file with your `MNEMONIC` and `BENEFICIARY`.

- `MNEMONIC`: and is set to the default seend phrase of hardhat accounts. The first account of the hardhat accounts is used as the bundler signer.
- `BENEFICIARY`: is set to the second account of the hardhat accounts.

Then, we can fund the bundler signer account with some ETH:
```sh
npm run fund 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
```

Finally, we can run the ERC-4337 Bundler(Transeptor)

```sh
npm run bundler
```

The Bundler will start running on [http://localhost:3000/rpc](http://localhost:3000/rpc).


## Smart Contract Development

The boilerplate comes with a sample smart contract called `Token.sol` in the
`contracts` folder. This contract is already connected to the `scripts/deploy.js` script
so it gets deployed when you run `npm run deploy:all`.

You can use this contract as a starting point for your own development.

### Testing
```sh
npm run test
```

### Compiling contracts

```sh
npm run compile
```

### Deploying to a local node

```sh
npm run deploy
```

or 

```sh
npm run depoly:all
```

**Happy _building_!**
