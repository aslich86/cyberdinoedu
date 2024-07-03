// models/material.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  module: { type: Schema.Types.ObjectId, ref: 'Module', required: true },
}, {
  timestamps: true,
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
