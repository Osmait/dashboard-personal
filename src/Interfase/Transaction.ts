export interface TransactionInterface {
  id: string;
  transaction_name: string;
  transaction_description: string;
  amount: number;
  type_transation: string;
  accountId: string;
  created_at: string;
}
