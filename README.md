# 🔗 Educational Blockchain Transaction Visualizer

> **⚠️ Educational Purpose Only** - This is a mock transaction visualizer for learning blockchain concepts. Not connected to real blockchains.

## 📚 What is This?

This is an educational tool designed to help you understand how blockchain transactions work across different networks:

- **Ethereum (ETH)** - Smart contract blockchain with gas fees
- **Bitcoin (BTC)** - UTXO-based cryptocurrency
- **Tether (USDT)** - ERC-20 stablecoin token

## 🎯 Features

✅ **Interactive Transaction Editing** - Modify transaction fields to see how data changes
✅ **Multi-Chain Support** - Switch between ETH, BTC, and USDT
✅ **Real-like UI** - Professional blockchain explorer styling
✅ **Educational Explanations** - Learn what each field means
✅ **Copy Functionality** - Copy transaction hashes and links
✅ **Mock Data** - Realistic-looking but educational transaction data

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sparrow122-del/blockchain-tx-visualizer.git
cd blockchain-tx-visualizer

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will automatically open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
blockchain-tx-visualizer/
├── src/
│   ├── components/
│   │   ├── ChainSelector.tsx      # Chain selection UI
│   │   ├── TransactionEditor.tsx  # Edit transaction fields
│   │   └── TransactionDisplay.tsx # Display formatted transactions
│   ├── styles/
│   │   ├── ChainSelector.css
│   │   ├── TransactionEditor.css
│   │   └── TransactionDisplay.css
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # App styles
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎓 Learning with This Tool

### Ethereum Transactions
Learn about:
- **Gas Price** - Cost per unit of computation
- **Gas Limit** - Maximum gas allowed for the transaction
- **Gas Used** - Actual gas consumed
- **Nonce** - Transaction sequence number

### Bitcoin Transactions
Learn about:
- **Confirmations** - Number of blocks confirming the transaction
- **UTXO Model** - How Bitcoin manages inputs/outputs
- **Transaction Size** - Different from value transferred

### Tether (USDT)
Learn about:
- **Token Standards** - ERC-20 format on Ethereum
- **Smart Contract Interaction** - How tokens transfer
- **Token Decimals** - Value representation

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Lucide React** - Icons
- **CSS3** - Custom styling

## 📖 How to Use

1. **Select a Blockchain** - Click on ETH, BTC, or USDT
2. **View Transaction Data** - See the formatted transaction on the right
3. **Edit Fields** - Change sender, receiver, amount, fees
4. **Copy Links** - Use the copy button to copy transaction hashes
5. **Learn** - Read the educational explanations at the bottom

## ⚠️ Important Notes

**This tool is for educational purposes only:**
- ❌ Not connected to real blockchain networks
- ❌ Mock data only - no real transactions
- ❌ Transaction links are simulated
- ✅ Perfect for learning blockchain concepts
- ✅ Great for educational presentations
- ✅ Helpful for understanding transaction structure

## 🔒 Privacy & Security

This application:
- 🔒 Runs entirely in your browser
- 🔒 No data sent to any server
- 🔒 No real blockchain connections
- 🔒 Pure frontend mock data

## 🤝 Contributing

Have ideas for educational improvements? Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📚 Educational Resources

### Ethereum
- [Ethereum Docs - Transactions](https://ethereum.org/en/developers/docs/transactions/)
- [Gas Explained](https://ethereum.org/en/developers/docs/gas/)

### Bitcoin
- [Bitcoin.org - How Bitcoin Works](https://bitcoin.org/en/how-it-works)
- [UTXO Model](https://en.bitcoin.it/wiki/Transaction)

### Blockchain Basics
- [Blockchain Fundamentals](https://www.coursera.org/learn/blockchain-basics)
- [Cryptocurrency Explained](https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-what-is-it)

## 📄 License

MIT License - Feel free to use this for educational purposes

## 🙏 Disclaimer

This is an educational tool created for learning purposes. It is not affiliated with, endorsed by, or connected to:
- Ethereum Foundation
- Bitcoin Project
- Tether Limited
- Or any blockchain networks

This tool demonstrates transaction structure and data formatting only. All data is mock/simulated.

---

**Happy Learning! 🚀**
