const form = _("inputForm");
const sortBtn = _("sort");
const output = _("output");
const algorithms = _("algorithms");
const arry = _("arryInput");
const al = __("#output span");
const p = __("#output p");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
});
sortBtn.addEventListener("click",()=>{
    let algo,out;
    let a = String(arry.value);
    a = a.trim();
    a = a.split(",");
    let arr = [];
    for(i of a){
        arr.push(Number(i));
    }
    if(algorithms.value == "selection") {
        al.style.opacity = "1"
        selectionSort(arr);
        algo = "Selection Sort";
    } else if (algorithms.value == "bubble") {
        al.style.opacity = "1"
        algo = "Bubble Sort";
        bubbleSort(arr);
    } else {
        algo = "Please select any algorithms"
        console.log(algo);
    }
    if(algorithms.value != "none"){
        out = arr.toString(" , ");
        al.innerHTML = algo;
        p.innerHTML = "["+out+"]";
    } else {
       
        p.innerHTML = algo;
    }
});
