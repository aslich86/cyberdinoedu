// routes/moduleRoutes.js

const express = require('express');
const router = express.Router();
const Module = require('../models/module.model');

// Mendapatkan semua modul
router.get('/', async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Membuat modul baru
router.post('/', async (req, res) => {
  const module = new Module({
    title: req.body.title,
    description: req.body.description,
    course: req.body.course,
  });

  try {
    const newModule = await module.save();
    res.status(201).json(newModule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
