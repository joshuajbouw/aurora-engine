/// <reference types="node" />
import NEAR from 'near-api-js';
export declare class Engine {
    near: NEAR.Near;
    signer: NEAR.Account;
    contract: string;
    constructor(near: NEAR.Near, signer: NEAR.Account, contract: string);
    static connect(options: any, env: any): Promise<Engine>;
    initialize(options: any): Promise<any>;
    getVersion(): Promise<string>;
    getOwner(): Promise<string>;
    getBridgeProvider(): Promise<string>;
    getChainID(): Promise<bigint>;
    getCode(address: string): Promise<Buffer>;
    getBalance(address: string): Promise<bigint>;
    getNonce(address: string): Promise<bigint>;
    getStorageAt(address: string, key: string): Promise<Buffer>;
}