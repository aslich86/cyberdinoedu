// models/module.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  materials: [{ type: Schema.Types.ObjectId, ref: 'Material' }],
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
}, {
  timestamps: true,
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
