export default function initBillsController(db) {
  const postBill = async (req, res) => {
    try {
      const { name, total } = req.body;
      const newBill = await db.Bill.create({ name, total });
      if (!newBill) throw new Error('new bill not created');
      res.send({ newBill });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return {
    postBill,
  };
}
