const delay = async (ms = 1) => new Promise(resolve => setTimeout(resolve,ms));

function swap(i, j, array) {
    let b = array[j];
    array[j] = array[i];
    array[i] = b;
}

export async function  bubbleSortAnimations(array){
    // const animations = this.bubbleSort(this.state.array);
    let isSorted = false;
    let counter = 0;
    while(!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const barOneStyle = arrayBars[i].style;
            const barTwoStyle = arrayBars[i+1].style;
            if (array[i] > array[i+1]) {
                barOneStyle.height = `${array[i+1]}px`;
                barTwoStyle.height = `${array[i]}px`;
                swap(i, i + 1, array);
                isSorted = false;
            }
            await delay ();
        }
        counter += 1;
    }
}

export async function insertionSortAnimations(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;

        while (j > 0 && array[j] < array[j - 1]) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const barOneStyle = arrayBars[j].style;
            const barTwoStyle = arrayBars[j-1].style;
            barOneStyle.height = `${array[j-1]}px`;
            barTwoStyle.height = `${array[j]}px`;
            swap(j, j - 1, array)
            j--;
        }
        await delay (60);
    }
}

export async function selectionSortAnimations(array) {
    // Write your code here.
    let currentIdx = 0;
    while (currentIdx < array.length - 1) {
        let smallestIdx = currentIdx;
        for (let i = currentIdx + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) {
                smallestIdx = i;
            }
        }
        const arrayBars = document.getElementsByClassName('array-bar');
        const barOneStyle = arrayBars[currentIdx].style;
        const barTwoStyle = arrayBars[smallestIdx].style;
        barOneStyle.height = `${array[smallestIdx]}px`;
        barTwoStyle.height = `${array[currentIdx]}px`;
        swap(currentIdx, smallestIdx, array);
        currentIdx += 1;
        await delay (100);
    }
    
}

//========================== HEAP SORT FUNCTION AND HELPERS ==============
export async function heapSortAnimationas(array) {
    buildMaxHeap(array)
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const barOneStyle = arrayBars[0].style;
        const barTwoStyle = arrayBars[endIdx - 1].style;
        barOneStyle.height = `${array[endIdx - 1]}px`;
        barTwoStyle.height = `${array[0]}px`;
        swap(0, endIdx, array);
        siftDown(0, endIdx - 1, array);
        await delay (40);
    }
}

function buildMaxHeap(array) {
    const firstParentIdx = Math.floor((array.length - 1) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        siftDown(currentIdx, array.length - 1, array);
    }
}

function siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let idxToSwap;
        if (childTwoIdx > -1 && heap[childTwoIdx] > heap[childOneIdx]) {
            idxToSwap = childTwoIdx;
        } else {
            idxToSwap = childOneIdx
        }
        if (heap[idxToSwap] > heap[currentIdx]) {
            swap(currentIdx, idxToSwap, heap);
            currentIdx = idxToSwap;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }
    }
}
//==================== END OF HEAP SORT FUNCTION AND HELPERS ==============

export async function quickSortAnimations(array, startIdx, endIdx) {
    if (startIdx >= endIdx) return
    let pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const barOneStyle = arrayBars[leftIdx].style;
        const barTwoStyle = arrayBars[rightIdx].style;
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            barOneStyle.height = `${array[rightIdx]}px`;
            barTwoStyle.height = `${array[leftIdx]}px`;
            swap(leftIdx, rightIdx, array);
        }
        if (array[leftIdx] <= array[pivotIdx]) {
            leftIdx++;
        }
        if (array[rightIdx] >= array[pivotIdx]) {
            rightIdx--;
        }
        await delay (12);
    }
    const arrayBars = document.getElementsByClassName('array-bar');
    const barOneStyle = arrayBars[pivotIdx].style;
    const barTwoStyle = arrayBars[rightIdx].style;
    barOneStyle.height = `${array[rightIdx]}px`;
    barTwoStyle.height = `${array[pivotIdx]}px`;
    swap(pivotIdx, rightIdx, array)
    let leftSubArraySmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubArraySmaller) {
        quickSortAnimations(array, startIdx, rightIdx - 1);
        quickSortAnimations(array, rightIdx + 1, endIdx);
    } else {
        quickSortAnimations(array, rightIdx + 1, endIdx);
        quickSortAnimations(array, startIdx, rightIdx - 1);
    }
}