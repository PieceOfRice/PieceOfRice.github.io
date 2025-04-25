import { useState, useEffect } from 'react';

const ThemeToggle = () => {

    const [ isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        const soundEffect = new Audio("/zapsplat_click.mp3");
        soundEffect.volume = 0.6;
        soundEffect.play();
        setIsDarkMode((prevMode) => !prevMode)
    };

    

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        
    }, [isDarkMode]);

    return (
        <button
        className="p-2 bg-transparent border-none w-13 h-13 flex items-center justify-center z-10 hover:scale-90 active:scale-10 transition-transform duration-200"
        onClick={toggleTheme}
        >
        <img src={isDarkMode ? "/sun.svg" : "/moon.svg"} alt="Toggle Theme" className="w-12 h-12" />
        </button>
    );
};

export default ThemeToggle;