var Web3 = require('web3');
var Net = require('web3-net');

function isListening(url) {
    var provider = url;
    var web3 = new Web3(new Web3.providers.HttpProvider(provider));

    web3.eth.net.isListening().then(listenResult => {
        return listenResult;
    });
}

function isMining(url) {
    var listeningResult = isListening(url);
    if(listeningResult) {
        web3.eth.isMining().then(miningResult => {
            return miningResult;
        });
    }
}

function isSyncing(url) {
    var listeningResult = isListening(url);
    if(listeningResult) {
        web3.eth.isSyncing().then(syncResult => {
            return syncResult;
        });
    }
}

module.exports = {
    isListening,
    isMining,
    isSyncing
};