const urlParams = new URLSearchParams(window.location.search);
const imageId = parseInt(urlParams.get('id'), 10);
// use the same array of images from displayImages.js
const imageArray = [
    {
        id: 1,
        title: 'Image 1',
        img: 'img/dansing1.jpg',
        alt: "Image 1",
        description: 'This is a description of image 1'
    },
    {
        id: 2,
        title: 'The Mask',
        img: 'img/themask.jpg',
        alt: "Image 2",
        description: 'This is a description of image 2'
    
    },
    {
        id: 3,
        title: 'Image 3',
        img: 'img/dansing2.jpg',
        alt: "Image 3",
        description: 'This is a description of image 3'
        
    },
    {
        id: 4,
        title: 'Image 4',
        img: 'img/dansing3.jpg',
        alt: "Image 4",
        description: 'This is a description of image 4'
    },
    {
        id: 5,
        title: 'Image 5',
        img: 'img/dansing4.jpg',
        alt: "Image 5",
        description: 'This is a description of image 5'
    }
    ];
const selectedImage = imageArray.find((image) => {
    return image.id === imageId;
});

if(selectedImage){
    document.getElementById('image-title').textContent = selectedImage.title;
    document.getElementById('image-display').src = selectedImage.img;
    document.getElementById('image-display').alt = selectedImage.alt;
    document.getElementById('image-description').textContent = selectedImage.description;
}
else {
    // Display an error message if no image is found
    document.querySelector('.detail-container').innerHTML = "<p>Image not found.</p>";
}
function goBack() {
    window.history.back();
}