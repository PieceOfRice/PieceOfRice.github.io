"use client"
import Wavify from 'react-wavify';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';


const Base = () => {
  
  return (

    <div>
      <div className="foreground relative z-10">
        <ThemeToggle/>
      </div>

      <div className="backgroundWaves">

        <Wavify
        fill="rgba(255,210,48, 0.25)"
        paused={false}
        options={{
          height: 150,
          amplitude: 10,
          speed: 0.15,
          points: 3,
        }}
        className="absolute bottom-0 w-full h-full"
        />


        <Wavify
        fill="rgba(255,210,48, 0.5)"
        paused={false}
        options={{
          height: 300,
          amplitude: 15,
          speed: 0.15,
          points: 4,
        }}
        className="absolute bottom-0 w-full h-full z-0"
        />

        <Wavify
            fill="rgba(255,210,48, 1)"
            paused={false}
            options={{
              height: 500,
              amplitude: 30,
              speed: 0.15,
              points: 5,
            }}
            className="absolute bottom-0 w-full h-full z-1"
            />

      </div>
    </div>
  );
}


export default Base;