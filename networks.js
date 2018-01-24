var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('ffefebf1'),
  addressVersion: 51,
  privKeyVersion: 239,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('ecfb30eee1a53f304655e41022a6f6617922ad7faf84e1f1caacd315d303bbd8'),
    merkle_root: hex('2c473a492c11295d578a2f2409cb0401adf031bd29a5e963e38c2b55a3c16052'),
    height: 0,
    nonce: 181489,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1513900803,
    bits: 0x1e0ffff0
  },
  dnsSeeds: [
    '82.36.184.73:43210',
	'5.189.152.63:43210',
    '173.249.7.89:43210',
    '138.68.68.149:43210',
    '35.197.91.231:43210',
    '147.135.130.119:4321',
    '1.33.247.11:64765',
	'147.135.184.160:43210'
  ],
  defaultClientPort: 43210,
  lastPoWBlock: 250000
};

exports.mainnet = exports.livenet;

// TODO Configure TestNet
exports.testnet = {
  name: 'testnet',
    magic: hex('ffefebf1'),
  addressVersion: 28,
  privKeyVersion: 156,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('ecfb30eee1a53f304655e41022a6f6617922ad7faf84e1f1caacd315d303bbd8'),
    merkle_root: hex('2c473a492c11295d578a2f2409cb0401adf031bd29a5e963e38c2b55a3c16052'),
    height: 0,
    nonce: 181489,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1513900803,
    bits: 0x1e0ffff0
  },
  dnsSeeds: [
    '82.36.184.73:43210',
	'5.189.152.63:43210',
    '173.249.7.89:43210',
    '138.68.68.149:43210',
    '35.197.91.231:43210',
    '147.135.130.119:4321',
    '1.33.247.11:64765',
	'147.135.184.160:43210'
  ],
  defaultClientPort: 43210,
  lastPoWBlock: 250000
};
