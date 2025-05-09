/* Do not change, this code is generated from Golang structs */

export interface APIError {
    Text: string;
    Public: boolean;
}
export interface AddressAlias {
    Type: string;
    Alias: string;
}
export interface EthereumInternalTransfer {
    type: number;
    from: string;
    to: string;
    value: string;
}
export interface EthereumParsedInputParam {
    type: string;
    values?: string[];
}
export interface EthereumParsedInputData {
    methodId: string;
    name: string;
    function?: string;
    params?: EthereumParsedInputParam[];
}
export interface EthereumSpecific {
    type?: number;
    createdContract?: string;
    status: number;
    error?: string;
    nonce: number;
    gasLimit: number;
    gasUsed?: number;
    gasPrice?: string;
    maxPriorityFeePerGas?: string;
    maxFeePerGas?: string;
    baseFeePerGas?: string;
    l1Fee?: number;
    l1FeeScalar?: string;
    l1GasPrice?: string;
    l1GasUsed?: number;
    data?: string;
    parsedData?: EthereumParsedInputData;
    internalTransfers?: EthereumInternalTransfer[];
}
export interface MultiTokenValue {
    id?: string;
    value?: string;
}
export interface TokenTransfer {
    /** @deprecated: Use standard instead. */
    type: '' | 'XPUBAddress' | 'ERC20' | 'ERC721' | 'ERC1155' | 'BEP20' | 'BEP721' | 'BEP1155';
    standard: '' | 'XPUBAddress' | 'ERC20' | 'ERC721' | 'ERC1155' | 'BEP20' | 'BEP721' | 'BEP1155';
    from: string;
    to: string;
    contract: string;
    name?: string;
    symbol?: string;
    decimals: number;
    value?: string;
    multiTokenValues?: MultiTokenValue[];
}
export interface Vout {
    value?: string;
    n: number;
    spent?: boolean;
    spentTxId?: string;
    spentIndex?: number;
    spentHeight?: number;
    hex?: string;
    asm?: string;
    addresses: string[];
    isAddress: boolean;
    isOwn?: boolean;
    type?: string;
}
export interface Vin {
    txid?: string;
    vout?: number;
    sequence?: number;
    n: number;
    addresses?: string[];
    isAddress: boolean;
    isOwn?: boolean;
    value?: string;
    hex?: string;
    asm?: string;
    coinbase?: string;
}
export interface Tx {
    txid: string;
    version?: number;
    lockTime?: number;
    vin: Vin[];
    vout: Vout[];
    blockHash?: string;
    blockHeight: number;
    confirmations: number;
    confirmationETABlocks?: number;
    confirmationETASeconds?: number;
    blockTime: number;
    size?: number;
    vsize?: number;
    value: string;
    valueIn?: string;
    fees?: string;
    hex?: string;
    rbf?: boolean;
    coinSpecificData?: any;
    tokenTransfers?: TokenTransfer[];
    ethereumSpecific?: EthereumSpecific;
    addressAliases?: { [key: string]: AddressAlias };
}
export interface FeeStats {
    txCount: number;
    totalFeesSat: string;
    averageFeePerKb: number;
    decilesFeePerKb: number[];
}
export interface StakingPool {
    contract: string;
    name: string;
    pendingBalance: string;
    pendingDepositedBalance: string;
    depositedBalance: string;
    withdrawTotalAmount: string;
    claimableAmount: string;
    restakedReward: string;
    autocompoundBalance: string;
}
export interface ContractInfo {
    /** @deprecated: Use standard instead. */
    type: '' | 'XPUBAddress' | 'ERC20' | 'ERC721' | 'ERC1155' | 'BEP20' | 'BEP721' | 'BEP1155';
    standard: '' | 'XPUBAddress' | 'ERC20' | 'ERC721' | 'ERC1155' | 'BEP20' | 'BEP721' | 'BEP1155';
    contract: string;
    name: string;
    symbol: string;
    decimals: number;
    createdInBlock?: number;
    destructedInBlock?: number;
}
export interface Token {
    /** @deprecated: Use standard instead. */
    type: '' | 'XPUBAddress' | 'ERC20' | 'ERC721' | 'ERC1155' | 'BEP20' | 'BEP721' | 'BEP1155';
    standard: '' | 'XPUBAddress' | 'ERC20' | 'ERC721' | 'ERC1155' | 'BEP20' | 'BEP721' | 'BEP1155';
    name: string;
    path?: string;
    contract?: string;
    transfers: number;
    symbol?: string;
    decimals: number;
    balance?: string;
    baseValue?: number;
    secondaryValue?: number;
    ids?: string[];
    multiTokenValues?: MultiTokenValue[];
    totalReceived?: string;
    totalSent?: string;
}
export interface Address {
    page?: number;
    totalPages?: number;
    itemsOnPage?: number;
    address: string;
    balance: string;
    totalReceived?: string;
    totalSent?: string;
    unconfirmedBalance: string;
    unconfirmedTxs: number;
    txs: number;
    addrTxCount?: number;
    nonTokenTxs?: number;
    internalTxs?: number;
    transactions?: Tx[];
    txids?: string[];
    nonce?: string;
    usedTokens?: number;
    tokens?: Token[];
    secondaryValue?: number;
    tokensBaseValue?: number;
    tokensSecondaryValue?: number;
    totalBaseValue?: number;
    totalSecondaryValue?: number;
    contractInfo?: ContractInfo;
    /** @deprecated: replaced by contractInfo */
    erc20Contract?: ContractInfo;
    addressAliases?: { [key: string]: AddressAlias };
    stakingPools?: StakingPool[];
}
export interface Utxo {
    txid: string;
    vout: number;
    value: string;
    height?: number;
    confirmations: number;
    address?: string;
    path?: string;
    lockTime?: number;
    coinbase?: boolean;
}
export interface BalanceHistory {
    time: number;
    txs: number;
    received: string;
    sent: string;
    sentToSelf: string;
    rates?: { [key: string]: number };
    txid?: string;
}
export interface BlockInfo {
    Hash: string;
    Time: number;
    Txs: number;
    Size: number;
    Height: number;
}
export interface Blocks {
    page?: number;
    totalPages?: number;
    itemsOnPage?: number;
    blocks: BlockInfo[];
}
export interface Block {
    page?: number;
    totalPages?: number;
    itemsOnPage?: number;
    hash: string;
    previousBlockHash?: string;
    nextBlockHash?: string;
    height: number;
    confirmations: number;
    size: number;
    time?: number;
    version: string;
    merkleRoot: string;
    nonce: string;
    bits: string;
    difficulty: string;
    tx?: string[];
    txCount: number;
    txs?: Tx[];
    addressAliases?: { [key: string]: AddressAlias };
}
export interface BlockRaw {
    hex: string;
}
export interface BackendInfo {
    error?: string;
    chain?: string;
    blocks?: number;
    headers?: number;
    bestBlockHash?: string;
    difficulty?: string;
    sizeOnDisk?: number;
    version?: string;
    subversion?: string;
    protocolVersion?: string;
    timeOffset?: number;
    warnings?: string;
    consensus_version?: string;
    consensus?: any;
}
export interface InternalStateColumn {
    name: string;
    version: number;
    rows: number;
    keyBytes: number;
    valueBytes: number;
    updated: string;
}
export interface BlockbookInfo {
    coin: string;
    network: string;
    host: string;
    version: string;
    gitCommit: string;
    buildTime: string;
    syncMode: boolean;
    initialSync: boolean;
    inSync: boolean;
    bestHeight: number;
    lastBlockTime: string;
    inSyncMempool: boolean;
    lastMempoolTime: string;
    mempoolSize: number;
    decimals: number;
    dbSize: number;
    hasFiatRates?: boolean;
    hasTokenFiatRates?: boolean;
    currentFiatRatesTime?: string;
    historicalFiatRatesTime?: string;
    historicalTokenFiatRatesTime?: string;
    supportedStakingPools?: string[];
    dbSizeFromColumns?: number;
    dbColumns?: InternalStateColumn[];
    about: string;
}
export interface SystemInfo {
    blockbook: BlockbookInfo;
    backend: BackendInfo;
}
export interface FiatTicker {
    ts?: number;
    rates: { [key: string]: number };
    error?: string;
}
export interface FiatTickers {
    tickers: FiatTicker[];
}
export interface AvailableVsCurrencies {
    ts?: number;
    available_currencies: string[];
    error?: string;
}
export interface WsReq {
    id: string;
    method:
        | 'getAccountInfo'
        | 'getInfo'
        | 'getBlockHash'
        | 'getBlock'
        | 'getAccountUtxo'
        | 'getBalanceHistory'
        | 'getTransaction'
        | 'getTransactionSpecific'
        | 'estimateFee'
        | 'sendTransaction'
        | 'subscribeNewBlock'
        | 'unsubscribeNewBlock'
        | 'subscribeNewTransaction'
        | 'unsubscribeNewTransaction'
        | 'subscribeAddresses'
        | 'unsubscribeAddresses'
        | 'subscribeFiatRates'
        | 'unsubscribeFiatRates'
        | 'ping'
        | 'getCurrentFiatRates'
        | 'getFiatRatesForTimestamps'
        | 'getFiatRatesTickersList'
        | 'getMempoolFilters';
    params: any;
}
export interface WsRes {
    id: string;
    data: any;
}
export interface WsAccountInfoReq {
    descriptor: string;
    details?: 'basic' | 'tokens' | 'tokenBalances' | 'txids' | 'txslight' | 'txs';
    tokens?: 'derived' | 'used' | 'nonzero';
    pageSize?: number;
    page?: number;
    from?: number;
    to?: number;
    contractFilter?: string;
    secondaryCurrency?: string;
    gap?: number;
}
export interface WsBackendInfo {
    version?: string;
    subversion?: string;
    consensus_version?: string;
    consensus?: any;
}
export interface WsInfoRes {
    name: string;
    shortcut: string;
    network: string;
    decimals: number;
    version: string;
    bestHeight: number;
    bestHash: string;
    block0Hash: string;
    testnet: boolean;
    backend: WsBackendInfo;
}
export interface WsBlockHashReq {
    height: number;
}
export interface WsBlockHashRes {
    hash: string;
}
export interface WsBlockReq {
    id: string;
    pageSize?: number;
    page?: number;
}
export interface WsBlockFilterReq {
    scriptType: string;
    blockHash: string;
    M?: number;
}
export interface WsBlockFiltersBatchReq {
    scriptType: string;
    bestKnownBlockHash: string;
    pageSize?: number;
    M?: number;
}
export interface WsAccountUtxoReq {
    descriptor: string;
}
export interface WsBalanceHistoryReq {
    descriptor: string;
    from?: number;
    to?: number;
    currencies?: string[];
    gap?: number;
    groupBy?: number;
}
export interface WsTransactionReq {
    txid: string;
}
export interface WsTransactionSpecificReq {
    txid: string;
}
export interface WsEstimateFeeReq {
    blocks?: number[];
    specific?: {
        conservative?: boolean;
        txsize?: number;
        from?: string;
        to?: string;
        data?: string;
        value?: string;
    };
}
export interface Eip1559Fee {
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    minWaitTimeEstimate?: number;
    maxWaitTimeEstimate?: number;
}
export interface Eip1559Fees {
    baseFeePerGas?: string;
    low?: Eip1559Fee;
    medium?: Eip1559Fee;
    high?: Eip1559Fee;
    instant?: Eip1559Fee;
    networkCongestion?: number;
    latestPriorityFeeRange?: string[];
    historicalPriorityFeeRange?: string[];
    historicalBaseFeeRange?: string[];
    priorityFeeTrend?: 'up' | 'down';
    baseFeeTrend?: 'up' | 'down';
}
export interface WsEstimateFeeRes {
    feePerTx?: string;
    feePerUnit?: string;
    feeLimit?: string;
    eip1559?: Eip1559Fees;
}
export interface WsSendTransactionReq {
    hex: string;
}
export interface WsSubscribeAddressesReq {
    addresses: string[];
}
export interface WsSubscribeFiatRatesReq {
    currency?: string;
    tokens?: string[];
}
export interface WsCurrentFiatRatesReq {
    currencies?: string[];
    token?: string;
}
export interface WsFiatRatesForTimestampsReq {
    timestamps: number[];
    currencies?: string[];
    token?: string;
}
export interface WsFiatRatesTickersListReq {
    timestamp?: number;
    token?: string;
}
export interface WsMempoolFiltersReq {
    scriptType: string;
    fromTimestamp: number;
    M?: number;
}
export interface WsRpcCallReq {
    from?: string;
    to: string;
    data: string;
}
export interface WsRpcCallRes {
    data: string;
}
export interface MempoolTxidFilterEntries {
    entries?: { [key: string]: string };
    usedZeroedKey?: boolean;
}
