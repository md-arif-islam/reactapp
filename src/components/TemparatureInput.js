import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export default function TemparatureInput({ temparature, scale, onTempatureChange }) {
    return (
        <fieldset>
            <legend>Enter Temparature in {scaleNames[scale]}: </legend>
            <input type="text" value={temparature} onChange={(e) => onTempatureChange(e, scale)} />
        </fieldset>
    );
}
