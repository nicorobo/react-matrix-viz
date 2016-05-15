import React from 'react';
import Cell from './Cell.js';

export function randomData(col, row) {
	var data = [];
	for(var i = 0; i < col; i++) {
		var column = [];
		for(var j = 0; j < row; j++) {
			column.push({val:Math.floor(Math.random()*100)});
		}
		data.push(column);
	}
	return data;
}

export function generateCells(data, config) {
	var { setData, cellClass, onClick, onMouseOver, onMouseOut, setStyle, setHoverStyle } = config;
	return data.map((col, i) => col.map((cell, j) => {
		var curData = setData(cell, i, j) // Using i and j to denote col and row respectively
		return (<Cell 
			key={`col${i}row${j}`} 
			className={cellClass}
			data={curData}
			setStyle={setStyle}
			setHoverStyle={setHoverStyle}
			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut} />);
	}));
}

export default { randomData, generateCells }