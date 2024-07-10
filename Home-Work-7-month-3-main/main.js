
async function setRandomBackgroundColor() {
    try {
        const response = await fetch('https://www.thecolorapi.com/id?hex=ffa');
        
        const data = await response.json();
        const color = data.rgb.value; 
        document.body.style.backgroundColor = color;
        console.log(data.rgb);
    } catch (error) {
        console.error('Ошибка', error);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    setRandomBackgroundColor();
});
