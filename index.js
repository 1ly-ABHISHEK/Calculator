buttons=document.querySelectorAll("button");
// screen.value = '';
for (item of buttons) {
    item.addEventListener("click",(e)=>{
        let btnvalue = e.target.value;
        console.log(btnvalue);
        let screen = document.getElementById("screen");
        console.log(screen.value);
        screen.value = parseInt(btnvalue);
})
}
