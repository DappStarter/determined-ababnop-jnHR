require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad gesture basic flat talk'; 
let testAccounts = [
"0x0756a80434e6c696dd9d735834a0ec53e7aa31fc14166bb519fbb01dfafb4c39",
"0xd8a65981c7ef69d46ef97a83cda3743f2bc804e7e41e5b0db9724ea696db92bc",
"0x5fca2faecac2ecd185c3f10518bbcde9ceeeb26e1d8df90abf6e3b2066dc1711",
"0x8dd79b72e32a63aca2e92fed84c1cb2e6528680e5b60551698f13e91cac7a885",
"0xb89aba846a58222c304e118fd6a19d9e961cd5eb885e9cee9276013ebf485c12",
"0x659a318bdffd41b9fb4896e1ad22e7b81dbc5e32673b705a809b5268a4e7f16b",
"0x1950fd058f7f5815df2bb568f423100b6a581807b897c14f28bc6caf0228bc98",
"0x7af7850be711658c800d4d5fcd1264102f38693d2dcc3f1200eab61884ccdc11",
"0xef59d16e04a739c46056b1391ff1bc720cd5cf60e4122a269e7cb687e73ece3a",
"0x0da337aae20823154839436bb81f04948cfe8895b3281a360282fd64440cd49e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


