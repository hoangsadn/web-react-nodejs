import express from 'express';
import Order from '../models/orderModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const order = new Order({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    price: req.body.price,
  });
  const newOrder = await order.save();
  if (newOrder) {
    res.send({
      _id: newOrder.id,
      name: newOrder.name,
      email: newOrder.email,
      //isAdmin: newUser.isAdmin,
      //token: getToken(newUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid User Data.' });
  }
});



export default router;