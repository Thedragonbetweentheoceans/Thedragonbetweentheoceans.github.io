function bgChanger(){

    if(this.scrollY > this.innerHeight/4 && this.scrollY < this.innerHeight*2 ){
        document.body.classList.add("bg-active");
        document.body.classList.remove("bg-active-second");
   
    }else if(this.scrollY > this.innerHeight*2 && this.scrollY < this.innerHeight*2+this.innerHeight/2){
        document.body.classList.add("bg-active-second");
        document.body.classList.remove("bg-active-third");
    }
    else if(this.scrollY >this.innerHeight*2+innerHeight/2) {
        document.body.classList.add("bg-active-third");
        document.body.classList.remove("bg-active-second");
    }
    else{
        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll",bgChanger);