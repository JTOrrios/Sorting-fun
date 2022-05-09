import './ArrayArea.css';
import React from 'react';
import { bubbleSortAnimations, insertionSortAnimations, selectionSortAnimations, heapSortAnimationas, quickSortAnimations, mergeSortAnimations } from './SortingAlgo';

const NUMBER_OF_ARRAY_BARS = 50;
const MIN_BAR_HEIGHT = 15;
const MAX_BAR_HEIGHT = 500;
//const delay = async (ms = 1) => new Promise(resolve => setTimeout(resolve,ms));

function randomIntBetweenIntervals(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {return false};
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
}
function swap(i, j, array) {
  let b = array[j];
  array[j] = array[i];
  array[i] = b;
}



export default class ArrayArea extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount = () => {
    this.generateArray();
  }

  generateArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntBetweenIntervals(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT));
    }
    this.setState({array});
  }

  bubbleSort = () => {
    let array = this.state.array;
    bubbleSortAnimations(array);
  }

  insertionSort = () => {
    let array = this.state.array;
    insertionSortAnimations(array);
  }

  selectionSort = () => {
    let array = this.state.array;
    selectionSortAnimations(array);
  }

  heapSort = () => {
    let array = this.state.array;
    heapSortAnimationas(array);
  }

  quickSort = () => {
    let array = this.state.array;
    quickSortAnimations(array, 0, array.length - 1);
  }

  mergeSort = () => {
    let array = this.state.array;
    mergeSortAnimations(array);
  }

  testAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntBetweenIntervals(1,1000);
      for (let i = 0; i < length; i ++) {
        array.push(randomIntBetweenIntervals(-1000,1000));
      }
      const jsSortedArray = array.slice().sort((a,b) => a - b);
      const customSortedArray = this.insertionSort(array.slice());
      console.log(arraysAreEqual(jsSortedArray, customSortedArray));
    }
  }

  render = () => {
    const {array} = this.state;
    return (
      <section className="ArrayArea">
          <div className='array-container'>
            {array.map((value, idx) => (
              <div className='array-bar' key={idx}
              style={{backgroundColor: 'white', height: `${value}px`,
            }}></div>
            ))}
          </div>
          <button onClick={() => this.generateArray()}> Generate New Array</button>
          <button onClick={() => this.bubbleSort()}> Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.testAlgorithms()}> Testing </button>
      </section>
    );
  }
}
