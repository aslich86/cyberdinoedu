// models/course.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modules: [{ type: Schema.Types.ObjectId, ref: 'Module' }], // Contoh relasi dengan module
  instructors: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Contoh relasi dengan pengguna
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
