import {Component} from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="add-new-password-main-container">
          <form className="form">
            <h1>Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Password"
              />
            </div>
            <button type="button" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager"
          />
        </div>
        <div className="your-password-container">
          <div>
            <h1>Your Password</h1>
            <div className="passwords-count">
              <p>a</p>
            </div>
            <div className="password-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-icon"
              />
              <input type="search" className="input" placeholder="Search" />
            </div>
            <div>
              <input type="check-box" id="show-password" className="input" />
              <label htmlFor="show-password">Show Password</label>
            </div>
            <li className="saved-password-item">
              <div>
                <p>a</p>
              </div>
              <div>
                <p>s</p>
                <p>a</p>
              </div>
              <button type="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  alt="delete"
                  className="delete-icon"
                />
              </button>
            </li>
          </div>
        </div>
      </div>
    )
  }
}

export default App
