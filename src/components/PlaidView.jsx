import React, { useContext, useState, useCallback, useEffect } from "react";
import { Link } from './Link';
import agent from 'superagent-bluebird-promise';



export const PlaidView = () => {
  const [token, setToken] = useState(null);

  const createLinkToken = async () => {
      let response =  await fetch("/api/create_link_token", {method: 'POST'});
      const json = await response.json()
      const {link_token} = json
      localStorage.setItem("link_token", link_token)
    }
  useEffect(() => createLinkToken(), [])
  const onSuccess = useCallback((token, metadata) => {
    console.log('on success called', token, metadata)
    // send token to server
  }, []);

  return (
    <div style={{marginTop:200, textAlign:'center'}}>
      <h3>You are almost there!</h3>
      <Link />
    </div>
  );
};


