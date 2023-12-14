import React, { useEffect, useState } from 'react';

const SortingVisual = () => {
  const [arr, setArr] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  let size = 50;

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(getRandomInt(10, 200));
    }
    setArr(newArray);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const sortArray = async () => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setSwappingIndices([j, j + 1]);
        await sleep(10);
        if (arr[j] < arr[j + 1]) {
          swapBar(arr,j);
        }
      }
    }
    setSwappingIndices([]);
  };

  const swapBar = (arr,j ) => {
    let temp = arr[j+1];
    arr[j+1] = arr[j];
    arr[j] = temp;
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <>
      <div className='bar-cont'>
        {arr.map((val, idx) => (
          <div
            key={idx}
            className='bars'
            style={{
              height: `${2 * val}px`,
              backgroundColor: swappingIndices.includes(idx) ? 'green' : 'red',
              width: 1,
            }}
          ></div>
        ))}
      </div>
      <div className='btn-div'>
        <button className='btn' onClick={() => generateArray()}>Generate New Array</button>
        <button className='btn' onClick={() => sortArray()}>Bubble Sort Visualizer</button>
      </div>
    </>
  );
};

export default SortingVisual;
