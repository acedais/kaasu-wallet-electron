var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'KaasuWallet';
config.appDescription = 'Kaasu Wallet';
config.appSlogan = 'Extended Elevations!';
config.appId = 'com.getkaasu.wallet';
config.appGitRepo = 'https://github.com/acedais/kaasu-wallet-electron';

// default port number for your daemon (e.g. Kaasud)
config.daemonDefaultRpcPort = 10112;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'ksu';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'kaasu-service';

// version on the bundled service (kaasu-service)
config.walletServiceBinaryVersion = "v0.0.0.1";

// default port number for your wallet service (e.g. kaasu-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://getkaasu.info/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '207.154.221.60';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = null;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '207.154.221.60:10112',
];

// your currency name
config.assetName = 'Kaasu';
// your currency ticker
config.assetTicker =  'KSU';
// your currency address prefix, for address validation
config.addressPrefix =  'K';
// standard wallet address length, for address validation
config.addressLength = 95;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 183;

// minimum fee for sending transaction
config.minimumFee = 0.0001;
// minimum amount for sending transaction
config.mininumSend = 0.001;
// default mixin/anonimity for transaction
config.defaultMixin = 0;
// to convert from atomic unit
config.decimalDivisor = 100000;
// to represent human readable value
config.decimalPlaces = 5;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
    { name: 'Acedais',
      address: 'KeKueuwM1XmNyxuXSTFSbqVqkg1LKx23bSGW5BadxxysHmFMfwqThR51YsKvWeV7qFVvd7btqvR3A3NKUzo4ZSd52MtbegD',
      paymentId: '',
    }
];

module.exports = config;