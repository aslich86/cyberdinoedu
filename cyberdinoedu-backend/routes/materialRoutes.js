// routes/materialRoutes.js

const express = require('express');
const router = express.Router();
const Material = require('../models/material.model');

// Mendapatkan semua materi
router.get('/', async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Membuat materi baru
router.post('/', async (req, res) => {
  const material = new Material({
    title: req.body.title,
    content: req.body.content,
    module: req.body.module,
  });

  try {
    const newMaterial = await material.save();
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
