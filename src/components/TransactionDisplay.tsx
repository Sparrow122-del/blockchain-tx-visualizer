import { Copy, ExternalLink } from 'lucide-react'
import './TransactionDisplay.css'

interface TransactionDisplayProps {
  transaction: any
  chain: 'ETH' | 'BTC' | 'USDT'
}

function TransactionDisplay({ transaction, chain }: TransactionDisplayProps) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  const getTxHash = () => {
    return Math.random().toString(16).slice(2)
  }

  const getExplorerUrl = () => {
    const txHash = getTxHash()
    if (chain === 'ETH') return `https://etherscan.io/tx/${txHash}`
    if (chain === 'BTC') return `https://blockchain.com/btc/tx/${txHash}`
    return `https://etherscan.io/token/${txHash}`
  }

  const txHash = getTxHash()
  const explorerUrl = getExplorerUrl()

  const totalGasIfApplicable = chain !== 'BTC' 
    ? (parseInt(transaction.gas || 0) * parseInt(transaction.gasPrice || 0)).toString()
    : undefined

  return (
    <div className="transaction-display">
      <h2>Transaction Details</h2>
      
      <div className="tx-info">
        <div className="tx-field">
          <span className="label">Chain:</span>
          <span className="value">{chain}</span>
        </div>
        
        <div className="tx-field">
          <span className="label">From:</span>
          <span className="value truncate" title={transaction.sender}>{transaction.sender}</span>
        </div>
        
        <div className="tx-field">
          <span className="label">To:</span>
          <span className="value truncate" title={transaction.receiver}>{transaction.receiver}</span>
        </div>
        
        <div className="tx-field">
          <span className="label">Amount:</span>
          <span className="value">{transaction.amount} {chain === 'USDT' ? 'USDT' : chain}</span>
        </div>
        
        {chain !== 'BTC' && (
          <>
            <div className="tx-field">
              <span className="label">Gas Limit:</span>
              <span className="value">{transaction.gas}</span>
            </div>
            
            <div className="tx-field">
              <span className="label">Gas Price:</span>
              <span className="value">{transaction.gasPrice} Gwei</span>
            </div>
            
            <div className="tx-field">
              <span className="label">Total Gas Cost:</span>
              <span className="value">{totalGasIfApplicable} Gwei</span>
            </div>
            
            <div className="tx-field">
              <span className="label">Nonce:</span>
              <span className="value">{transaction.nonce}</span>
            </div>
          </>
        )}
        
        {chain === 'BTC' && (
          <>
            <div className="tx-field">
              <span className="label">Confirmations:</span>
              <span className="value">{transaction.confirmations}</span>
            </div>
            
            <div className="tx-field">
              <span className="label">Fee:</span>
              <span className="value">{transaction.fee} BTC</span>
            </div>
          </>
        )}
      </div>
      
      <div className="tx-hash-section">
        <h3>Transaction Hash</h3>
        <div className="tx-hash">
          <code>{txHash}</code>
          <button onClick={() => handleCopy(txHash)} className="copy-btn" title="Copy hash">
            <Copy size={16} />
          </button>
        </div>
      </div>
      
      <div className="tx-links">
        <a href={explorerUrl} target="_blank" rel="noopener noreferrer" className="explorer-link">
          <ExternalLink size={16} />
          View on Explorer
        </a>
      </div>
    </div>
  )
}

export default TransactionDisplay