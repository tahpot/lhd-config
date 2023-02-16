import { AddressMapping } from '../types'

const addressMappingBlacklist: AddressMapping[] = [
  // only leave chain id 1

  //BTC
  {
    tokenSymbol: 'RENBTC',
    tokenName: 'renBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/11370/large/Bitcoin.jpg?1628072791',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
      },
    ],
  },
  {
    tokenSymbol: '0XBTC',
    tokenName: '0xBitcoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/4454/large/0xbtc.png?1561603765',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
      },
    ],
  },
  {
    tokenSymbol: '0XBTC',
    tokenName: '0xBitcoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/4454/large/0xbtc.png?1561603765',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
      },
    ],
  },
  {
    tokenSymbol: 'HBTC',
    tokenName: 'Huobi BTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12407/large/Unknown-5.png?1599624896',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0316eb71485b0ab14103307bf65a021042c6d380',
      },
    ],
  },
  {
    tokenSymbol: 'BTCMT',
    tokenName: 'Minto',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/21819/large/MNVvqe2n_400x400.png?1640072390',
    tokenAddresses: [
      {
        chainId: '128',
        address: '0x410a56541bd912f9b60943fcb344f1e3d6f09567',
      },
    ],
  },
  {
    tokenSymbol: 'BTC.B',
    tokenName: 'Bitcoin Avalanche Bridged (BTC.b)',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26115/large/btcb.png?1655921693',
    tokenAddresses: [
      {
        chainId: '43114',
        address: '0x152b9d0fdc40c096757f570a51e494bd4b943e50',
      },
    ],
  },
  {
    tokenSymbol: 'BTCP',
    tokenName: 'Bitcoin Pro',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/3545/large/DSiD9ZhWsAE_8cS.png?1547038353',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x723cbfc05e2cfcc71d3d89e770d32801a5eef5ab',
      },
    ],
  },
  {
    tokenSymbol: 'BTCZ',
    tokenName: 'BitcoinZ',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1004/large/BTCZ_LOGO-1.png?1601429570',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xcbbb3e5099f769f6d4e2b8b92dc0e268f7e099d8',
      },
    ],
  },
  {
    tokenSymbol: 'OBTC',
    tokenName: 'BoringDAO BTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13525/large/gWzm2dr.png?1609390713',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x8064d9ae6cdf087b1bcd5bdf3531bd5d8c537a68',
      },
    ],
  },
  {
    tokenSymbol: 'BTC2X-FLI',
    tokenName: 'BTC 2x Flexible Leverage Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15406/large/Copy_of_BTC2x-FLI_token_logo.png?1646749417',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0b498ff89709d3838a063f1dfa463091f9801c2b',
      },
    ],
  },
  {
    tokenSymbol: 'BTCST',
    tokenName: 'BTC Standard Hashrate Token',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14449/large/4a3IskOf_400x400.png?1616137396',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
      },
    ],
  },
  {
    tokenSymbol: 'CWBTC',
    tokenName: 'cWBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10823/large/cwbtc.png?1584331700',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xccf4429db6322d5c611ee964527d42e5d685dd6a',
      },
    ],
  },
  {
    tokenSymbol: 'IWBTC',
    tokenName: 'Instadapp WBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25784/large/iWBTC-100x100.png?1654055142',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xec363faa5c4dd0e51f3d9b5d0101263760e7cdeb',
      },
    ],
  },
  {
    tokenSymbol: 'IBBTC',
    tokenName: 'Badger Interest Bearing Bitcoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15500/large/ibbtc.png?1621077589',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f',
      },
    ],
  },
  {
    tokenSymbol: 'SBTC',
    tokenName: 'sBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/8838/large/sBTC.png?1616149734',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
      },
    ],
  },
  {
    tokenSymbol: 'TBTC',
    tokenName: 'tBTC',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/11224/large/0x18084fba666a33d37592fa2633fd49a74dd93a88.png?1674474504',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
      },
    ],
  },
  {
    tokenSymbol: 'BTCB',
    tokenName: 'BTCB Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BTCB.svg',
    tokenAddresses: [
      {
        address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        chainId: '56',
      },
    ],
  },
  //ETH
  {
    tokenSymbol: 'POOL',
    tokenName: 'PoolTogether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14003/large/PoolTogether.png?1613585632',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0cec1a9154ff802e7934fc916ed7ca50bde6844e',
      },
    ],
  },
  {
    tokenSymbol: 'ETHO',
    tokenName: 'Etho Protocol',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/5194/large/ether1new-transparent.png?1578298993',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0b5326da634f9270fb84481dd6f94d3dc2ca7096',
      },
    ],
  },
  {
    tokenSymbol: 'ETHM',
    tokenName: 'Ethereum Meta',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/6586/large/ethereum-meta.png?1548125409',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xfd957f21bd95e723645c07c48a2d8acb8ffb3794',
      },
    ],
  },
  {
    tokenSymbol: 'ETHIX',
    tokenName: 'Ethix',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/3031/large/ETHIX_icon_256x256-256.png?1622195164',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xfd09911130e6930bf87f2b0554c44f400bd80d3e',
      },
    ],
  },
  {
    tokenSymbol: 'RETH',
    tokenName: 'Rocket Pool ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20764/large/reth.png?1637652366',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xae78736cd615f374d3085123a210448e74fc6393',
      },
    ],
  },
  {
    tokenSymbol: 'ENS',
    tokenName: 'Ethereum Name Service',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19785/large/acatxTm8_400x400.jpg?1635850140',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
      },
    ],
  },
  {
    tokenSymbol: 'ANKRETH',
    tokenName: 'Ankr Staked ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13403/large/aETHc.png?1625756490',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
      },
    ],
  },
  {
    tokenSymbol: 'ETHPAD',
    tokenName: 'ETHPad',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17520/large/tHAbIBQK_400x400.jpg?1628075612',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442',
      },
    ],
  },
  {
    tokenSymbol: 'FRXETH',
    tokenName: 'Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28284/large/JjqQ9ROz_400x400.jpeg?1669170320',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5e8422345238f34275888049021821e8e08caa1f',
      },
    ],
  },
  {
    tokenSymbol: 'SETH',
    tokenName: 'sETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/8843/large/sETH.png?1616150207',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
      },
    ],
  },
  {
    tokenSymbol: 'BEETS',
    tokenName: 'Beethoven X',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1634545465',
    tokenAddresses: [
      {
        chainId: '250',
        address: '0xf24bcf4d1e507740041c9cfd2dddb29585adce1e',
      },
    ],
  },
  {
    tokenSymbol: 'OS',
    tokenName: 'Ethereans',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19592/large/newOS.png?1635474948',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x6100dd79fcaa88420750dcee3f735d168abcb771',
      },
    ],
  },
  {
    tokenSymbol: 'DIP',
    tokenName: 'Etherisc DIP',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/4586/large/dip.png?1547039863',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc719d010b63e5bbf2c0551872cd5316ed26acd83',
      },
    ],
  },
  {
    tokenSymbol: 'ERN',
    tokenName: 'Ethernity Chain',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14238/large/LOGO_HIGH_QUALITY.png?1647831402',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xbbc2ae13b23d715c30720f079fcd9b4a74093505',
      },
    ],
  },
  {
    tokenSymbol: 'GIV',
    tokenName: 'Giveth',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/21792/large/GIVToken_200x200.png?1640055088',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x900db999074d9277c5da2a43f252d74366230da0',
      },
    ],
  },
  {
    tokenSymbol: 'CETH',
    tokenName: 'cETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10643/large/ceth2.JPG?1581389598',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
      },
    ],
  },
  {
    tokenSymbol: 'DSETH',
    tokenName: 'Diversified Staked ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28751/large/dsETH-logo.png?1673929867',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x341c05c0e9b33c0e38d64de76516b2ce970bb3be',
      },
    ],
  },
  {
    tokenSymbol: 'ETH2X-FLI',
    tokenName: 'Index Coop - ETH 2x Flexible Leverage Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14392/large/ETH2x-FLI_%281%29.png?1615875910',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd',
      },
    ],
  },
  {
    tokenSymbol: 'GST-ETH',
    tokenName: 'STEPN Green Satoshi Token on ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26528/large/gst_eth.png?1658487279',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x473037de59cf9484632f4a27b509cfe8d4a31404',
      },
    ],
  },
  {
    tokenSymbol: 'IETH',
    tokenName: 'Instadapp ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25822/large/iETH_100x100.png?1654055637',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc383a3833a87009fd9597f8184979af5edfad019',
      },
    ],
  },
  {
    tokenSymbol: 'ICETH',
    tokenName: 'Interest Compounding ETH Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/24483/large/icETH-token-logo.png?1647826356',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84',
      },
    ],
  },
  {
    tokenSymbol: 'RETH2',
    tokenName: 'rETH2',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16570/large/red256.png?1624495231',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x20bc832ca081b91433ff6c17f85701b6e92486c5',
      },
    ],
  },
  {
    tokenSymbol: 'SETH2',
    tokenName: 'sETH2',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16569/large/emerald256.png?1624494960',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xfe2e637202056d30016725477c5da089ab0a043a',
      },
    ],
  },
  {
    tokenSymbol: 'STETH',
    tokenName: 'Lido Staked Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      },
    ],
  },
  {
    tokenSymbol: 'SFRXETH',
    tokenName: 'Staked Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28285/large/JjqQ9ROz_400x400.jpeg?1669170466',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xac3e018457b222d93114458476f3e3416abbe38f',
      },
    ],
  },
  {
    tokenSymbol: 'TETHYS',
    tokenName: 'Tethys Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/22141/large/wjoZJvzA_400x400.jpg?1640927753',
    tokenAddresses: [
      {
        chainId: '1088',
        address: '0x69fdb77064ec5c84fa2f21072973eb28441f43f3',
      },
    ],
  },
  {
    tokenSymbol: 'BABYDOGE',
    tokenName: 'Baby Doge Coin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16125/large/babydoge.jpg?1676303229',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xc748673057861a797275cd8a068abb95a902e8de',
      },
    ],
  },
  {
    tokenSymbol: 'CNHT',
    tokenName: 'CNH Tether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/5251/large/cny-tether-logo.png?1547040741',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x6e109e9dd7fa1a58bc3eff667e8e41fc3cc07aef',
      },
    ],
  },
  {
    tokenSymbol: 'PEBBLE',
    tokenName: 'Etherrock #72',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/17963/large/Screen-Shot-2021-08-25-at-8-42-22-PM.png?1629943788',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xdc98c5543f3004debfaad8966ec403093d0aa4a8',
      },
    ],
  },
  {
    tokenSymbol: 'MTH',
    tokenName: 'Monetha',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/902/large/LOGO-MTH-200-200.png?1656643069',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xaf4dce16da2877f8c9e00544c93b62ac40631f16',
      },
    ],
  },
  {
    tokenSymbol: 'XAUT',
    tokenName: 'Tether Gold',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10481/large/Tether_Gold.png?1668148656',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x68749665ff8d2d112fa859aa293f07a622782f38',
      },
    ],
  },
  {
    tokenSymbol: 'ETC',
    tokenName: 'Binance-Peg Ethereum Classic',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ETC.svg',
    tokenAddresses: [
      {
        address: '0x3d6545b08693dae087e957cb1180ee38b9e3c25e',
        chainId: '56',
      },
    ],
  },
  //USDT
  {
    tokenSymbol: 'CUSDT',
    tokenName: 'cUSDT',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/11621/large/cUSDT.png?1592113270',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9',
      },
    ],
  },
  //BNB
  {
    tokenSymbol: 'BNB',
    tokenName: 'BNB',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
      },
    ],
  },
  {
    tokenSymbol: 'BNBX',
    tokenName: 'Stader BNBx',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26842/large/BNBx_Logo.png?1660387908',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x1bdd3cf7f79cfb8edbb955f20ad99211551ba275',
      },
    ],
  },
  {
    tokenSymbol: 'aBNBc',
    tokenName: 'Ankr BNB Reward Bearing Certificate',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ABNBC.svg',
    tokenAddresses: [
      {
        address: '0xe85afccdafbe7f2b096f268e31cce3da8da2990a',
        chainId: '56',
      },
    ],
  },
  {
    tokenSymbol: 'BNB',
    tokenName: 'anyBNB',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/WBNB.svg',
    tokenAddresses: [
      {
        address: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
        chainId: '137',
      },
    ],
  },
  {
    tokenSymbol: 'KOGE',
    tokenName: 'BNB48 Club',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13827/large/bnb48.png?1612154326',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xe6df05ce8c8301223373cf5b969afcb1498c5528',
      },
    ],
  },
  //USDC
  {
    tokenSymbol: 'CUSDC',
    tokenName: 'cUSDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9442/large/Compound_USDC.png?1567581577',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
      },
    ],
  },
  {
    tokenSymbol: 'IUSDC',
    tokenName: 'Instadapp USDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25820/large/iUSDC_100x100.png?1654055475',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc8871267e07408b89aa5aecc58adca5e574557f8',
      },
    ],
  },
  //XRP - REMOVED NOTHING
  //ADA
  {
    tokenSymbol: 'OATH',
    tokenName: 'OATH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/24075/large/oath.png?1646233885',
    tokenAddresses: [
      {
        chainId: '250',
        address: '0x21ada0d2ac28c3a5fa3cd2ee30882da8812279b6',
      },
    ],
  },
  {
    tokenSymbol: 'FRONT',
    tokenName: 'Frontier',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12479/large/frontier_logo.png?1600145472',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xf8c3527cc04340b208c854e985240c02f7b7793f',
      },
    ],
  },
  {
    tokenSymbol: 'HYVE',
    tokenName: 'Hyve',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13072/large/bAe1G-lD_400x400.png?1654056255',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xd794dd1cada4cf79c9eebaab8327a1b0507ef7d4',
      },
    ],
  },
  {
    tokenSymbol: 'SAND',
    tokenName: 'The Sandbox',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x3845badade8e6dff049820680d1f14bd3903a5d0',
      },
    ],
  },
  {
    tokenSymbol: 'FODL',
    tokenName: 'Fodl Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19040/large/Fodl_Symbol_Gradient.png?1651644153',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3',
      },
    ],
  },
  {
    tokenSymbol: 'GEL',
    tokenName: 'Gelato',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15026/large/Gelato_Icon_Logo_1024x1024.png?1619491717',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05',
      },
    ],
  },
  {
    tokenSymbol: 'MIMO',
    tokenName: 'Mimo Governance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16449/large/mimodefi.PNG?1624240539',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x90b831fa3bebf58e9744a14d638e25b4ee06f9bc',
      },
    ],
  },
  {
    tokenSymbol: 'VOLT',
    tokenName: 'Volt Inu',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25201/large/logo200.png?1653635992',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac',
      },
    ],
  },
  {
    tokenSymbol: 'CERES',
    tokenName: 'Ceres',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17959/large/sQLDgqx.png?1648442923',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x2e7b0d4f9b2eaf782ed3d160e3a0a4b1a7930ada',
      },
    ],
  },
  {
    tokenSymbol: 'COV',
    tokenName: 'Covesting',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1950/large/covesting.png?1547036237',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xada86b1b313d1d5267e3fc0bb303f0a2b66d0ea7',
      },
    ],
  },
  {
    tokenSymbol: 'INST',
    tokenName: 'Instadapp',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14688/large/30hFM0-n_400x400.jpg?1617786420',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x6f40d4a6237c257fff2db00fa0510deeecd303eb',
      },
    ],
  },
  {
    tokenSymbol: 'NPX',
    tokenName: 'Napoleon X',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1471/large/napoleon-x.jpg?1547035570',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x28b5e12cce51f15594b0b91d5b5adaa70f684a02',
      },
    ],
  },
  {
    tokenSymbol: 'NITRO',
    tokenName: 'Nitro League',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/21668/large/_X6vYBDM_400x400.jpg?1639705848',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0335a7610d817aeca1bebbefbd392ecc2ed587b8',
      },
    ],
  },
  {
    tokenSymbol: 'REVO',
    tokenName: 'Revomon',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14759/large/revomon.jpeg?1618243538',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x155040625d7ae3e9cada9a73e3e44f76d3ed1409',
      },
    ],
  },
  {
    tokenSymbol: 'TIDAL',
    tokenName: 'Tidal Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14460/large/Tidal-mono.png?1616233894',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7',
      },
    ],
  },
  {
    tokenSymbol: 'ADAPAD',
    tokenName: 'ADAPad',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/18273/large/EhSqPTtG_400x400.jpg?1631181091',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xdb0170e2d0c1cc1b2e7a90313d9b9afa4f250289',
      },
    ],
  },
  {
    tokenSymbol: 'CRA',
    tokenName: 'Crabada',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20011/large/crabada_icon_%281%29.png?1636372872',
    tokenAddresses: [
      {
        chainId: '43114',
        address: '0xa32608e873f9ddef944b24798db69d80bbb4d1ed',
      },
    ],
  },
  {
    tokenSymbol: 'MAHA',
    tokenName: 'MahaDAO',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13404/large/MAHA_Token.png?1625651604',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x745407c86df8db893011912d3ab28e68b62e49b0',
      },
    ],
  },
  {
    tokenSymbol: 'VITA',
    tokenName: 'VitaDAO',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/16580/large/QmRjwywiAfpzSfQTuWM3zCTghSHN7G6ohQaar7Ht6WANUp.png?1624506420',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x81f8f0bb1cb2a06649e51913a151f0e7ef6fa321',
      },
    ],
  },
  {
    tokenSymbol: 'FORTH',
    tokenName: 'Ampleforth Governance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14917/large/photo_2021-04-22_00.00.03.jpeg?1619020835',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x77fba179c79de5b7653f68b5039af940ada60ce0',
      },
    ],
  },
  {
    tokenSymbol: 'GNX',
    tokenName: 'Genaro Network',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1361/large/genaro-network.png?1547035387',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x6ec8a24cabdc339a06a172f8223ea557055adaa5',
      },
    ],
  },
  {
    tokenSymbol: 'MSU',
    tokenName: 'MetaSoccer',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/21670/large/Om_U3jQg_400x400.jpg?1639706776',
    tokenAddresses: [
      {
        chainId: '137',
        address: '0xe8377a076adabb3f9838afb77bee96eac101ffb1',
      },
    ],
  },
  {
    tokenSymbol: 'AMA',
    tokenName: 'MrWeb Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/27173/large/jd0i3xri_400x400.jpeg?1662352468',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xa77d560e34bd6a8d7265f754b4fcd65d9a8e5619',
      },
    ],
  },
  {
    tokenSymbol: 'PERC',
    tokenName: 'Perion',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/23302/large/PERC.png?1674724325',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x60be1e1fe41c1370adaf5d8e66f07cf1c2df2268',
      },
    ],
  },
  {
    tokenSymbol: 'PRE',
    tokenName: 'Presearch',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1299/large/presearch.png?1548331942',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xec213f83defb583af3a000b1c0ada660b1902a0f',
      },
    ],
  },
  {
    tokenSymbol: 'SMARTCREDIT',
    tokenName: 'SmartCredit',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13036/large/smartcredit_logo_02_white_a-1.png?1604545479',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x72e9d9038ce484ee986fea183f8d8df93f9ada13',
      },
    ],
  },
  {
    tokenSymbol: 'TON',
    tokenName: 'Toncoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1670498136',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x582d872a1b094fc48f5de31d3b73f2d9be47def1',
      },
    ],
  },
  {
    tokenSymbol: 'VNO',
    tokenName: 'Veno Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28799/large/Veno_Token_dark.png?1674281588',
    tokenAddresses: [
      {
        chainId: '25',
        address: '0xdb7d0a1ec37de1de924f8e8adac6ed338d4404e9',
      },
    ],
  },
  {
    tokenSymbol: 'WOM',
    tokenName: 'Wombat Exchange',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26946/large/Wombat_Token.png?1660982422',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xad6742a35fb341a9cc6ad674738dd8da98b94fb1',
      },
    ],
  },
  {
    tokenSymbol: 'XMON',
    tokenName: 'XMON',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14008/large/xmon_logo.png?1613615094',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x3aada3e213abf8529606924d8d1c55cbdc70bf74',
      },
    ],
  },
  {
    tokenSymbol: 'YAXIS',
    tokenName: 'yAxis',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12620/large/Logo.png?1608310944',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73',
      },
    ],
  },
  {
    tokenSymbol: 'ADP',
    tokenName: 'Adappter',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14203/large/logo_on.png?1614909616',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc314b0e758d5ff74f63e307a86ebfe183c95767b',
      },
    ],
  },
  {
    tokenSymbol: 'DDX',
    tokenName: 'DerivaDAO',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13453/large/ddx_logo.png?1608741641',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x3a880652f47bfaa771908c07dd8673a787daed3a',
      },
    ],
  },
  {
    tokenSymbol: 'IDAI',
    tokenName: 'Instadapp DAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25821/large/iDAI_100x100.png?1654055549',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x40a9d39aa50871df092538c5999b107f34409061',
      },
    ],
  },
  {
    tokenSymbol: 'IETH',
    tokenName: 'Instadapp ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25822/large/iETH_100x100.png?1654055637',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc383a3833a87009fd9597f8184979af5edfad019',
      },
    ],
  },
  {
    tokenSymbol: 'IUSDC',
    tokenName: 'Instadapp USDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25820/large/iUSDC_100x100.png?1654055475',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc8871267e07408b89aa5aecc58adca5e574557f8',
      },
    ],
  },
  //BUSD - NOTHING REMOVED
  //MATIC
  {
    tokenSymbol: 'MIMATIC',
    tokenName: 'MAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15264/large/mimatic-red.png?1620281018',
    tokenAddresses: [
      {
        chainId: '137',
        address: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
      },
    ],
  },
  {
    tokenSymbol: 'MATICX',
    tokenName: 'Stader MaticX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25383/large/maticx.png?1674714297',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xf03a7eb46d01d9ecaa104558c732cf82f6b6b645',
      },
    ],
  },
  {
    tokenSymbol: 'stMATIC',
    tokenName: 'Staked Matic',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/STMATIC.png',
    tokenAddresses: [
      {
        address: '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4',
        chainId: '137',
      },
    ],
  },
  //DOGE
  {
    tokenSymbol: 'ELON',
    tokenName: 'Dogelon Mars',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14962/large/6GxcPRo3_400x400.jpg?1619157413',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3',
      },
    ],
  },
  {
    tokenSymbol: 'DOG',
    tokenName: 'The Doge NFT',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/18111/large/Doge.png?1630696110',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xbaac2b4491727d78d2b78815144570b9f2fe8899',
      },
    ],
  },
  {
    tokenSymbol: 'BABYDOGE',
    tokenName: 'Baby Doge Coin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16125/large/babydoge.jpg?1676303229',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xac57de9c1a09fec648e93eb98875b212db0d460b',
      },
    ],
  },
  {
    tokenSymbol: 'DOGEGF',
    tokenName: 'DogeGF',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/18651/large/dogf.png?1632758659',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xfb130d93e49dca13264344966a611dc79a456bc5',
      },
    ],
  },
  {
    tokenSymbol: 'METADOGE',
    tokenName: 'Meta Doge',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19656/large/metadoge.png?1636333901',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x8530b66ca3ddf50e0447eae8ad7ea7d5e62762ed',
      },
    ],
  },
  {
    tokenSymbol: 'SHIBDOGE',
    tokenName: 'ShibaDoge',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/SHIBDOGE.png',
    tokenAddresses: [
      {
        address: '0x6adb2e268de2aa1abf6578e4a8119b960e02928f',
        chainId: '1',
      },
    ],
  },
  {
    tokenSymbol: 'DC',
    tokenName: 'Dogechain',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26828/large/dogechain.jpeg?1660292741',
    tokenAddresses: [
      {
        chainId: '2000',
        address: '0x7b4328c127b85369d9f82ca0503b000d09cf9180',
      },
      {
        chainId: '1',
        address: '0x7b4328c127b85369d9f82ca0503b000d09cf9180',
      },
    ],
  },
  {
    tokenSymbol: 'BABYDOGE',
    tokenName: 'BabyDoge ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17166/large/logo_256px_%281%29.png?1626684127',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xac8e13ecc30da7ff04b842f21a62a1fb0f10ebd5',
      },
    ],
  },
  {
    tokenSymbol: 'DOGECOLA',
    tokenName: 'DOGECOLA',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17371/large/11271.png?1669461804',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x4756cd85cd07769c2ce07a73497f208d56d48ec1',
      },
    ],
  },
  {
    tokenSymbol: 'EDOGE',
    tokenName: 'ElonDoge.io',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15806/large/Edoge.png?1621934765',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x163f182c32d24a09d91eb75820cde9fd5832b329',
      },
    ],
  },
  {
    tokenSymbol: 'GDOGE',
    tokenName: 'Golden Doge',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/17190/large/Golden-Doge-Logo-200x200-White-Background.png?1626832299',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xa53e61578ff54f1ad70186be99332a6e20b6ffa9',
      },
    ],
  },
  {
    tokenSymbol: 'MINIDOGE',
    tokenName: 'MiniDOGE',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16837/large/MiniDoge_Token_200_svlozg.png?1625294597',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xba07eed3d09055d60caef2bdfca1c05792f2dfad',
      },
    ],
  },
  {
    tokenSymbol: 'POLYDOGE',
    tokenName: 'PolyDoge',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15146/large/p1kSco1h_400x400.jpg?1619842715',
    tokenAddresses: [
      {
        chainId: '137',
        address: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472',
      },
    ],
  },
  {
    tokenSymbol: 'DOBO',
    tokenName: 'DogeBonk',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19153/large/dobo.png?1640080606',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xae2df9f730c54400934c06a17462c41c08a06ed8',
      },
    ],
  },
  {
    tokenSymbol: 'LEASH',
    tokenName: 'Doge Killer',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15802/large/Leash.png?1621931543',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x27c70cd1946795b66be9d954418546998b546634',
      },
    ],
  },
  {
    tokenSymbol: 'TAMA',
    tokenName: 'Tamadoge',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/27501/large/CaltNDWu_400x400.jpeg?1664329157',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x12b6893ce26ea6341919fe289212ef77e51688c8',
      },
    ],
  },
  //OKB- NOTHING DELETED
  //SOL
  {
    tokenSymbol: 'SOLID',
    tokenName: 'Solidly',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28676/large/solid.png?1673226406',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x777172d858dc1599914a1c4c6c9fc48c99a60990',
      },
    ],
  },
  {
    tokenSymbol: 'SOLVE',
    tokenName: 'SOLVE',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/1768/large/Solve.Token_logo_200_200_wiyhout_BG.png?1575869846',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x446c9033e7516d820cc9a2ce2d0b7328b579406f',
      },
    ],
  },
  {
    tokenSymbol: 'CHICKS',
    tokenName: 'SolChicks',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20978/large/chicks.png?1638162821',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xa91c7bc1e07996a188c1a5b1cfdff450389d8acf',
      },
    ],
  },
  {
    tokenSymbol: 'TRI',
    tokenName: 'Trisolaris',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20607/large/logo_-_2021-11-19T104946.772.png?1637290197',
    tokenAddresses: [
      {
        chainId: '1313161554',
        address: '0xfa94348467f64d5a457f75f8bc40495d33c65abb',
      },
    ],
  },
  //STETH- NOTHING REMOVED
  //DOT
  {
    tokenSymbol: 'MOOV',
    tokenName: 'dotmoovs',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15817/large/dotmoovs-symbol-gradient.png?1635332626',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x24ec2ca132abf8f6f8a6e24a1b97943e31f256a7',
      },
    ],
  },
  {
    tokenSymbol: 'CDT',
    tokenName: 'Blox',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1231/large/Blox_Staking_Logo_2.png?1609117544',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af',
      },
    ],
  },
  {
    tokenSymbol: 'RDT',
    tokenName: 'Ridotto',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/18671/large/200x200_%2832%29.png?1632875527',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x4740735aa98dc8aa232bd049f8f0210458e7fca3',
      },
    ],
  },
  //SHIB
  {
    tokenSymbol: 'SHIBDOGE',
    tokenName: 'ShibaDoge',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/SHIBDOGE.png',
    tokenAddresses: [
      {
        address: '0x6adb2e268de2aa1abf6578e4a8119b960e02928f',
        chainId: '1',
      },
    ],
  },
  {
    tokenSymbol: 'BONE',
    tokenName: 'Bone ShibaSwap',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16916/large/bone_icon.png?1625625505',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x9813037ee2218799597d83d4a5b6f3b6778218d9',
      },
    ],
  },
  {
    tokenSymbol: 'VERSE',
    tokenName: 'Shibaverse',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/18407/large/logo_200.png?1631795328',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x7ae0d42f23c33338de15bfa89c7405c068d9dc0a',
      },
    ],
  },
  {
    tokenSymbol: 'KINGSHIB',
    tokenName: 'King Shiba',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19215/large/kingshib.png?1661498524',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x84f4f7cdb4574c9556a494dab18ffc1d1d22316c',
      },
    ],
  },
  {
    tokenSymbol: 'NISHIB',
    tokenName: 'NitroShiba',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/27288/large/nishib_logo.png?1663143249',
    tokenAddresses: [
      {
        chainId: '42161',
        address: '0x4dad357726b41bb8932764340ee9108cc5ad33a0',
      },
    ],
  },
  {
    tokenSymbol: 'SHIBX',
    tokenName: 'Shibavax',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17913/large/Logo_Shibx_200x200.jpg?1674723495',
    tokenAddresses: [
      {
        chainId: '43114',
        address: '0x440abbf18c54b2782a4917b80a1746d3a2c2cce1',
      },
    ],
  },
  {
    tokenSymbol: 'SHIBA',
    tokenName: 'BitShiba',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/SHIBA.svg',
    tokenAddresses: [
      {
        address: '0xb84cbbf09b3ed388a45cd875ebba41a20365e6e7',
        chainId: '56',
      },
    ],
  },
  {
    tokenSymbol: 'QOM',
    tokenName: 'Shiba Predator',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/24430/large/l1KzMcL.png?1647660619',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xa71d0588eaf47f12b13cf8ec750430d21df04974',
      },
    ],
  },
  //LTC
  {
    tokenSymbol: 'PLTC',
    tokenName: 'PlatonCoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/7178/large/PLTC.png?1616126045',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x429d83bb0dcb8cdd5311e34680adc8b12070a07f',
      },
    ],
  },
  // WE'LL NEED TO WHITELIST TRX REMOVED THESE:
  {
    tokenSymbol: 'STRX',
    tokenName: 'StrikeX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15839/large/StrikeX-Icon-200px.png?1635161631',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xd6fdde76b8c1c45b33790cc8751d5b88984c44ec',
      },
    ],
  },
  //AVAX
  {
    tokenSymbol: 'HUSKY',
    tokenName: 'Husky AVAX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17812/large/husky.png?1629721413',
    tokenAddresses: [
      {
        chainId: '43114',
        address: '0x65378b697853568da9ff8eab60c13e1ee9f4a654',
      },
      {
        chainId: '56',
        address: '0x52d88a9a2a20a840d7a336d21e427e9ad093deea',
      },
    ],
  },
  {
    tokenSymbol: 'SAVAX',
    tokenName: 'BENQI Liquid Staked AVAX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/23657/large/savax_blue.png?1644989825',
    tokenAddresses: [
      {
        chainId: '43114',
        address: '0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be',
      },
    ],
  },
  {
    tokenSymbol: 'SHIBX',
    tokenName: 'Shibavax',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17913/large/Logo_Shibx_200x200.jpg?1674723495',
    tokenAddresses: [
      {
        chainId: '43114',
        address: '0x440abbf18c54b2782a4917b80a1746d3a2c2cce1',
      },
    ],
  },
  //UNI
  {
    tokenSymbol: 'UNIDX',
    tokenName: 'UniDex',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13178/large/unidx.png?1634888975',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x95b3497bbcccc46a8f45f5cf54b0878b39f8d96c',
      },
    ],
  },
  {
    tokenSymbol: 'UFARM',
    tokenName: 'UniFarm',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15247/large/ufarm.jpeg?1620218765',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x40986a85b4cfcdb054a6cbfb1210194fee51af88',
      },
    ],
  },
  {
    tokenSymbol: 'DUCK',
    tokenName: 'DLP Duck',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13440/large/DLP_Duck_Token.png?1612840740',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f',
      },
    ],
  },
  {
    tokenSymbol: 'UBT',
    tokenName: 'Unibright',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/2707/large/UnibrightLogo_colorful_500x500_preview.png?1547036916',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
      },
    ],
  },
  {
    tokenSymbol: 'UNCX',
    tokenName: 'UniCrypt',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12871/large/unicrypt_logo.png?1603178739',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xadb2437e6f65682b85f814fbc12fec0508a7b1d0',
      },
    ],
  },
  {
    tokenSymbol: 'LAYER',
    tokenName: 'UniLayer',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12164/large/logo-layer.jpg?1674822983',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0ff6ffcfda92c53f615a4a75d982f399c989366b',
      },
    ],
  },
  {
    tokenSymbol: 'UFT',
    tokenName: 'UniLend Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12819/large/UniLend_Finance_logo_PNG.png?1602748658',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0202be363b8a4820f3f4de7faf5224ff05943ab1',
      },
    ],
  },
  {
    tokenSymbol: 'UNIC',
    tokenName: 'Unicly',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14720/large/Unicly.png?1621132059',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x94e0bab2f6ab1f19f4750e42d7349f2740513ad5',
      },
    ],
  },
  {
    tokenSymbol: 'UNISTAKE',
    tokenName: 'Unistake',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12813/large/unistake.png?1612346684',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e',
      },
    ],
  },
  {
    tokenSymbol: 'UNIX',
    tokenName: 'UniX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20674/large/unix.png?1663499268',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8',
      },
    ],
  },
  {
    tokenSymbol: 'KOM',
    tokenName: 'Kommunitas',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17483/large/1_f1S3h57YLT1e1cl8g7RJpw_2x.jpeg?1627956421',
    tokenAddresses: [
      {
        chainId: '137',
        address: '0xc004e2318722ea2b15499d6375905d75ee5390b8',
      },
    ],
  },
  {
    tokenSymbol: 'UDO',
    tokenName: 'Unido',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14176/large/unido.jpg?1614792353',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xea3983fc6d0fbbc41fb6f6091f68f3e08894dc06',
      },
    ],
  },
  {
    tokenSymbol: 'UNFI',
    tokenName: 'Unifi Protocol DAO',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13152/large/logo-2.png?1605748967',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x441761326490cacf7af299725b6292597ee822c2',
      },
    ],
  },
  {
    tokenSymbol: 'SOCKS',
    tokenName: 'Unisocks',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10717/large/qFrcoiM.png?1582525244',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
      },
    ],
  },
  {
    tokenSymbol: 'TRADE',
    tokenName: 'Polytrade',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16416/large/Logo_colored_200.png?1623979654',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x6e5970dbd6fc7eb1f29c6d2edf2bc4c36124c0c1',
      },
    ],
  },
  {
    tokenSymbol: 'CUNI',
    tokenName: 'cUNI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12696/large/compound-uni.png?1601789718',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x35a18000230da775cac24873d00ff85bccded550',
      },
    ],
  },
  {
    tokenSymbol: 'UNIQ',
    tokenName: 'Uniqly',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14808/large/Hnet-com-image.png?1618538742',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x3758e00b100876c854636ef8db61988931bb8025',
      },
    ],
  },
  {
    tokenSymbol: 'FWC',
    tokenName: 'Football World Community',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/24258/large/IMG_20221202_222442_239.jpg?1670297518',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x6d3a160b86edcd46d8f9bba25c2f88cccade19fc',
      },
    ],
  },
  {
    tokenSymbol: 'UPUNK',
    tokenName: 'Unicly CryptoPunks Collection',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14905/large/cryptopunk7804.png?1618978888',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x8d2bffcbb19ff14a698c424fbcdcfd17aab9b905',
      },
    ],
  },
  {
    tokenSymbol: 'UFEWO',
    tokenName: 'Unicly Fewocious Collection',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16387/large/uFEWO.png?1623894677',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xcccf837f40d334f8602f031e64b52ad4cd2b6601',
      },
    ],
  },
  {
    tokenSymbol: 'UAXIE',
    tokenName: 'Unicly Mystic Axies Collection',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14921/large/uaxie-mystic.png?1619055573',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x68b1cadb8d5ab0c97fe9d9fbe0eb60acb329fe3f',
      },
    ],
  },
  {
    tokenSymbol: 'U',
    tokenName: 'Unidef',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26691/large/Unidef_Logo-_Square-_200_200.png?1668675266',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x89db9b433fec1307d3dc8908f2813e9f7a1d38f0',
      },
    ],
  },
  {
    tokenSymbol: 'PILOT',
    tokenName: 'Unipilot',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/17235/large/QmSjCnb74Q88o9gcTMMYNggj6BDkFEPukAZ5nWrhPaRxoW.png?1626923517',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x37c997b35c619c21323f3518b9357914e8b99525',
      },
    ],
  },
  {
    tokenSymbol: 'XYZ',
    tokenName: 'Universe.XYZ',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15809/large/universexyz.png?1621950483',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x618679df9efcd19694bb1daa8d00718eacfa2883',
      },
    ],
  },
  {
    tokenSymbol: 'ZCX',
    tokenName: 'Unizen',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14830/large/7xjpHaG.png?1618564961',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc52c326331e9ce41f04484d3b5e5648158028804',
      },
    ],
  },
  {
    tokenSymbol: 'UWL',
    tokenName: 'UniWhales',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13166/large/uniwhale.png?1611967645',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xdbdd6f355a37b94e6c7d32fef548e98a280b8df5',
      },
    ],
  },
  //DAI
  {
    tokenSymbol: 'CDAI',
    tokenName: 'cDAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9281/large/cDAI.png?1576467585',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
      },
    ],
  },
  {
    tokenSymbol: 'IDAI',
    tokenName: 'Instadapp DAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25821/large/iDAI_100x100.png?1654055549',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x40a9d39aa50871df092538c5999b107f34409061',
      },
    ],
  },
  //ATOM- NOTHING DELETED
  //LINK
  {
    tokenSymbol: 'ISP',
    tokenName: 'Ispolink',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15283/large/isolink.PNG?1620352267',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc8807f0f5ba3fa45ffbdc66928d71c5289249014',
      },
    ],
  },
  {
    tokenSymbol: 'CLINK',
    tokenName: 'cLINK',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/23943/large/iShot2022-02-25_14.35.54.png?1645770966',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xface851a4921ce59e912d19329929ce6da6eb0c7',
      },
    ],
  },
  {
    tokenSymbol: 'LINKA',
    tokenName: 'LINKA',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/9487/large/C2RRuVH6eVbXIDbew-0VJoGpPb_bMPjRjM9qlYud7tqtGgb1GskioTkIntKuugvXnX-Y3O54L-4zWeWWm_Fffo1kJiqJG5vE4Iu1FSvZ-N750y_tlB7yAGeYztAD-MDrwEPaF3Y9j6E94mPVyKuidqbxf9vBeR5r4GAya3friWZjMzpnJ_q9v0jiIBxEC5YAy1C0Zx6yqVoHJjiTW.jpg?1568013160',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x578b49c45961f98d8df92854b53f1641af0a5036',
      },
    ],
  },
  {
    tokenSymbol: 'LET',
    tokenName: 'Linkeye',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1814/large/linkeye.png?1547975964',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xfa3118b34522580c35ae27f6cf52da1dbb756288',
      },
    ],
  },
  {
    tokenSymbol: 'SDL',
    tokenName: 'Saddle Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20476/large/edit_saddle.png?1660734429',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xf1dc500fde233a4055e25e5bbf516372bc4f6871',
      },
    ],
  },
  {
    tokenSymbol: 'STARL',
    tokenName: 'StarLink',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16824/large/ZxJbRWJ.png?1625177900',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24',
      },
    ],
  },
  {
    tokenSymbol: 'ZLK',
    tokenName: 'Zenlink Network',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20884/large/zenlink.PNG?1637824309',
    tokenAddresses: [
      {
        chainId: '1285',
        address: '0x0f47ba9d9bde3442b42175e51d6a367928a1173b',
      },
    ],
  },
  //TON
  {
    tokenSymbol: 'GTON',
    tokenName: 'GTON CAPITAL',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15728/large/GC_logo_200x200.png?1642669327',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d',
      },
    ],
  },
  {
    tokenSymbol: 'ONSTON',
    tokenName: 'Onston',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20669/large/onston.PNG?1637547859',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x47b9f01b16e9c9cb99191dca68c9cc5bf6403957',
      },
    ],
  },
  {
    tokenSymbol: 'NIOX',
    tokenName: 'Autonio',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1122/large/NewLogo.png?1597298450',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc813ea5e3b48bebeedb796ab42a30c5599b01740',
      },
    ],
  },
  {
    tokenSymbol: 'YAE',
    tokenName: 'Cryptonovae',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14693/large/yae.png?1640337904',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x4ee438be38f8682abb089f2bfea48851c5e71eaf',
      },
    ],
  },
  {
    tokenSymbol: 'XPR',
    tokenName: 'Proton',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10941/large/Proton-Icon.png?1588283737',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xd7efb00d12c2c13131fd319336fdf952525da2af',
      },
    ],
  },
  {
    tokenSymbol: 'STON',
    tokenName: 'Ston',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13001/large/ston-v2-200x200.png?1604284194',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xdc47f2ba852669b178699449e50682d6ceaf8c07',
      },
    ],
  },
  {
    tokenSymbol: 'TONIC',
    tokenName: 'Tectonic',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/21982/large/TONIC_logo.png?1640575290',
    tokenAddresses: [
      {
        chainId: '25',
        address: '0xdd73dea10abc2bff99c60882ec5b2b81bb1dc5b2',
      },
    ],
  },
  {
    tokenSymbol: 'TONE',
    tokenName: 'TE-FOOD',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/2325/large/tec.png?1547036538',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4',
      },
    ],
  },
  {
    tokenSymbol: 'TON',
    tokenName: 'Tokamak Network',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12260/large/D919x5-s_400x400.png?1598568068',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x2be5e8c109e2197d077d13a82daead6a9b3433c5',
      },
    ],
  },
  {
    tokenSymbol: 'KRD',
    tokenName: 'Krypton DAO',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25467/large/krd.png?1651915442',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xb020805e0bc7f0e353d1343d67a239f417d57bbf',
      },
    ],
  },
  {
    tokenSymbol: 'PGX',
    tokenName: 'Pegaxy Stone',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19305/large/Logo_200x200_%281%29.png?1634972378',
    tokenAddresses: [
      {
        chainId: '137',
        address: '0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae',
      },
    ],
  },
  {
    tokenSymbol: 'PLTC',
    tokenName: 'PlatonCoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/7178/large/PLTC.png?1616126045',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x429d83bb0dcb8cdd5311e34680adc8b12070a07f',
      },
    ],
  },
  {
    tokenSymbol: 'PLU',
    tokenName: 'Pluton',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1241/large/pluton.png?1548331624',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xd8912c10681d8b21fd3742244f44658dba12264e',
      },
    ],
  },
  {
    tokenSymbol: 'BCT',
    tokenName: 'Toucan Protocol: Base Carbon Tonne',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19240/large/bct_exchange_enhanced.png?1641441498',
    tokenAddresses: [
      {
        chainId: '137',
        address: '0x2f800db0fdb5223b3c3f354886d907a671414a7f',
      },
    ],
  },
  {
    tokenSymbol: 'WTC',
    tokenName: 'Waltonchain',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1093/large/ggx6nnW.png?1604815811',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74',
      },
    ],
  },
  {
    tokenSymbol: 'GES',
    tokenName: 'GeStone',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/GES.svg',
    tokenAddresses: [
      {
        address: '0x01ad5c8ca6b2470cbc81c398336f83aae22e4471',
        chainId: '56',
      },
    ],
  },
  {
    tokenSymbol: 'PSTN',
    tokenName: 'Piston Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/PSTN.svg',
    tokenAddresses: [
      {
        address: '0xbfacd29427ff376ff3bc22dffb29866277ca5fb4',
        chainId: '56',
      },
    ],
  },
  //LEO
  {
    tokenSymbol: 'NPX',
    tokenName: 'Napoleon X',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1471/large/napoleon-x.jpg?1547035570',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x28b5e12cce51f15594b0b91d5b5adaa70f684a02',
      },
      {
        chainId: '56',
        address: '0xd8cb4c2369db13c94c90c7fd3bebc9757900ee6b',
      },
    ],
  },
  {
    tokenSymbol: 'LEON',
    tokenName: 'Leonicorn LEON',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/23714/large/leon-logo-square.png?1645436145',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x27e873bee690c8e161813de3566e9e18a64b0381',
      },
    ],
  },
  {
    tokenSymbol: 'KLT',
    tokenName: 'Kamaleont',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26386/large/IMG_20220712_140305_799.jpg?1657680196',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xf87940f78f2f4d99a0c5c22e3fcc21795cd53245',
      },
    ],
  },
  //ETC
  {
    tokenSymbol: 'FET',
    tokenName: 'Fetch.ai',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/5681/large/Fetch.jpg?1572098136',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xaea46a60368a7bd060eec7df8cba43b7ef41ad85',
      },
      {
        chainId: '56',
        address: '0x031b41e504677879370e9dbcf937283a8691fa7f',
      },
    ],
  },
  //WE SHOULD WHITELIST WMR
  //WE SHOULD WHITELIST APT
  //WE SHOULD WHITELIST BCH
  //LDO
  {
    tokenSymbol: 'DUSD',
    tokenName: 'DefiDollar',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12333/large/defidollar_logo.png?1599116360',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
      },
    ],
  },
  //WE SHOULD WHITELIST XLM
  //WE SHOULD WHITELIST HBAR
  //FIL
  {
    tokenSymbol: 'SFIL',
    tokenName: 'Filecoin Standard Full Hashrate',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/21669/large/_70BfuBY_400x400.jpg?1639706531',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x965b85d4674f64422c4898c8f8083187f02b32c0',
      },
    ],
  },
  //NEAR
  {
    tokenSymbol: '1ART',
    tokenName: 'OneArt',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/19307/large/token_light_3x.png?1642936901',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xd3c325848d7c6e29b574cb0789998b2ff901f17e',
      },
    ],
  },
  {
    tokenSymbol: 'LINA',
    tokenName: 'Linear',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12509/large/1649227343-linalogo200px.png?1649229117',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x3e9bc21c9b189c09df3ef1b824798658d5011937',
      },
    ],
  },
  {
    tokenSymbol: 'NEARX',
    tokenName: 'Stader NearX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/27787/large/Nearx.png?1674714238',
    tokenAddresses: [
      {
        chainId: '1313161554',
        address: '0xb39eeb9e168ef6c639f5e282fef1f6bc4dcae375',
      },
    ],
  },
  //QNT - NOTHING DELETED
  //APE - RISKY
  {
    tokenSymbol: 'PAPER',
    tokenName: 'Dope Wars Paper',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/18166/large/EQHGcBO__400x400.jpeg?1663726283',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x7ae1d57b58fa6411f32948314badd83583ee0e8c',
      },
    ],
  },
  {
    tokenSymbol: 'FOX',
    tokenName: 'ShapeShift FOX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9988/large/FOX.png?1574330622',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc770eefad204b5180df6a14ee197d99d808ee52d',
      },
    ],
  },
  {
    tokenSymbol: 'NFT',
    tokenName: 'NFT Protocol',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12174/large/nftprotocol_32.png?1597818115',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xcb8d1260f9c92a3a545d409466280ffdd7af7042',
      },
    ],
  },
  {
    tokenSymbol: 'CWS',
    tokenName: 'Seascape Crowns',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13835/large/crowns_logo.png?1612176905',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xac0104cca91d167873b8601d2e71eb3d4d8c33e0',
      },
    ],
  },
  {
    tokenSymbol: 'PEEL',
    tokenName: 'Meta Apes PEEL',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26450/large/PEEL200x200.png?1658112274',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x734548a9e43d2d564600b1b2ed5be9c2b911c6ab',
      },
    ],
  },
  {
    tokenSymbol: 'APEFI',
    tokenName: 'Ape Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25625/large/APEFI.png?1652857977',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x4332f8a38f14bd3d8d1553af27d7c7ac6c27278d',
      },
    ],
  },
  {
    tokenSymbol: 'APEX',
    tokenName: 'ApeX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25266/large/CxpMECpk_400x400_%281%29.png?1651067984',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x52a8845df664d76c69d2eea607cd793565af42b8',
      },
    ],
  },
  {
    tokenSymbol: 'APE (Multichain)',
    tokenName: 'ApeCoin (Multichain)',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/APE.svg',
    tokenAddresses: [
      {
        address: '0x0b079b33b6e72311c6be245f9f660cc385029fc3',
        chainId: '56',
      },
    ],
  },
  {
    tokenSymbol: 'BAPE',
    tokenName: 'Bored APEmove',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BAPE.svg',
    tokenAddresses: [
      {
        address: '0x70e48eb0881a8c56baad37eb4491ea85eb47b4b2',
        chainId: '56',
      },
    ],
  },
  {
    tokenSymbol: 'BAS',
    tokenName: 'Block Ape Scissors',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17404/large/Logo_White_Face_%28200%29.png?1659093852',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc',
      },
    ],
  },
  {
    tokenSymbol: 'HUM',
    tokenName: 'Humanscape',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/4243/large/Webp.net-resizeimage_%2836%29.png?1547039574',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x07327a00ba28d413f745c931bbe6be053b0ad2a6',
      },
    ],
  },
  //CRO
]

export default addressMappingBlacklist
