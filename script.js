//Changing background image (on click)
function changeBackground()
{
  //Array containing background images
  var images = ['https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2Fbg1.jpg?1553450735132',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2Fbg-purple-fur-2.jpg?1556544635996',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2Fbg-pink-fur-2.jpg?1556544636848',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2Fbg-042ade90-dc51-43a7-96ec-9038b2aed19d%20(copy).jpeg?1556544636986',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2Fbg-pink-sweater-2.jpg?1556544638021',
                'https://cdn.glitch.com/b68166ed-17f0-40b5-82ff-59c7bd7d2514%2Fbg-pink-sweater-2-2.jpg?1556544638489',];

  //Generating a random image index
  //var randomNumber = Math.floor(Math.random() * images.length);

  let bgDiv = document.querySelector('.js-bg');

  //Setting background image to be the random index image
  bgDiv.style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';
  document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';
}

changeBackground();
