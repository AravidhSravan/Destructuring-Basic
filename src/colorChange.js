import React, { useState } from "react";
import Select from "react-select";

function ChangeColor() {
    var colors = [
        {
            option: 1,
            label: 'Lime',
            option: 'lime'
        },
        {
            option: 2,
            label: 'Lavender',
            option: 'lavender'
        },
        {
            option: 3,
            label: 'Crimson',
            option: 'crimson'
        },
        {
            option: 4,
            label: 'Darkblue',
            option: 'darkblue'
        },
        {
            option: 5,
            label: 'Teal',
            option: 'teal'
        },
        {
            option: 6,
            label: 'Rebecca Purple',
            option: 'rebeccapurple'
        },
        {
            option: 7,
            label: 'Ghost White',
            option: 'ghostwhite'
        },
        {
            option: 8,
            label: 'Aqua Marine',
            option: 'aquamarine'
        },
        {
            option: 9,
            label: 'Alice Blue',
            option: 'aliceblue'
        },
    ];
    var [color, colorValue] = useState(colors.option);
    var colorHandler = each => {
        colorValue(each.option)
    }

    return (
        <div>
            <h1 className="tittle"> Color Changer </h1>
            <div className="container">
                <Select options={colors} onChange={colorHandler}></Select>
            </div>
            <div className="changeColor" style={{backgroundColor: color}}></div>
        </div>
    );
}

export default ChangeColor;