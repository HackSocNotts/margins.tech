//Changing background image (on click)
function changeBackground() 
{
  //Array containing background images
  var images = ['https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2F05.png?1553448669278',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2F04.png?1553448669387',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2F03.png?1553448669498',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2F02.png?1553448670491',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2F01.png?1553448670952'];
  
  //Generating a random image index
  var randomNumber = Math.floor(Math.random() * images.length);
  
  //Setting background image to be the random index image 
  document.body.style.backgroundImage = 'url(' + images[randomNumber] + ')';
  document.body.style.backgroundColor = "#fa82e8";
}