'use client';

import React from 'react';
import Wavify from 'react-wavify';

const ProjectContent = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-between">
      {/* Main content */}
      <div className="w-[100%] h-[20%] justify-center">
        <p className=" text-[50px] text-center" style={{ color: 'var(--text-color)' }}>
          <span className="font-light">Projects</span>
        </p>


        {/* Projects */}
        <div className="h-[400%] overflow-y-auto pr-4">
          <div className=" p-2" style={{ color: 'var(--text-color)' }}>

        {/* Mario Evo */}
        <h3
          className="sub-2-title font-bold"
          style={{ marginLeft: 20, marginBottom: '0.2em' }}
        >
          Exploring NeuroEvolution in Super Mario Bros.
        </h3>
        <p style={{ marginLeft: 40, marginTop: 0 }}>
          Using PyTorch and OpenAI Gym to experiment with Evolutionary
          Algorithms that train a Neural Network to beat every level of the
          original Super Mario Bros.
          <br />
          <br />
        </p>

        {/* Overwatch Tracker */}
        <h3
          className="sub-2-title font-bold"
          style={{ marginLeft: 20, marginBottom: '0.2em' }}
        >
          Overwatch Tournament Tracker (Uni Team Project)
        </h3>
        <p style={{ marginLeft: 40, marginTop: 0 }}>
          Full‑stack web app built with Angular and Spring Boot (JHipster
          stack). Users can create/join teams, register for tournaments and
          record match results.
          <br />
          <br />
        </p>

        {/* Revision Timetable */}
        <h3
          className="sub-2-title font-bold"
          style={{ marginLeft: 20, marginBottom: '0.2em' }}
        >
          Personalised Revision Timetable (A Level Project)
        </h3>
        <p style={{ marginLeft: 40, marginTop: 0 }}>
          Generates a dynamic timetable that updates based on the user’s
          performance in each subject. Includes an interactive custom GUI.
        </p>
      </div>

      </div>
      </div>
    </div>
  );
};

export default ProjectContent;