const ADDRESSES = require('../helper/coreAssets.json')
const {  nullAddress,treasuryExports } = require("../helper/treasury");

const treasury = "0x649765821D9f64198c905eC0B2B037a4a52Bc373";

const BNT = "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C"
const vBNT = "0x48Fb253446873234F2fEBbF9BdeAA72d9d387f94"

module.exports = treasuryExports({
  ethereum: {
    tokens: [
        nullAddress,
        ADDRESSES.ethereum.LINK,
        ADDRESSES.ethereum.DAI,
        "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
        ADDRESSES.ethereum.SNX,
        "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
        "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
        "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
        ADDRESSES.ethereum.YFI,
        "0x408e41876cCCDC0F92210600ef50372656052a38",
        "0x1559FA1b8F28238FD5D76D9f434ad86FD20D1559",
        "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
        ADDRESSES.ethereum.BAT,
        "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
        ADDRESSES.ethereum.MATIC,
        "0x0f71B8De197A1C84d31de0F1fA7926c365F052B3",
        "0xBC19712FEB3a26080eBf6f2F7849b417FdD792CA",
        "0xc00e94Cb662C3520282E6f5717214004A7f26888",
        "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE",
        "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
        "0x6710c63432A2De02954fc0f851db07146a6c0312",
        ADDRESSES.ethereum.AAVE,
        ADDRESSES.ethereum.WBTC
     ],
    owners: [treasury],
    ownTokens: [BNT, vBNT],
  },
})
