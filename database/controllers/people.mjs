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

  return {
    getAllPeople,
  };
}
