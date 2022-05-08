import './ArrayArea.css';
import React from 'react';

const NUMBER_OF_ARRAY_BARS = 300;
const MIN_BAR_HEIGHT = 15;
const MAX_BAR_HEIGHT = 500;

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

  bubbleSort = (array) => {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        counter += 1;
    }
    return array;
  }

  testAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntBetweenIntervals(1,1000);
      for (let i = 0; i < length; i ++) {
        array.push(randomIntBetweenIntervals(-1000,1000));
      }
      const jsSortedArray = array.slice().sort((a,b) => a - b);
      const bubbleSortedArray = this.bubbleSort(array.slice());
      console.log(arraysAreEqual(jsSortedArray, bubbleSortedArray));
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
          <button onClick={() => this.generateArray()}> Generate </button>
          <button onClick={() => this.bubbleSort(array)}> Bubble Sort</button>
          <button onClick={() => this.testAlgorithms()}> Testing </button>
      </section>
    );
  }
}
