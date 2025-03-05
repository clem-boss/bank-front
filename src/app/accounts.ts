export interface Account {
  id: number,
  name: string,
  balance: number,
}

export interface Transaction {
  timestamp: number,
  amount: number,
  from: number,
  to: number,
}
