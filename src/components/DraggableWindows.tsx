"use client"

import React, { useState, useEffect } from 'react';

import { DndContext } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";

import HomeContent from "./HomeContent";
import CVContent from './CVContent';
import ProjectContent from './ProjectContent';

// Defines Actual UI element, given the props
const Window = (props: { id: string, title: string, height: number, width: number, position: { x: number; y: number }; content: React.ReactNode; onClose: () => void; }) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });

    const style: React.CSSProperties = {
        position: "absolute", 
        transform: `translate(${props.position.x + (transform?.x || 0)}px, ${props.position.y + (transform?.y || 0)}px)`,
    };

    return (
        <div  style={style}  className="flex flex-col gap-[32px] pl-30 pt-10 row-start-2 z-30">
            <div className='flex flex-col gap-[32px] pl-30 pt-10 row-start-2 z-30'>
                <div className='min-w-[600px] min-h-[350px] rounded-lg shadow-[0px_8px_0_rgba(0,0,0,0.2)] border-3 flex flex-col justify-between'
                style={{ height: `${props.height}vh`, width: `${props.width}vh`, background: 'var(--windowback-color)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}>
                    
                    {/* Top Bar */}
                    <div ref={setNodeRef} {...listeners} {...attributes} className="w-[100%] min-h-[5vh] font-mono rounded-tr-md rounded-tl-md justify-between flex items-center border-b-3 shadow-[0px_3px_0_rgba(0,0,0,0.2)] pointer-events-auto z-20"
                    style={{background: 'var(--windowtop-color)', borderColor: 'var(--border-color)' }} >
                        <p className="pl-4 text-[20px]">{props.title}</p>
                        <button
                            onClick={props.onClose}
                            onPointerDown={(e) => e.stopPropagation()}
                            className="pr-4 text-[20px] font-semibold hover:scale-90 active:scale-70 transition-transform duration-100 z-100">[x]
                        </button>
                    </div>
                    
                    {/* Content */}
                    <div className="window rounded-bl-lg rounded-br-lg pointer-events-auto overflow-auto" style={{ flex: 1 }} >
                        {props.content}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};



const DraggableWindows = () => {

    // Defines a Windows Props, that can then be turned into an actual UI Window
    type WindowDef = {
        id: string;
        title: string;
        height: number;
        width: number;
        position: { x: number; y: number };
        content: () => React.ReactNode;
    }

    // <Window title="id" height={50} content={}/>

    const [windows, setWindows] = useState<WindowDef[]>([
        {
            id: 'home',
            title: 'home',
            height: 50,
            width: 40,
            position: { x: 0, y: 0 },
            content: () => <HomeContent onOpenCV={handleAddCV} onOpenProject={handleAddProject}/>
        }
    ]);

    const handleDragStart = () => {
        document.body.classList.add('no-scroll');
      };

    const handleDragEnd = (event: any) => {
        const { delta } = event;
        const id = event.active.id;
    
        setWindows((prevWindows) =>
            prevWindows.map((window) =>
                window.id === id? {
                  ...window,
                  position: { x: window.position.x + delta.x, y: window.position.y + delta.y },
                }
                : window
        ));
    };

    const handleCloseWindow = (id: string) => {
        console.log(`Closing window with id: ${id}`);

        const soundEffect = new Audio("/zapsplat_click.mp3");
        soundEffect.volume = 0.6;
        soundEffect.play();

        setWindows((prevWindows) => prevWindows.filter((window) => window.id !== id));
    };

    const handleAddCV = () => {
        console.log(`Adding CV window`);

        const soundEffect = new Audio("/zapsplat_click.mp3");
        soundEffect.volume = 0.6;
        soundEffect.play();

        const newWindow = {
            id: 'cv',
            title: 'cv',
            height: 80,
            width: 110,
            position: { x: 50, y: 50 },
            content: () => <CVContent />
        };
    
        setWindows((prevWindows) => {
            // Optional: avoid duplicates
            if (prevWindows.find((win) => win.id === newWindow.id)) {
                return prevWindows;
            }
            return [...prevWindows, newWindow];
        });
    }

    const handleAddProject = () => {
        console.log(`Adding Project window`);

        const soundEffect = new Audio("/zapsplat_click.mp3");
        soundEffect.volume = 0.6;
        soundEffect.play();

        const newWindow = {
            id: 'projects',
            title: 'projects',
            height: 60,
            width: 90,
            position: { x: 50, y: 50 },
            content: () => <ProjectContent />
        };
    
        setWindows((prevWindows) => {
            // Optional: avoid duplicates
            if (prevWindows.find((win) => win.id === newWindow.id)) {
                return prevWindows;
            }
            return [...prevWindows, newWindow];
        });
    }


    return (
        <div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} autoScroll={false}>
        {windows.map((window) => (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            height={window.height}
            width={window.width}
            position={window.position}
            content={window.content()}
            onClose={() => handleCloseWindow(window.id)}
          />
        ))}
      </DndContext>
    </div>
    );
}

export default DraggableWindows;