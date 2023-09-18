document.addEventListener("DOMContentLoaded", function () {
    let numbers = document.getElementById("numbers");
    let max = 5;
    for (let i = 1; i <= 5; i++) {
        let str = i.toString();
        let html = "<div class='num " + str + "'>" + i + "</div>";
        numbers.innerHTML += html;
      }

    
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    let current = 1;
    let page = document.getElementsByClassName("num 1")[0];
    page.classList.add("current");
    let pageno = 1;
    next.addEventListener("click",(e)=>{
        e.preventDefault();
        let factor;
        let temp = pageno;
        pageno += 1;
        if(pageno > max){
            if(pageno % 5 != 0){
                factor = (pageno / 5);
                factor = Math.floor(factor);
                
            }
            else{
                factor = (pageno/5);
                factor = Math.floor(factor) - 1;
                
            }
            let change = document.getElementsByClassName("num");

            for(let i =1;i<=5;i++){
                change[i-1].classList.value = "num "+(i + 5*factor).toString();
                change[i-1].textContent = (i+5*factor).toString();
            }
            
            
        }
        if(pageno<=max){
            page = document.getElementsByClassName("num "+temp.toString())[0];
            page.classList.remove("current");
        }
        
        let cur = document.getElementsByClassName("num "+pageno.toString())[0];
        
        cur.classList.add("current");
        

    })
    
    prev.addEventListener("click", (e)=>{
        e.preventDefault();
        
        let a = document.getElementsByClassName("num");
        let high = a[0].textContent;
        
        if(pageno>high && pageno<high+5){
            page = document.getElementsByClassName("num "+pageno.toString())[0];
            page.classList.remove("current");
        }
        
        if(pageno>1){
            pageno -= 1;
        }
        if(pageno<high){
            let change = document.getElementsByClassName("num");
            for(let i=1;i<=5;i++){
                let b = change[i-1].textContent;
                change[i-1].classList.value = "num "+(b-5).toString();
                change[i-1].textContent = b-5;
            }
        }
        
        let cur = document.getElementsByClassName("num "+pageno.toString())[0];
        cur.classList.add("current");

        
    })

    
    
})