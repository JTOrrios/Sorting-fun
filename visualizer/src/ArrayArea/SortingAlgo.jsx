function swap(i, j, array) {
    let b = array[j];
    array[j] = array[i];
    array[i] = b;
}

export function  bubbleSortAnimations(array){
    const animations = [];
    let isSorted = false;
    let counter = 0;
    while(!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i+1]) {
                animations.push([[i, array[i+1]],[i+1,array[i]]]);
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        counter += 1;
    }
    return animations;
}

export function insertionSortAnimations(array) {
    const animations = [];
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            animations.push([[j, array[j-1]],[j-1,array[j]]]);
            swap(j, j - 1, array)
            j--;
        }
    }
    return animations;
}

export function selectionSortAnimations(array) {
    const animations = [];
    let currentIdx = 0;
    while (currentIdx < array.length - 1) {
        let smallestIdx = currentIdx;
        for (let i = currentIdx + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) {
                smallestIdx = i;
            }
        }
        animations.push([[currentIdx, array[smallestIdx]],[smallestIdx,array[currentIdx]]]);
        swap(currentIdx, smallestIdx, array);
        currentIdx += 1;
    }
    return animations;
}

//========================== HEAP SORT FUNCTION AND HELPERS ==============
export function heapSortAnimationas(array) {
    const animations = [];
    buildMaxHeap(array, animations)
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        animations.push([[0, array[endIdx]],[endIdx,array[0]]]);
        swap(0, endIdx, array);
        siftDown(0, endIdx - 1, array, animations);
    }
    return animations;
}

function buildMaxHeap(array, animations) {
    const firstParentIdx = Math.floor((array.length - 1) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        siftDown(currentIdx, array.length - 1, array, animations);
    }
}

function siftDown(currentIdx, endIdx, heap, animations) {
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
            animations.push([[currentIdx, heap[idxToSwap]],[idxToSwap,heap[currentIdx]]]);
            swap(currentIdx, idxToSwap, heap);
            currentIdx = idxToSwap;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }
    }
}
//==================== END OF HEAP SORT FUNCTION AND HELPERS ==============

export function quickSortAnimations(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx >= endIdx) return
    let pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx) {
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            animations.push([[leftIdx, array[rightIdx]],[rightIdx, array[leftIdx]]]);
            swap(leftIdx, rightIdx, array);
        }
        if (array[leftIdx] <= array[pivotIdx]) {
            leftIdx++;
        }
        if (array[rightIdx] >= array[pivotIdx]) {
            rightIdx--;
        }
    }    
    animations.push([[pivotIdx, array[rightIdx]],[rightIdx,array[pivotIdx]]]);
    swap(pivotIdx, rightIdx, array)
    let leftSubArraySmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubArraySmaller) {
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
    } else {
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
    }
}

export function mergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
    return animations;
}
    
function mergeSortHelper(mainArray, startIdx, endIdx, auxArray, animations) {
    if (startIdx === endIdx) return
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArray, startIdx, midIdx, mainArray, animations);
    mergeSortHelper(auxArray, midIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, midIdx, endIdx, auxArray, animations);
}

function doMerge(mainArray, startIdx, midIdx, endIdx, auxArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = midIdx + 1;
    
    while (i <= midIdx && j <= endIdx) {
            if (auxArray[i] <= auxArray[j]) {
                animations.push([k, auxArray[i]]);
                mainArray[k] = auxArray[i];
                i++;
            } else {
                animations.push([k, auxArray[j]]);
                mainArray[k] = auxArray[j];
                j++;
            }
            k++
    }
    while (i <= midIdx) {
        animations.push([k, auxArray[i]]);
        mainArray[k] = auxArray[i];
        i++;
        k++;
    }
    while (j <= endIdx) {
        animations.push([k, auxArray[j]]);
        mainArray[k] = auxArray[j];
        j++
        k++;
    } 
}