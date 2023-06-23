/* Select elements */
// The modal overlay
// The close button
// The Open button


let open = document.getElementById("open");
let close = document.getElementById('close');
let overlay = document.getElementById("overlay");

open.addEventListener('click', function(){
    overlay.classList.remove('hidden');
});

close.addEventListener("click", function(){
    overlay.classList.add("hidden");
});

