import './ArrayArea.css';
import React from 'react';



export default class ArrayArea extends React.Component{

generateArray() {
  console.log('array test');
}

render() {
    return (
      <section className="ArrayArea"> 
          <button onClick={this.generateArray}> Generate </button>
      </section>
    );
  }

}
