import React, { useEffect, useContext } from "react";
import { usePlaidLink } from "react-plaid-link";
import Button from "plaid-threads/Button";


export const Link = () => {
  const linkToken  = localStorage.getItem('link_token')

  const onSuccess = React.useCallback(
    (public_token) => {
      // send public_token to server
      const setToken = async () => {
        const response = await fetch("/api/set_access_token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: `public_token=${public_token}`,
        });
        if (!response.ok) {

          console.log('no good')
          return;
        }
        const data = await response.json();
        console.log('link data', data)
        localStorage.setItem('state', {
            itemId: data.item_id,
            accessToken: data.access_token,
            isItemAccess: true,
          },)
      };
      setToken();
    },
    []
  );

  let isOauth = false;
  const config = {
    token: linkToken,
    onSuccess,
  };

  if (window.location.href.includes("?oauth_state_id=")) {
    // TODO: figure out how to delete this ts-ignore
    // @ts-ignore
    config.receivedRedirectUri = window.location.href;
    isOauth = true;
  }

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (isOauth && ready) {
      open();
    }
  }, [ready, open, isOauth]);

  return (
    <Button type="button" large onClick={() => open()} disabled={!ready}>
      Connect to bank
    </Button>
  );
};
