let anim = document.getElementsByClassName('ani');

const observer = new IntersectionObserver((entry)=>{
    entry.forEach((en)=>{
        if(en.isIntersecting){
            en.target.classList.add('scroll-ani');
        }else{
            en.target.classList.remove('scroll-ani');
        }
    })
},{
    threshold: 0.5
});

for(let i=0; i<anim.length; i++){
    const element = anim[i];
    observer.observe(element);
}



