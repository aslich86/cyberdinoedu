// src/pages/Course.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Course = ({ match }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`/api/courses/${match.params.id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the course!', error);
      });
  }, [match.params.id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div>
        <h2>Modules</h2>
        {course.modules.map(module => (
          <div key={module._id}>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
