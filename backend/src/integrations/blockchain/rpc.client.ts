export interface BlockchainRpcClient {
  getTransaction(txHash: string): Promise<unknown>;
  waitForConfirmation(txHash: string): Promise<unknown>;
}
