const db = require('../config/database');

exports.create = async (req, res) => {
  const { title, completed = false } = req.body;
  const response = await db.query(
    'INSERT INTO todos ("title", "completed") VALUES ($1, $2)',
    [title, completed],
  );

  res.status(201).send({
    data: { title, completed },
  });
};

exports.listAll = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM todos ORDER BY title ASC',
  );
  res.status(200).send(response.rows);
};

exports.findById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query(
    'SELECT * FROM todos WHERE id = $1',
    [id],
  );
  res.status(200).send(response.rows);
};

exports.updateById = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const response = await db.query(
    'UPDATE todos SET title = $1, completed = $2 WHERE id = $3',
    [title, completed, id],
  );

  res.status(200).send({ message: 'Updated Successfully!' });
};

exports.deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM todos WHERE id = $1', [
    id,
  ]);

  res.status(200).send({ message: 'deleted successfully!', id });
};
