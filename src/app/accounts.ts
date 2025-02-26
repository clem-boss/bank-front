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

export const transactions: Transaction[] = [
  {
    amount: 100,
    from: 2,
    timestamp: Date.now(),
    to: 1,
  },
  {
    amount: 25,
    from: 1,
    timestamp: Date.now(),
    to: 3,
  },
  {
    amount: 1000,
    from: 1,
    timestamp: Date.now(),
    to: 2,
  },
  {
    amount: 1500,
    from: 1,
    timestamp: Date.now(),
    to: 2,
  },
  {
    amount: 1000,
    from: 5,
    timestamp: Date.now(),
    to: 3,
  }
]

export const accounts: Account[] = [
  {
    id: 1,
    balance: 300,
    name: 'Current Account',
  },
  {
    id: 2,
    balance: 25000,
    name: 'Savings Account',
  },
  {
    id: 3,
    balance: 30000,
    name: 'Business Account',
  }
]
