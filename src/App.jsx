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
import { Summary } from './components/summary'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {BrowserRouter as Router, useHistory, Switch, Route} from 'react-router-dom'
import { PlaidView } from './components/PlaidView'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  //we store the landingpagedata in a variable and setlandingpage data is the name of the function we'll use to update the landing page data

  const [landingPageData, setLandingPageData] = useState({})
  const history = useHistory()
  useEffect(() => {
    console.log('apply', Apply)
    setLandingPageData(JsonData)
     window.addEventListener('storage', () => {
      console.log('change')
      if(localStorage.getItem('accessToken') !== undefined) {
        history.push('/summary')
      }
    })
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
      <Switch> 
        <Route path='/summary'> 
          <Navigation />
          <Summary />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
