let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
document.body.style.cssText =`background: linear-gradient(to right,${c1.value},${c2.value});`
c1.addEventListener("input",function(){
    document.body.style.cssText =`background: linear-gradient(to right,${c1.value},${c2.value});`
    
    document.querySelector(".h3").innerHTML= `currunt background color \n${c1.value},${c2.value} `
})

c2.addEventListener("input",function(){
    document.body.style.cssText =`background: linear-gradient(to right,${c1.value},${c2.value});`
    document.querySelector(".h3").innerHTML= `currunt background color \n${c1.value},${c2.value} `
    
})

