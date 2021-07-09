/**
 * 
 *swap function
 */
const swap = (arry, i, j) => {
    [arry[i], arry[j]] = [arry[j], arry[i]];
}

/**
 * Pivot helper function 
 */
const pivot = (arr, start = 0,end=arr.length+1) => {
 
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx)
    return swapIdx;
}
/**
 * Quicksort function
 */
function quicksort(arr, left = 0, right = arr.length -1) {
    if(left < right){
        let pivotInx = pivot(arr, left, right);
        quicksort(arr, left, pivotInx-1)
        quicksort(arr,pivotInx+1,right);
    }
    return arr;
}


/**
 * //////////////////////////////////////
 * ///////// Merge Sort  ///////////////
 * /////////////////////////////////////
 * 
 *  */

/**
 *  merge function  
 */ 

const merge = (arr1, arr2) => {
    let res = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            res.push(arr1[i]);
            i++;
        } else{
            res.push(arr2[j]);
            j++; 
        }
    }
    while (i < arr1.length){
        res.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        res.push(arr2[j]);
        j++;
    }
    return res;
}
// merge sort
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}