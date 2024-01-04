import './index.css'

const BrowserHistory = props => {
  const {historyList, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const DeleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="logo-container">
        <div className="para-container">
          <p className="time"> {timeAccessed} </p>
        </div>
        <div className="row">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="row1">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        data-testid="delete"
        className="button"
        type="button"
        onClick={DeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
