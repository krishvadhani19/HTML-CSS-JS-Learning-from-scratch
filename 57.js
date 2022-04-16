function hide() {
    let btn = document.getElementById('btn');
    let para = document.getElementById("para");
    // para.style.display = 'none';
    if (para.style.display == 'none') {
        para.style.display = 'block';
    } else {
        para.style.display = 'none';
    }
}

let para = document.getElementById('para')
para.addEventListener('mouseover', function run() {
    alert('Mouse Inside')
});

para.addEventListener('mouseout', function run() {
    console.log('Mouse Outside')
});


// Types of Event Listener
// click
// contextmenu
// mouseover / mouseout
// mousedown / mouseup
// mousemove

// submit
// focus

// DOMContentLoaded