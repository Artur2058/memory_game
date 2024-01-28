let button1=document.getElementById("button1");
let container=[];
for(let i=1; i<=3; i++){
    container[i]=document.createElement("div");
    container[i].id="container"+i;
    container[i].className="container";
    document.getElementById("content").appendChild(container[i]);
}
let img=[];
let j=1;
for(let i=1; i<=12; i++){
    img[i]=document.createElement("div");
    img[i].id="a"+i;
    img[i].className="img";
    container[j].appendChild(img[i]);
    if(i===4 || i===8){
        j++;
    }
}

let div=[];
let z=1;
for(let i=1; i<=12; i++){
    div[i]=document.createElement("div");
    div[i].id="div"+i;
    div[i].classList.add("div", "d"+z);
    img[i].appendChild(div[i]);
    z++;
    if(i===6){
        z=1;
    }
}
for(let i=1; i<=12; i++){
    div[i].addEventListener("click", fun);
}
let q3=0;
let q4=1;
let arr=[];
let brr=[];
function fun(){
    this.style.zIndex=-1;
    arr.unshift(this);
    q3++;
    if(q3===2){
      setTimeout(() => {
        if(arr[0].classList[1]===arr[1].classList[1]){
           
            brr.unshift(arr[0]);
            brr.unshift(arr[1]);  
            q3=0;
            for(let i=1; i<=2; i++){
                arr.shift();
            }   
            for(let i=1; i<=12; i++){
                for(let j=0; j<brr.length; j++){
                    if(div[i]===brr[j] ){
                    div.splice(i, 1);
                    // delete div[i];
                    } 
                }  
               
            }
            if(q4===6){
                alert("WIN, Please Click on RESTART");
            }
            q4++;
        }
        else{  
        for(let i=1; i<=12; i++){
            if(div[i]){
                div[i].style.zIndex=1;
            }
        }

        q3=0;
        for(let i=1; i<=2; i++){
            arr.shift();
        } 
    }
      }, 300);     
    }
}

//restart
let q5;
let start=1;
let end=3;
button1.addEventListener("click", fun2);
function fun2(){
    q4=1;
    q3=0;
   for(let i=0; i<brr.length; i++){
      div.push(brr[i]);
   }
   for(let i=1; i<=12; i++){
    div[i].style.zIndex=1;
   }
   for(let i=0; i<brr.length; i++){
    brr.shift();
   }
   for(let i=1; i<=12; i++){
    img[i].remove();
   }
   for(let i=1; i<=12; i++){
        q5=Math.round(Math.random()*(end-start)+start);
        if(container[q5].children.length===4){
            while(container[q5].children.length===4){
                q5=Math.round(Math.random()*(end-start)+start);
            }
        }
        document.getElementById("container"+q5).appendChild(img[i]);
   }
}

