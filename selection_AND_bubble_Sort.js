// selection sort
function selectionSort(arr) {
    for(var i = 0;i<arr.length;i++){
        let lowest = i;
        for(var j = i+1;j<=arr.length;j++) {
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(lowest != i){
            let temp = arr[i];
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}
// bubble sort
function bubbleSort(arr){
    let noSwapTrack;
    const swap = (arr, i, j) => {
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    for(let i = arr.length;i>0;i--){
        noSwapTrack = true;
        for(let j = 0;j<i-1;j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
                noSwapTrack = false;
            }
        }
        if(noSwapTrack) break;
    }
    return arr
}
// insertion sort
function insertionSort(arr) {
    for (let i = 1;i<arr.length;i++){
        let j = i-1
        let current = arr[i];
        while(j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        j++;
        arr[j] = current;
    }
   
}