import { resolve } from 'path';
import db from './database/models/index.mjs';

import initBillsController from './database/controllers/bills.mjs';
import initPeopleController from './database/controllers/people.mjs';

export default function routes(app) {
  const BillsController = initBillsController(db);
  const PeopleController = initPeopleController(db);

  app.post('/bill', BillsController.postBill);
  app.get('/bills', BillsController.getAllBills);
  app.get('/bill/:id', BillsController.getBillFromId);

  app.get('/person/:id', PeopleController.getAllPeople);

  // Root route renders Webpack-generated main.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
