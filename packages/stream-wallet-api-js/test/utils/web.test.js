const streamApi = require('../../src/index');
const { web } = streamApi.utils;

describe('web', () => {
    test('string parameter in fetchJson', async() => {
        const RPC_URL = 'https://rpc.testnet.streamprotocol.app';
        const statusRequest = {
            'jsonrpc': '2.0',
            'id': 'dontcare',
            'method': 'status',
            'params': []
        };
        const result = await web.fetchJson(RPC_URL, JSON.stringify(statusRequest));
        expect(result.result.chain_id).toBe('testnet');
    });
    test('object parameter in fetchJson', async() => {
        const connection = { url: 'https://rpc.testnet.streamprotocol.app' };
        const statusRequest = {
            'jsonrpc': '2.0',
            'id': 'dontcare',
            'method': 'status',
            'params': []
        };
        const result = await web.fetchJson(connection, JSON.stringify(statusRequest));
        expect(result.result.chain_id).toBe('testnet');
    });
});