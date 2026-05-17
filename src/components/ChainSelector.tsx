import './ChainSelector.css'

interface ChainSelectorProps {
  currentChain: 'ETH' | 'BTC' | 'USDT'
  onChainChange: (chain: 'ETH' | 'BTC' | 'USDT') => void
}

function ChainSelector({ currentChain, onChainChange }: ChainSelectorProps) {
  const chains = [
    { id: 'ETH', label: 'Ethereum', icon: '⟠', color: '#627eea' },
    { id: 'BTC', label: 'Bitcoin', icon: '₿', color: '#f7931a' },
    { id: 'USDT', label: 'Tether', icon: '₮', color: '#26a17b' }
  ]

  return (
    <div className="chain-selector">
      <h2>Select Blockchain</h2>
      <div className="chain-buttons">
        {chains.map((chain) => (
          <button
            key={chain.id}
            className={`chain-btn ${currentChain === chain.id ? 'active' : ''}`}
            onClick={() => onChainChange(chain.id as 'ETH' | 'BTC' | 'USDT')}
            style={{
              borderColor: currentChain === chain.id ? chain.color : '#ddd',
              backgroundColor: currentChain === chain.id ? chain.color : 'white'
            }}
          >
            <span className="chain-icon">{chain.icon}</span>
            <span className="chain-label">{chain.label}</span>
            <span className="chain-id">{chain.id}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChainSelector