'use client';

import React from 'react';
import Wavify from 'react-wavify';

// { onOpenCV, onOpenProject }: { onOpenCV: () => void; onOpenProject: () => void }
export default function HomeContent({ onOpenCV, onOpenProject }: { onOpenCV: () => void; onOpenProject: () => void }) {
  return (
    <div className="h-full relative">
      <div className="flex flex-col">
        <div className="pointer-events-none">
          <p className="text-black text-[65px] pt-17 text-center pointer-events-none">
            <span className="font-light pointer-events-none" style={{ color: 'var(--text-color)' }}>hi!</span>
            <span className="text-[#ee920b] font-semibold pointer-events-none"> i’m rhys</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <Wavify
          fill="rgba(255,210,48, 0.8)"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.2,
            points: 3,
          }}
        />
      </div>

      <div className="absolute bottom-0 pb-5 w-full flex flex-row justify-center gap-15">

      <div className='hover:scale-90 active:scale-70 transition-transform duration-100'>
        <button onClick={onOpenCV} className="flex flex-col items-center font-semibold cursor-pointer font-mono" style={{ color: 'var(--text-color)' }}>
          <img src="/file.svg" className="w-12 h-12 mb-2" />
          <span className='pt-2'>CV</span>
        </button>
      </div>

      <div className='hover:scale-90 active:scale-70 transition-transform duration-100'>
        <button onClick={onOpenProject} className="flex flex-col items-center font-semibold cursor-pointer font-mono" style={{ color: 'var(--text-color)' }}>
          <img src="/file.svg"className="w-12 h-12 mb-2" />
          <span className='pt-2'>Projects</span>
        </button>
      </div>

      <div className='hover:scale-90 active:scale-70 transition-transform duration-100'>
        <a
          href="https://www.linkedin.com/in/rhys-d-harvey/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center font-semibold cursor-pointer font-mono"
          style={{ color: 'var(--text-color)' }}
        >
          <div style={{
              backgroundImage: 'var(--linkedin-icon)',
              width: '48px',
              height: '48px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <span className='pt-2'>LinkedIn</span>
        </a>
      </div>

      <div className='hover:scale-90 active:scale-70 transition-transform duration-100'>
        <a
          href="https://github.com/PieceOfRice"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center font-semibold cursor-pointer font-mono"
          style={{ color: 'var(--text-color)' }}
        >
          <div style={{
              backgroundImage: 'var(--github-icon)',
              width: '48px',
              height: '48px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <span className='pt-2'>GitHub</span>
        </a>
      </div>

      </div>
    </div>
  );
}