var express = require('express');
var router = express.Router();
const ObjectId = require('mongodb').ObjectID;

//Pravimo 3 putanje

//Get putanja za zakaze u bazi
router.get('/appointments', (req, res, next)=>{
  req.collection.fin({})
  .toArray()
  .then(results => res.jason(results))
  .catch(erros => res.send(error));
});

//Host endpoint za kreiranje novih sastanaka
router.post('/appointments', (req, res, next) => {
  const { appointmentDate, name, email} = req.body;
  if (!appointmentDate || !name || !email) {
    return res.status(400).json({
      message: 'Appointment date, name and email are required',
    });
  }

  const payload = { appointmentDate, name, email};
  req.collection.insertOne(payload)
    .then(result => res.json(result))
    .catch(error => res.send(error));
});

//Kada kliknemo na otkazi u Admin panelu zelimo da koristimo Delete endpoint koji brise podatke iz baze podataka

router.delete('/appointments/:id', (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);

  req.collection.deleteOne({ _id })
    .then(result => res.json(result))
    .catch(error => res.send(error));
});

module.exports = router;
