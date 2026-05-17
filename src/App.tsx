import { useState } from 'react'
import './App.css'
import ChainSelector from './components/ChainSelector'
import TransactionEditor from './components/TransactionEditor'
import TransactionDisplay from './components/TransactionDisplay'

type Chain = 'ETH' | 'BTC' | 'USDT'

interface Transaction {
  sender: string
  receiver: string
  amount: string
  gas?: string
  gasPrice?: string
  nonce?: string
  confirmations?: string
  fee?: string
}

const defaultTransactions: Record<Chain, Transaction> = {
  ETH: {
    sender: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    receiver: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    amount: '2.5',
    gas: '21000',
    gasPrice: '45',
    nonce: '42'
  },
  BTC: {
    sender: '1A1z7agoat3Oy6fhRZaLvUxiP5nFQa5X8k',
    receiver: '1dice8EMCpqxqqq4g3LCRbSR3zsZvKn8d',
    amount: '0.85',
    confirmations: '6',
    fee: '0.0001'
  },
  USDT: {
    sender: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    receiver: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    amount: '1000',
    gas: '65000',
    gasPrice: '50',
    nonce: '43'
  }
}

function App() {
  const [chain, setChain] = useState<Chain>('ETH')
  const [transaction, setTransaction] = useState<Transaction>(defaultTransactions.ETH)

  const handleChainChange = (newChain: Chain) => {
    setChain(newChain)
    setTransaction(defaultTransactions[newChain])
  }

  const handleTransactionChange = (updatedTransaction: Transaction) => {
    setTransaction(updatedTransaction)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔗 Blockchain Transaction Visualizer</h1>
        <p>Educational tool to understand blockchain transactions</p>
      </header>

      <div className="app-container">
        <ChainSelector currentChain={chain} onChainChange={handleChainChange} />
        <TransactionEditor transaction={transaction} chain={chain} onTransactionChange={handleTransactionChange} />
        <TransactionDisplay transaction={transaction} chain={chain} />
      </div>
    </div>
  )
}

export default App