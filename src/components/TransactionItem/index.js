import './index.css'

const TransactionItem = props => {
  const {transaction, onDelete} = props
  const {id, title, amount, type} = transaction

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="history-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="del-button"
        onClick={onClickDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
