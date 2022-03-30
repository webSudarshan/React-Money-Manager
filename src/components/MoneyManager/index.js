import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expense: 0,
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  updateTitle = e => {
    this.setState({title: e.target.value})
  }

  updateAmount = e => {
    this.setState({amount: e.target.value})
  }

  updateType = e => {
    this.setState({type: e.target.value})
  }

  addTransaction = e => {
    e.preventDefault()
    const {title, amount, type} = this.state
    if (title !== '' && amount !== '') {
      if (type === 'INCOME') {
        this.setState(prevState => ({
          balance: prevState.balance + parseInt(amount),
          income: prevState.income + parseInt(amount),
        }))
      } else {
        this.setState(prevState => ({
          balance: prevState.balance - parseInt(amount),
          expense: prevState.expense + parseInt(amount),
        }))
      }
      const transaction = {
        id: uuidv4(),
        title,
        amount,
        type,
      }
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, transaction],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
      }))
    }
  }

  removeTransaction = id => {
    const {transactionList} = this.state
    const transactionItem = transactionList.filter(
      eachItem => eachItem.id === id,
    )
    const {amount, type} = transactionItem[0]
    if (type === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        income: prevState.income - parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        expense: prevState.expense - parseInt(amount),
      }))
    }
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {
      balance,
      income,
      expense,
      title,
      amount,
      type,
      transactionList,
    } = this.state
    return (
      <div className="container">
        <div className="name-card">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails Balance={balance} Income={income} Expense={expense} />
        <div className="btm-container">
          <form onSubmit={this.addTransaction}>
            <h2>Add Transaction</h2>
            <label htmlFor="titleInput">TITLE</label>
            <br />
            <input
              type="text"
              placeholder="TITLE"
              id="titleInput"
              onChange={this.updateTitle}
              value={title}
            />
            <br />
            <label htmlFor="amountInput">AMOUNT</label>
            <br />
            <input
              type="text"
              placeholder="AMOUNT"
              id="amountInput"
              onChange={this.updateAmount}
              value={amount}
            />
            <br />
            <label htmlFor="titleInput">TYPE</label>
            <br />
            <select value={type} onChange={this.updateType}>
              <option value={transactionTypeOptions[0].optionId}>
                {transactionTypeOptions[0].displayText}
              </option>
              <option value={transactionTypeOptions[1].optionId}>
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <br />
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h2>History</h2>
            <div className="column-names">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul className="history-list">
              {transactionList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  transaction={eachItem}
                  onDelete={this.removeTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
