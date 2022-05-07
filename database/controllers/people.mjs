export default function initPeopleController(db) {
  const getAllPeople = async (req, res) => {
    try {
      const people = await db.Person.findAll({ where: { billId: req.params.id } });
      if (!people) throw new Error('cannot find people');
      res.send({ people });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  // this function does 2 things :(
  const postPerson = async (req, res) => {
    try {
      const { name, currentBillId } = req.body;
      const newPerson = await db.Person.create({ name, billId: currentBillId });
      if (!newPerson) throw new Error('new person not created');

      const people = await db.Person.findAll({ where: { billId: currentBillId } });
      if (!people) throw new Error('cannot find people');
      res.send({ people });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return {
    getAllPeople, postPerson,
  };
}
