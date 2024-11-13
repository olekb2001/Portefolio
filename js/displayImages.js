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

const imageContainer = document.querySelector('.images-display');

imageArray.forEach((image) => {
    // create div for image
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-item');
    // create image element'
    const imgEl = document.createElement('img');
    imgEl.src = image.img;
    imgEl.alt = image.alt;
    imgEl.addEventListener('click', () => {
        window.location.href = `details.html?id=${image.id}`;
    });
    // create title element
    const titleEl = document.createElement('h3');
    titleEl.textContent = image.title;

    // append image and title to imageDiv
    imageDiv.appendChild(titleEl);
    imageDiv.appendChild(imgEl);
    

    // append imageDiv to imageContainer
    imageContainer.appendChild(imageDiv);
});