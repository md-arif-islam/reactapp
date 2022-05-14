import React from 'react';

export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    console.log(style);
    return (
        <div>
            <h1 style={style} onMouseOver={incrementCount}>
                Hovered {count} time
            </h1>
            <button type="button" onClick={switchTheme}>
                Shitch Theme
            </button>
        </div>
    );
}
