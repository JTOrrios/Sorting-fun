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
        swap(currentIdx, smallestIdx, array);
        currentIdx += 1;
    }
    return array;
}

