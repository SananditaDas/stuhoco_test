
import database from '../models';

export async function ping(req, res) {
  res.send({ message: "Pong" });
}


export async function getAll(req, res) {
  try {
    const users = await database.User.findAll();
    return res.send({ message: users });
  }
  catch (err) {
    throw err;
  }
}
