# Conway's Game of Life - React Implementation

## Overview
Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway. It is a zero-player game that evolves based on an initial state provided by the user, without further input. The game simulates a grid of cells that live, die, or multiply based on a few mathematical rules.

This React-based implementation of Conway's Game of Life features a 60x40 grid.

## Features
- **Grid Size**: 60 columns and 40 rows.
- **Multiple Patterns**: Includes a variety of patterns like oscillators, spaceships, still lifes, and methuselahs.
- **Live Simulation**: Watch the grid evolve according to Conway's Game of Life rules.
- **Next Generation Button**: Advances the grid by one step (one generation) at a time.
- **Randomize Button**: Randomly fills the grid with alive and dead cells to create a random initial state.

## Game Rules
The game evolves based on these simple rules:
1. Any live cell with fewer than two live neighbours dies (underpopulation).
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies (overpopulation).
4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction).

## Installation

1. Clone the repository and install dependencies using `npm install`.
2. Run the app locally with `npm start`.

## How to Use
- **Start Simulation**: Implement a button to start the simulation.
- **Stop Simulation**: Implement a button to stop the simulation.
- **Next Generation Stimulation**: Implement a button to update the grid by one generation each time it is clicked.
- **Random Stimulation**: Implement a button that randomly fills the grid with alive and dead cells.

