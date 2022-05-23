import './ArrayArea.css';
import React from 'react';
import { bubbleSortAnimations, insertionSortAnimations, selectionSortAnimations, 
        heapSortAnimationas, quickSortAnimations, mergeSortAnimations } from './SortingAlgo';

let windowWidth = window.innerWidth * .4

const NUMBER_OF_ARRAY_BARS = windowWidth / 2;
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
    console.log(windowWidth);
  }

  bubbleSort = () => {
    this.generateArray();
    const animations = bubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(()=>{
        const [barOneIdx, newHeightOne] = animations[i][0];
        const [barTwoIdx, newHeightTwo] = animations[i][1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${newHeightOne}px`;
        barTwoStyle.height = `${newHeightTwo}px`;
      }, i * 1);
    }
  }

  insertionSort = () => {
    this.generateArray();
    const animations = insertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(()=>{
        const [barOneIdx, newHeightOne] = animations[i][0];
        const [barTwoIdx, newHeightTwo] = animations[i][1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${newHeightOne}px`;
        barTwoStyle.height = `${newHeightTwo}px`;
      }, i * 1);
    }
  }

  selectionSort = () => {    
    this.generateArray();
    const animations = selectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(()=>{
        const [barOneIdx, newHeightOne] = animations[i][0];
        const [barTwoIdx, newHeightTwo] = animations[i][1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${newHeightOne}px`;
        barTwoStyle.height = `${newHeightTwo}px`;
      }, i * 5);
    }
  }

  heapSort = () => {
    this.generateArray();
    const animations = heapSortAnimationas(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(()=>{
        const [barOneIdx, newHeightOne] = animations[i][0];
        const [barTwoIdx, newHeightTwo] = animations[i][1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${newHeightOne}px`;
        barTwoStyle.height = `${newHeightTwo}px`;
      }, i * 3);
    }
  }

  quickSort = () => {
    this.generateArray();
    const animations = quickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(()=>{
        const [barOneIdx, newHeightOne] = animations[i][0];
        const [barTwoIdx, newHeightTwo] = animations[i][1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${newHeightOne}px`;
        barTwoStyle.height = `${newHeightTwo}px`;
      }, i * 3);
    }
  }

  mergeSort = () => {
    this.generateArray();
    const animations = mergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(()=>{
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * 10);
    }
  }

  testAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntBetweenIntervals(1,1000);
      for (let i = 0; i < length; i ++) {
        array.push(randomIntBetweenIntervals(-1000,1000));
      }
      const jsSortedArray = array.slice().sort((a,b) => a - b);
      const customSortedArray = this.quickSortTest(array);
      console.log(arraysAreEqual(jsSortedArray, customSortedArray));
    }
  }

  render = () => {
    const {array} = this.state;
    return (
      <div className='Header-and-ArrayArea'>
        <header className='Header'>
        <button onClick={() => this.generateArray()}> Generate New Array</button>
          <button onClick={() => this.bubbleSort()}> Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.testAlgorithms()}> Testing </button>
        </header>
        <section className="ArrayArea">
            <div className='array-container'>
              {array.map((value, idx) => (
                <div className='array-bar' key={idx}
                style={{backgroundColor: 'white', height: `${value}px`,
              }}></div>
              ))}
            </div>
        </section>
      </div>
    );
  }
}
