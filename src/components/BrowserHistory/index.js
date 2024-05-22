import {useState} from 'react'
import './index.css'

const BrowserHistory = ({initialHistoryList}) => {
  const [searchInput, setSearchInput] = useState('')
  const [historyList, setHistoryList] = useState(initialHistoryList)

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const onDeleteHistoryItem = id => {
    const updatedHistoryList = historyList.filter(item => item.id !== id)
    setHistoryList(updatedHistoryList)
  }

  const filteredHistoryList = historyList.filter(item =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="browser-history-container">
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="search"
            placeholder="Search history"
            className="search-input"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <ul className="history-list">
        {filteredHistoryList.length === 0 ? (
          <p className="empty-history">There is no history to show</p>
        ) : (
          filteredHistoryList.map(historyItem => (
            <li key={historyItem.id} className="history-item">
              <div className="history-info">
                <img
                  src={historyItem.logoUrl}
                  alt="domain logo"
                  className="domain-logo"
                />
                <div className="info">
                  <p className="title">{historyItem.title}</p>
                  <p className="domain-url">{historyItem.domainUrl}</p>
                  <p className="time-accessed">
                    {historyItem.timeAccessed}
                  </p>{' '}
                  {/* Added this line */}
                </div>
              </div>
              <button
                type="button"
                className="delete-button"
                onClick={() => onDeleteHistoryItem(historyItem.id)}
                data-testid="delete"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default BrowserHistory
