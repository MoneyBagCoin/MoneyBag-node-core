var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('ffefebf1'),
  addressVersion: 28,
  privKeyVersion: 156,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('7ddb703c2d99bbdc256477a0df673998d9eaf30ce5b08112b194cad21d0c0000'),
    merkle_root: hex('d46fd21975110915602bd583b5662a3886a74f46a099b668e02cc448be80b0a3'),
    height: 0,
    nonce: 660477,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1445766637,
    bits: 486604799
  },
  dnsSeeds: [
    'dnsseed.creditbit.org',
	'node1.creditbit.org',
    'node2.creditbit.org',
    'node3.creditbit.org',
    'node4.creditbit.org',
    'node5.creditbit.org',
    'node6.creditbit.org',
	'node7.creditbit.org',
	'node8.creditbit.org',
	'node9.creditbit.org',
	'node10.creditbit.org'
  ],
  defaultClientPort: 5556,
  lastPoWBlock: 525600
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('ffefebf1'),
  addressVersion: 28,
  privKeyVersion: 156,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('7ddb703c2d99bbdc256477a0df673998d9eaf30ce5b08112b194cad21d0c0000'),
    merkle_root: hex('d46fd21975110915602bd583b5662a3886a74f46a099b668e02cc448be80b0a3'),
    height: 0,
    nonce: 660477,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1445766637,
    bits: 486604799
  },
  dnsSeeds: [
    'dnsseed.creditbit.org',
	'node1.creditbit.org',
    'node2.creditbit.org',
    'node3.creditbit.org',
    'node4.creditbit.org',
    'node5.creditbit.org',
    'node6.creditbit.org',
	'node7.creditbit.org',
	'node8.creditbit.org',
	'node9.creditbit.org',
	'node10.creditbit.org'
  ],
  defaultClientPort: 5556,
  lastPoWBlock: 525600
};
