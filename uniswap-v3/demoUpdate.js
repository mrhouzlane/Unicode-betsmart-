// create a pool instance 

const { ethers } = require("ethers");
const { Pool,  Route,  Trade, Tick} = require("@uniswap/v3-sdk");
const { Token, CurrencyAmount } = require("@uniswap/sdk-core");
const IUniswapV3Pool = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json");
const IUniswapV3Router = require("@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json");

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/b7cb080783d942d88ecd4787eb56d0d9");
const signer = new ethers.Wallet.createRandom() ; // Here you should put your private key 
const account = signer.connect(provider) ;

// V3 pool we are trying to querie : 
const poolAddress = "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8"; 
const poolContract = new ethers.Contract(
    poolAddress, 
    IUniswapV3Pool.abi, 
    provider
) ; 

const routerAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564"; 
const routerContract = new ethers.Contract(routerAddress,IUniswapV3Router.abi ,provider) ;
const uniswapRouter = routerContract.connect(account); 


async function main() {

    const usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" ; 
    const wethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" ; 

    // ChainId = 1 = mainnet 
    const token1 = new Token(1, usdcAddress, 6, "USDC", "USD Coin");
    const token2 = new Token(1, wethAddress, 18, "WETH", "Wrapped Ether"); 

    const poolFee = await poolContract.fee();
    const slot0 = await poolContract.slot0();
    const poolLiquidity = await poolContract.liquidity() ; 
    const tickSpacing = await poolContract.tickSpacing() ; 

    const nearestTick = Math.floor(slot0[1] / tickSpacing) * tickSpacing ;
    const tickLowerIndex =  nearestTick + (60*100) ; 
    const tickUpperIndex = nearestTick - (60*100) ; 

    const tickLowerData = await poolContract.ticks(tickLowerIndex) ; 
    const tickUpperData = await poolContract.ticks(tickUpperIndex) ; 
       
    const tickLower = new Tick({
        index: tickLowerIndex,
        liquidityGross: tickLowerData.liquidityGross,
        liquidityNet: tickLowerData.liquidityNet
    }); 

    console.log(tickLower)

    const tickUpper = new Tick({
        index: tickUpperIndex,
        liquidityGross: tickUpperData.liquidityGross,
        liquidityNet: tickUpperData.liquidityNet
    });

    console.log(tickUpper)

    const tickCurrent = slot0[1]


    const pool = new Pool(
        token1,
        token2,
        poolFee,
        slot0[0],
        poolLiquidity,
        tickCurrent
    );

    console.log(pool);


//     // //SWAP 5000 USDC(amountIn) for WETH 

//     const deadline = Math.floor(Date.now()/1000) + 60 * 20 ; // Date.now(ms) -> put it in seconds -> minutes then add (20 minutes) 
//     const amountIn = CurrencyAmount.fromRawAmount(token0, "5000000000" ); // we want 5000 usdc and it takes 6 decimals (token0 = usdc)

//     const route = new Route([pool], token0, token1); 
//     console.log(`1 USDC can be swapped for ${route.midPrice.toSignificant(6)} WETH`)
//     console.log(`1 WETH can be swapped for ${route.midPrice.invert().toSignificant(6)} USDC`)


//     const trade = await Trade.exactIn(route, amountIn); 
//     console.log(`The execution price of this trade is ${trade.executionPrice.toSignificant(6)} WETH for 1 USDC`)
//     // 
//     const swapParams = {
//         path: ArrayBuffer.from([usdcAddress, wethAddress]), 
//         recipient: signer.address,
//         deadline: deadline, 
//         amountIn: ethers.utils.parseUnits(AmountIn.toExact(), 6), //turn 5000 into tokens measurement. 
//         amoutOutMinimum: ethers.utils.parseUnits(amountOutMinimum.toExact(), 18)
//     };

//     const swapTx = uniswapRouter.exactInput(
//         swapParams, 
//         { value : value, gasPrice : 20e9 } // value : how much we are sending // gasPrice : change it with stations 
//     ); 

//     console.log(`Swap Transaction hash : ${swapTx.hash}`);
//     const swapReceipt : await swapTx.wait(); 
//     console 



// }

}


main()
