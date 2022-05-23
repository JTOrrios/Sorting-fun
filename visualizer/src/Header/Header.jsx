import './Header.css';
import React from 'react';
import { generateArray } from '../ArrayArea/ArrayArea';

export default class Header extends React.Component{

  render() {
    return (
      <header className="Header">
          <button onClick={() => generateArray()}> Generate New Array</button>
          <button onClick={() => this.bubbleSort()}> Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.testAlgorithms()}> Testing </button>
      </header>
    );
  }
}
