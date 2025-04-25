'use client';

import React from 'react';

const CVContent = () => {
  return (
    <div className="w-[100%] h-[10%] flex flex-col justify-between">
      {/* Main content */}
      <div className="w-[100%] h-[20%] justify-center">
        <p className="text-[50px] text-center" style={{ color: 'var(--text-color)' }}>
          <span className="font-light">CV</span>
        </p>
      

        <div>
          <div className="p-4" style={{ color: 'var(--text-color)' }}>
            <h2 className="sub-title text-[#ee920b] font-bold pb-2">Profile</h2>
            <p>
              Artificial Intelligence &amp; Computer Science BSc student at the
              University of Birmingham, entering my third year with a first‑class
              average. I have a deep interest in AI and its potential to transform
              how we interact with technology. I'm eager to learn new techniques
              and gain practical experience in the industry.
            </p>

            <br/>

            {/* Education */}
                <h2 className="sub-title text-[#ee920b] font-bold pb-2">Education</h2>

              <h3
                className="sub-2-title font-bold"
                style={{ marginLeft: 20, marginBottom: '0.2em' }}
              >
                Artificial Intelligence &amp; Computer Science BSc – 79.8 % Avg
              </h3>
              <h4
                className="sub-3-title"
                style={{ marginLeft: 30, marginTop: 0 }}
              >
                University of Birmingham 2022 – 2025
              </h4>
              <br/>
              <div style={{ display: 'flex', marginLeft: 15 }}>
                <div style={{ width: '50%' }}>
                  {/* Programming and Development */}
                  <ul>
                    <li>
                      <h4 className="sub-3-title font-bold">Programming and Development</h4>
                      <ul>
                        <li>
                          <strong>100 %</strong> | Object Oriented Programming
                        </li>
                        <li>
                          <strong>85 %</strong> | Full Stack Application Development
                        </li>
                        <li>
                          <strong>81 %</strong> | Operating Systems &amp; Systems
                          Programming
                        </li>
                        <li>
                          <strong>73 %</strong> | Functional Programming
                        </li>
                        <li>
                          <strong>79 %</strong> | Security &amp; Networks
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <br/>
                  {/* CS Theory */}
                  <ul>
                    <li>
                      <h4 className="sub-3-title font-bold">CS Theory</h4>
                      <ul>
                        <li>
                        <strong>88 %</strong> | Mathematical &amp; Logical
                          Foundations
                        </li>
                        <li>
                        <strong>80 %</strong> | Theories of Computation
                        </li>
                        <li>
                        <strong>67 %</strong> | Data Structures and Algorithms
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div style={{ width: '50%' }}>
                  {/* Artificial Intelligence */}
                  <ul>
                    <li>
                      <h4 className="sub-3-title font-bold">Artificial Intelligence</h4>
                      <ul>
                        <li>
                        <strong>64%</strong> | AI 1 &amp; 2
                        </li>
                        <li>
                          Studying | Neural Computation
                        </li>
                        <li>
                          Studying | Computer Vision
                        </li>
                        <li>
                          Studying | Evolutionary Computation
                        </li>
                        <li>
                          Studying | Natural Language Processing
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <br/>
                  {/* Group Work */}
                  <ul>
                    <li>
                      <h4 className="sub-3-title font-bold">Group Work</h4>
                      <ul>
                        <li>
                        <strong>80 %</strong> | Team Project (Web Development)
                        </li>
                        <li>
                        <strong>81 %</strong> | Software Engineering &amp;
                          Professional Practice
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <br/>
              <br/>

              {/* A‑Levels & GCSEs */}
              <h3
                className="sub-2-title font-bold"
                style={{ marginLeft: 20, marginBottom: '0.2em' }}
              >
                A Level &amp; GCSE
              </h3>
              <h4
                className="sub-3-title"
                style={{ marginLeft: 30, marginTop: 0 }}
              >
                Queens' School 2018 – 2022
              </h4>
              <br/>
              <div style={{ display: 'flex', marginLeft: 15 }}>
                {/* A Levels */}
                <div style={{ width: '33%' }}>
                  <ul>
                    <li>
                      <h4 className="sub-3-title font-bold">A Level</h4>
                      <ul>
                        <li>
                          <strong>A*</strong> | Computer Science
                        </li>
                        <li>
                          <strong>A*</strong> | Physics
                        </li>
                        <li>
                          <strong>A*</strong> | Maths
                        </li>
                        <li>
                          <strong>A</strong> | Further Maths
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* GCSEs */}
                <div style={{ width: '66%' }}>
                  <ul>
                    <li>
                      <h4 className="sub-3-title font-bold">GCSE</h4>
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: '50%' }}>
                          <ul>
                            <li>
                              <strong>9</strong> | Computer Science
                            </li>
                            <li>
                              <strong>9</strong> | Physics
                            </li>
                            <li>
                              <strong>9</strong> | Maths
                            </li>
                            <li>
                              <strong>9</strong> | Chemistry
                            </li>
                            <li>
                              <strong>9</strong> | Biology
                            </li>
                          </ul>
                        </div>
                        <div style={{ width: '50%' }}>
                          <ul>
                            <li>
                              <strong>9</strong> | Further Maths
                            </li>
                            <li>
                              <strong>8</strong> | English Language
                            </li>
                            <li>
                              <strong>8</strong> | English Literature
                            </li>
                            <li>
                              <strong>7</strong> | Spanish
                            </li>
                            <li>
                              <strong>6</strong> | Art
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            {/* Skills & Interests */}
                <h2 className="sub-title text-[#ee920b] font-bold pb-2">Skills &amp; Interests</h2>

              {/* Programming & Interests */}
              <div style={{ display: 'flex', marginLeft: 15 }}>
                <div style={{ width: '45%' }}>
                  <ul>
                    <li>
                      <h4 className="sub-3-title font-bold">Programming languages</h4>
                      <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>HTML / CSS</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div style={{ width: '55%' }}>
                  <ul>
                    <li>
                      <h4 className="sub-3-title font-bold">Interests</h4>
                      <ul>
                        <li>
                          Team‑based competitive games (Overwatch, R6 Siege)
                        </li>
                        <li>Strategy games (Factorio, Slay the Spire)</li>
                        <li>Esports (Overwatch, Apex, Valorant)</li>
                        <li>Anime &amp; Manga</li>
                        <li>Japanese language</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* NN & Technical Knowledge */}
              <div style={{ display: 'flex', marginLeft: 15 }}>
                <div style={{ width: '45%' }}>
                  <ul>
                    <li>
                    <br/>
                      <h4 className="sub-3-title font-bold">Artificial Intelligence</h4>
                      <ul>
                        <li>Convolutional</li>
                        <li>Recurrent</li>
                        <li>
                          Generative Models (Adversarial, Diffusion,
                          Auto‑Regressive)
                        </li>
                        <li>Transformers</li>
                        <li>Language Models / LLMs</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div style={{ width: '55%' }}>
                  <ul>
                    <li>
                      <br/>
                      <h4 className="sub-3-title font-bold">Technical Knowledge</h4>
                      <ul>
                        <li>Relational Databases &amp; SQL</li>
                        <li>Image Edge &amp; Line Detection</li>
                        <li>Language Modelling &amp; Classification</li>
                        <li>Evolutionary Algorithms</li>
                        <li>Object‑Oriented Programming</li>
                        <li>Agile Development</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVContent;