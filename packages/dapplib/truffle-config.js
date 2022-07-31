require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note predict unveil hunt bread blue genuine'; 
let testAccounts = [
"0x014727141fbf278de52f6ce56e4cfa58a63c0df8680cec4fe79b725ac03def2a",
"0x022d1c5eddb1a635ddb78e81d818ef14ef0cde166d168260a208cd72ab2d542e",
"0xb09cf07f204b1f7c792b24be03b53545cab06a6d2f420a7e1865e9a0b17398e1",
"0x9f827e31c047644753c349b7efb08c7e4b770dccd017f81f6e94c8c2b0cb1d58",
"0xd1ffea710a704d5db3f300dfda93cf2b18320719fca20dcd8168ea59baca1fb0",
"0xabccb6bac42a091374401251e587594b7811e5b08c5365bed4bb1adf86a874e8",
"0xb4d441fad7a5712d179890f336187676c325551baed822b0243e9d5584c57b69",
"0x8baeaae3b76bddb4b64f38e22ece2c036c2ddc5b2ad06a329c50ab45b8596515",
"0xdd70f44f737001e4a04a2984bb0ed53152d75ca59434a487119559e563170339",
"0x360d3b973496c5c973a6fb87788847fc4ca1686190c112f0cdf153e4acd47531"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

