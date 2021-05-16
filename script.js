

 const slides=document.querySelector(".slider").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const indicator=document.querySelector(".indicator");
 let index=1;

 let send=document.querySelector(".col1");
 let cap=document.querySelector(".caption1");
 let mess=document.querySelector(".message1");

 send.addEventListener('click', ()=>{
     mess.innerText="Talk therapy is not just “talking about your problems”; it is also working toward solutions. Some therapy may involve homework, such as tracking your moods, writing about your thoughts, or participating in social activities that have caused anxiety in the past.";
 })
 send.addEventListener('click',()=>{
     cap.innerText="How can Therapy help?"
 })


 let send2=document.querySelector(".col2");
 
 send2.addEventListener('click', ()=>{
    mess.innerText="Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.";
})
send2.addEventListener('click',()=>{
    cap.innerText="Why Do you need Mental Health Care?"
})




 let send3=document.querySelector(".col3");

 send3.addEventListener('click', ()=>{
    mess.innerText="Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.";
})
send3.addEventListener('click',()=>{
    cap.innerText="Early signs that all is not ok"
})






 let send4=document.querySelector(".col4");

 send4.addEventListener('click', ()=>{
    mess.innerText="Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.";
})
send4.addEventListener('click',()=>{
    cap.innerText="You should visit a therapist if"
})


   prev.addEventListener("click",function(){
       prevSlide();
       
       resetTimer();
   })

   next.addEventListener("click",function(){
      nextSlide(); 
      
      resetTimer();
      
   })

   function prevSlide(){
   	 if(index==0){
   	 	index=slides.length-1;
   	 }
   	 else{
   	 	index--;
   	 }
   	 changeSlide();
   }

   function nextSlide(){
      if(index==slides.length-1){
      	index=0;
      }
      else{
      	index++;
      }
      changeSlide();
   }

   function changeSlide(){
   	       for(let i=0; i<slides.length; i++){
   	       	 slides[i].classList.remove("active");
   	       }

       slides[index].classList.add("active");
   }

   function resetTimer(){
   	  // when click to indicator or controls button 
   	  // stop timer 
   	  clearInterval(timer);
   	  // then started again timer
   	  timer=setInterval(autoPlay,4000);
   }
 
  
  function autoPlay(){
      nextSlide();
      
  }

  let timer=setInterval(autoPlay,4000);


 
const counters=document.querySelectorAll('.counter');
const speed=200;

counters.forEach(counter=>{
    const updateCount=()=>{
        const target= +counter.getAttribute('data-target');
        const count=+counter.innerText;

        const inc= target/speed;

        if(count<target){
            counter.innerText=count+inc;
            setTimeout(updateCount,1);
        }
        else{
            count.innerText=target;
        }

    }
    updateCount();
});


