import { resolve } from 'path';
import db from './database/models/index.mjs';

import initBillsController from './database/controllers/bills.mjs';

export default function routes(app) {
  const BillsController = initBillsController(db);
  app.post('/bill', BillsController.postBill);

  // Root route renders Webpack-generated main.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
