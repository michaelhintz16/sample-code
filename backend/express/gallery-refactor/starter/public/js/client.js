const imgList = [237, 433, 577, 582, 593, 659, 718, 783, 790, 837, 1024, 1025, 1074, 1084]; 

// Variable where we will store our img tags
let outputHTML = ''; 

// Flex container for images
const gallery = document.querySelector('.gallery'); 

// Loop through items using forEach (available on every array)
imgList.forEach(function(item){
  console.log(item);
  // Our output variable (imgTemplate) contains a gradually growing list of animal images using the addition assignment operator
  outputHTML += `<img src="https://picsum.photos/id/${item}/250/250" alt="Random Lorem Picsum">`;
});

// Add HTML img string to gallery container
gallery.innerHTML = outputHTML;