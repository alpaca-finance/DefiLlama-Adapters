const ADDRESSES = require('../helper/coreAssets.json')

let abi = require('./abi')
const { sumTokens2, } = require('../helper/unwrapLPs')

const nullAddress = ADDRESSES.null
const poolHelpers = {
  'bsc': '0x93C22Fbeff4448F2fb6e432579b0638838Ff9581',
  'arbitrum': '0x611575eE1fbd4F7915D0eABCC518eD396fF78F0c',
  'era': '0x936c9A1B8f88BFDbd5066ad08e5d773BC82EB15F',
  'meter': '0x07aBf894D5C25E626bb30f75eFC728a1d86BEeDC',
}

const blacklistedTokens = [
  ADDRESSES.bsc.iUSD,
  '0x1382628e018010035999A1FF330447a0751aa84f',
]

const tvl = async (_, _1, _2, { api }) => {
  const chain = api.chain
  const toa = []
  let i = 1
  let foundLastPool = false
  const chunkSize = 10
  const poolMetaData = []

  do {
    const calls = []
    for (let j = i; j < i + chunkSize; j++)
      calls.push(j)
    i += chunkSize
    const poolMetas = await api.multiCall({
      target: poolHelpers[chain],
      abi: abi.poolMetas,
      calls,
    })
    for (const output of poolMetas) {
      if (output.tokenX === nullAddress && output.fee === '0') {
        foundLastPool = true
        break;
      }
      poolMetaData.push(output)
    }
  } while (!foundLastPool)

  const poolCalls = poolMetaData.map(i => ({params: [i.tokenX, i.tokenY, i.fee]}))
  const pools = await api.multiCall({
    target: poolHelpers[chain],
    abi: abi.pool,
    calls: poolCalls,
  })
  
  pools.forEach((output, i) => toa.push([poolMetaData[i].tokenX, output], [poolMetaData[i].tokenY, output],))
  return sumTokens2({ tokensAndOwners: toa, api, blacklistedTokens, })
}

module.exports = {
  era: { tvl },
  arbitrum: { tvl },
  bsc: { tvl },
  meter: {tvl},
  // ownTokens: ['IZI', 'IUSD'],
}
