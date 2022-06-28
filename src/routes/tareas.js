const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const task = require('../models/task');

router.get('/',  async (req, res) => {
  const tasks = await  task.find();
  res.json(tasks);
});

router.post('/', async (req, res) =>{
    const Task = new task(req.body);
    await Task.save();
    res.json({ 
        status: 'tarea guardada'});
});

router.put('/:id', async (req, res) =>{
    await task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'tarea actualizada'
    });
});

router.delete('/:id', async (req, res) =>{
    await task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'tarea borrada'
    });
});
module.exports = router;