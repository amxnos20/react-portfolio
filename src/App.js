import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import PortfolioScreen from './components/pages/PortfolioScreen'
import AboutScreen from './components/pages/AboutScreen'
import ContactScreen from './components/pages/ContactScreen'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/contact' component={ContactScreen} />
          <Route exact path='/about' component={AboutScreen} />
          <Route exact path='/portfolio' component={PortfolioScreen} />
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
