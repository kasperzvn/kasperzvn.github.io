// SCROLL INTO FORM

document.addEventListener('DOMContentLoaded', function() {
    let scrollbutton = document.getElementById("scrolltoformbutton")
    let contactform = document.getElementById("contactform")

    scrollbutton.addEventListener('click', function() {
        contactform.scrollIntoView({ behavior: 'smooth' });
    })
})

//TEXT AREA RESIZE 
function autoResizeTextarea(event) {
    const textarea = event.target;
    // Reset the height to its default value
    textarea.style.height = 'auto';
    // Set the height to match the scroll height
    textarea.style.height = (textarea.scrollHeight + 10) + 'px';
}

// Add event listener to the textarea
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('form_message');
    textarea.addEventListener('input', autoResizeTextarea);
});