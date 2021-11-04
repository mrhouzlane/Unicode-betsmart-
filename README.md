# Unicode-bettingPool

Betting Pool Concept

## Boilerplate code forked from here:

[HardHat boilerplate code](https://github.com/nomiclabs/hardhat-hackathon-boilerplate)

Also checkout this page:
[How to use it](https://hardhat.org/tutorial/hackathon-boilerplate-project.html)

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/nomiclabs/hardhat-hackathon-boilerplate.git
cd hardhat-hackathon-boilerplate
npm install
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```

> Note: There's [an issue in `ganache-core`](https://github.com/trufflesuite/ganache-core/issues/650) that can make the `npm install` step fail.
>
> If you see `npm ERR! code ENOLOCAL`, try running `npm ci` instead of `npm install`.

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. You will
need to have [Metamask](https://metamask.io) installed and listening to

# Betting Pool Dapp

<h4> Why building a Betting Pool and not a Classical Betting platform ? </h4>

<p> Gambling sector : The global online betting market is growing 11.5% annually. estimated to reach about $93 billion by 2023 </p> 

<h1> Description </h1>

<p> This betting Dapp is based on Gnosis implementation of Conditional Tokens </p> 
Please refer to this link : https://docs.gnosis.io/conditionaltokens/docs/devguide01/ to get all informations about the coding process. 

<h3> Structure </h3> 

On top of the imported ERC20 and ERC1155 will be coded a program to createBet and to redeemTokens.

<string> Example :</string> 
Let's say we have 3 outcomes possible to the question : <q> Who will win the Ballon d'or 2021 ?  </q> :

<dl>
<dt> 1. Messi </dt>
<dt> 2. Benzema </dt>
<dt> 3. Lewandowski </dt>
</dl>

To get the ConditionId 3 parameters are needed : 

<ul>
  <li>oracle's address : the account assigned to report the result for the prepared condition. </li>
 <li>a 32bytes address for the questionId.  </li>
 <li>the number of outcomeSlots identified as outcomeSlotsCount which is 3 here </li>
  
 
Situation 1 : 
  

<em> Player 1 :  bets 200 DAI on the outcome 1.Messi <em> : 
  
  1. Our smart contract will receive 200 DAI as the collateral Token.
  2. This 200 DAI will be splited into ConditionalTokens on the 3 outcomes possible
  3. The oracle will report results of Condition and emits the payouts which is the oracle's answer. 
  4. ConditionalTokens will be then transfered based on ERC1155. Since each token has a positionID, they are indexed to a corresponding conditionalToken. 
  This is why the Receiver has to call the function ERC1155TokenReceiver to get the magic expected values. 



# Underlying protocols

- <strong> Chainlink Oracle </strong> : import data for the odds
  - <strong> Uniswap </strong> : LP tokens in UniV3 position


# Programming languages

 <ul>

   <li> Solidity </li>
   <li> React </li>
   <li> HTML </li>
   <li> Javascript </li>

 </ul>

# Scalability

