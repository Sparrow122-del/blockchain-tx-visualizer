import './TransactionEditor.css'

interface TransactionEditorProps {
  transaction: any
  chain: 'ETH' | 'BTC' | 'USDT'
  onTransactionChange: (transaction: any) => void
}

function TransactionEditor({ transaction, chain, onTransactionChange }: TransactionEditorProps) {
  const handleChange = (field: string, value: string) => {
    onTransactionChange({
      ...transaction,
      [field]: value
    })
  }

  const fields = [
    { key: 'sender', label: 'Sender Address', placeholder: 'Enter sender address' },
    { key: 'receiver', label: 'Receiver Address', placeholder: 'Enter receiver address' },
    { key: 'amount', label: 'Amount', placeholder: 'Enter amount' },
    ...(chain === 'ETH' || chain === 'USDT' ? [
      { key: 'gas', label: 'Gas Limit', placeholder: 'Enter gas limit' },
      { key: 'gasPrice', label: 'Gas Price (Gwei)', placeholder: 'Enter gas price' },
      { key: 'nonce', label: 'Nonce', placeholder: 'Enter nonce' }
    ] : []),
    ...(chain === 'BTC' ? [
      { key: 'confirmations', label: 'Confirmations', placeholder: 'Enter confirmations' },
      { key: 'fee', label: 'Transaction Fee', placeholder: 'Enter fee' }
    ] : [])
  ]

  return (
    <div className="transaction-editor">
      <h2>Edit Transaction</h2>
      <div className="editor-fields">
        {fields.map((field) => (
          <div key={field.key} className="field-group">
            <label htmlFor={field.key}>{field.label}</label>
            <input
              id={field.key}
              type="text"
              value={transaction[field.key] || ''}
              onChange={(e) => handleChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className="field-input"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionEditor