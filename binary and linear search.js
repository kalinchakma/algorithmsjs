/**
 * Binary search 
 */

const binarySearch = (arr,key) => {
   let start = 0;
   let end = arr.length -1;
   let mid = Math.floor((start + end)/2);
   while(arr[mid] !== key && start <= end){
       if(key < arr[mid]) end = mid - 1;
       else start = mid + 1;
       mid = Math.floor((start + end)/2);
   }
   return arr[mid] === key ? mid : -1;
}

/**
 * Linear search
 */

const linearSearch = (arr, key) => {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === key) return i;
    }
    return -1;
}