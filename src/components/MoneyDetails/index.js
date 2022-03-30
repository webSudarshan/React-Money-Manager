import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, Expense} = props

  return (
    <ul className="details-container">
      <li className="balance detail-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="balance-text">Your Balance</p>
          <p testid="balanceAmount">Rs {Balance}</p>
        </div>
      </li>
      <li className="income detail-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
        />
        <div>
          <p className="balance-text">Your Income</p>
          <p testid="incomeAmount">Rs {Income}</p>
        </div>
      </li>
      <li className="expense detail-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="balance-text">Your Expenses</p>
          <p testid="expensesAmount">Rs {Expense}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
