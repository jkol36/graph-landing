import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import { Apply } from './components/apply'
import { ConfirmEmailView } from './components/ConfirmEmail'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { PlaidView } from './components/PlaidView'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    console.log('apply', Apply)
    setLandingPageData(JsonData)
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/apply'> 
          <Navigation />
          <Apply />
        </Route>
      </Switch>
      <Switch>
        <Route path='/home'>
          <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Contact data={landingPageData.Contact} />
          </div>
        </Route>
      </Switch>
      <Switch> 
        <Route path='/confirm'> 
          <Navigation />
          <ConfirmEmailView />
        </Route>
      </Switch>
      <Switch> 
        <Route path='/banking'> 
          <Navigation />
          <PlaidView />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
