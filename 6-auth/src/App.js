import './App.css'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from './routes/Main.js'
import About from './routes/About.js'
import Chats from './routes/Chats.js'

import { store } from './redux/store'

import AuthButton from './components/AuthButton'
import Auth0ProviderWithHistory from './components/Auth0ProviderWithHistory'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <div className="container">
            <div>
              <AuthButton />
            </div>

            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">
                  Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/chats"
                >
                  Чаты
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  О компании
                </NavLink>
              </li>
            </ul>
            <Switch>
              <Route path="/about">
                <Main />
              </Route>
              <Route path="/chats/:chatId?">
                <Chats />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </Provider>
  )
}

export default App
