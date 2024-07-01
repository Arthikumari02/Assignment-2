import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class App extends Component {
  state = {
    savePasswordList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    shouldShowPassword: false,
  }

  deleteComment = id => {
    const {savePasswordList} = this.state

    this.setState({
      savePasswordList: savePasswordList.filter(
        savedPassword => savedPassword.id !== id,
      ),
    })
  }

  onAdd = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newPassword = {
      id: v4(),
      websiteInput,
      userNameInput,
      passwordInput,
      initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      savePasswordList: [...prevState.savePasswordList, newPassword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  onChangeWebsiteInput = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onChangeUserNameInput = event => {
    this.setState({
      userNameInput: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({
      shouldShowPassword: !prevState.shouldShowPassword,
    }))
  }

  render() {
    const {
      savePasswordList,
      websiteInput,
      userNameInput,
      passwordInput,
      searchInput,
      shouldShowPassword,
    } = this.state

    const filteredPasswords = savePasswordList.filter(eachSavedPassword =>
      eachSavedPassword.websiteInput
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="add-new-password-main-container">
          <form className="form" onSubmit={this.onAdd}>
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
                value={websiteInput}
                onChange={this.onChangeWebsiteInput}
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
                value={userNameInput}
                onChange={this.onChangeUserNameInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={passwordInput}
                onChange={this.onChangePasswordInput}
              />
            </div>
            <button type="submit" className="add-button">
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
          <div className="your-password-header">
            <div>
              <h1>Your Passwords</h1>
              <div className="passwords-count">
                <p>{savePasswordList.length}</p>
              </div>
            </div>
            <div className="password-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-input-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="show-password-container">
            <input
              type="checkbox"
              id="show-password"
              className="check-box"
              checked={shouldShowPassword}
              onChange={this.onToggleShowPassword}
            />
            <label htmlFor="show-password">Show Passwords</label>
          </div>
          {savePasswordList.length > 0 ? (
            <ul className="saved-passwords-list-container">
              {filteredPasswords.length > 0 ? (
                filteredPasswords.map(eachSavedPassword => (
                  <li
                    className="saved-password-item"
                    key={eachSavedPassword.id}
                  >
                    <div
                      className={
                        eachSavedPassword.initialBackgroundColorClassName
                      }
                    >
                      <p className="initial-text">
                        {eachSavedPassword.userNameInput[0].toUpperCase()}
                      </p>
                    </div>
                    <div className="password-details">
                      <p className="website">
                        {eachSavedPassword.websiteInput}
                      </p>
                      <p className="userName">
                        {eachSavedPassword.userNameInput}
                      </p>
                      {shouldShowPassword ? (
                        <p className="password">
                          {eachSavedPassword.passwordInput}
                        </p>
                      ) : (
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                          alt="stars"
                          className="stars"
                        />
                      )}
                    </div>
                    <button
                      type="button"
                      className="delete-button"
                      data-testid="delete"
                      onClick={() => this.deleteComment(eachSavedPassword.id)}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                        alt="delete"
                        className="delete-icon"
                      />
                    </button>
                  </li>
                ))
              ) : (
                <div className="no-passwords-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-passwords"
                  />
                  <p>No Passwords</p>
                </div>
              )}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
