
import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import SimpleBottomNavigation from './components/MainNav/MainNav'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Trending from './components/Pages/Trending/Trending'
import Movies from './components/Pages/Movies/Movies'
import Search from './components/Pages/Search/Search'
import Series from './components/Pages/Series/Series'

function App() {
  return (
<BrowserRouter>
  <Header/>
    <div className='app'>
      <Container>
        <Switch>
          <Route path='/' component={Trending} exact/>
          <Route path='/movies' component={Movies}/>
          <Route path='/series' component={Series}/>
          <Route path='/search' component={Search}/>
        </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  )
}

export default App
