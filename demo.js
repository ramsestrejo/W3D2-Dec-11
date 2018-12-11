var button = document.querySelector( "#launch .content-section .text-center .btn" );

button.addEventListener( "click" , e => { 
    e.preventDefault();
    e.stopPropagation();
    e.target.innerHTML = "Voila, you are a Developer :)";
});