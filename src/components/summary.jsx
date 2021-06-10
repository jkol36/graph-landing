import React, { useEffect, useState } from 'react';

export const Summary = () => {
	const [transactions, setTransactions] = useState([])
	const [accounts, setAccounts] = useState([])
	const [identities, setIdentity] = useState([])
	const [balance, setBalance] = useState(0)
	const getTransactions = async () => {
		const response = await fetch('/api/transactions/', {method: 'GET'})
		console.log(response)
		const json = await response.json()
		const {transactions} = json
		setTransactions(transactions)
		console.log('got transactions', transactions)
	}

	const getBalance = accounts => {
		return accounts.map(account => account.balances.available).reduce((a, b) => a+b)
	}
	const getAccountAndRoutingNumbers = async () => {
		const response = await fetch('/api/accounts', {method: 'GET'})
		const json = await response.json()
		console.log('accounts', json)
		console.log('balance', getBalance(json.accounts))
		setBalance(getBalance(json.accounts))
		setAccounts(json.accounts)
	}
	useEffect(() => {
		getTransactions()
		getAccountAndRoutingNumbers()
		getIdentity()
	}, [])

	const getIdentity =  async () => {
		const response = await fetch('/api/identity', {method: 'GET'})
		const json = await response.json()
		console.log('identity', json)
		setIdentity(json.identity)
	}
	return (
		<div className='row'>
			<h1 style={{marginTop:200, textAlign:'center'}}> 
				Number of transactions: {transactions.length}
			</h1>
			<h1 style={{textAlign:'center'}}> 
				Number of accounts {accounts.length}
			</h1>
			<h1 style={{textAlign:'center'}}> Number of identities {identities.length} </h1>
			<h1 style={{textAlign:'center'}}> Your total balance accross all accounts {balance} </h1>
		</div>
	)
}