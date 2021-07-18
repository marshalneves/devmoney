import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {id: 1, title: 'website', type: 'deposit', category:'dev', amount: 1500, createdAt: new Date('2021-02-02 09:00:00')},
        {id: 2, title: 'rent', type: 'withdraw', category:'rents', amount: 200, createdAt: new Date('2021-02-02 09:00:00')},
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const dataRequest = JSON.parse(request.requestBody);
      const data = {...dataRequest, createdAt: new Date() }
      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);