import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

export const ConfirmEmailView = (props) => {
  const history = useHistory()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('new user object', user)
      const {emailVerified} = user
      console.log('emailVerified', emailVerified)
      if(emailVerified) {
        history.push('/banking')
      }
    })
  }, [])


  const checkForEmailConfirmation = () => {
    const user = firebase.auth().currentUser.reload()
    console.log('new user', user)
    const {emailVerified} = firebase.auth().currentUser
    console.log(emailVerified)
    if(emailVerified) {
      history.push('/banking')
    }

  }

  return (
    <div style={{marginTop: 300}}>
      <div id='confirm_email'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='section-title'>
                <h2 style={{textAlign: 'center'}}>Please confirm your email, thanks</h2>
              </div>
            </div>
            <div className='row'> 
              <button onClick={() => checkForEmailConfirmation()}> I confirmed my email </button>
            </div>
          </div>
        </div>
      </div>
          
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Graph LLC{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
