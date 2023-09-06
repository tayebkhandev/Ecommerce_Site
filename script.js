/* Adding an event listener to the bar element. When the bar element is clicked, the active class is
added to the nav element. */
 const bar = document.getElementById("bar");
 const nav = document.getElementById("navbar");


 if(bar){
    bar.addEventListener('click', () => {
       nav.classList.add ('khan'); 
    });
 }

