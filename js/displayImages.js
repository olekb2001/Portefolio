const imageArray = [
{
    id: 1,
    title: 'Image 1',
    img: 'https://picsum.photos/500/500',
    alt: "Image 1"
},
{
    id: 2,
    title: 'The Mask',
    img: '../images/themask.jpg',
    alt: "Image 2"
},
{
    id: 3,
    title: 'Image 3',
    img: 'https://picsum.photos/500/500',
    alt: "Image 3"
},
{
    id: 4,
    title: 'Image 4',
    img: 'https://picsum.photos/500/500',
    alt: "Image 4"
},
{
    id: 5,
    title: 'Image 5',
    img: 'https://picsum.photos/500/500',
    alt: "Image 5"
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
    // create title element
    const titleEl = document.createElement('h3');
    titleEl.textContent = image.title;

    // append image and title to imageDiv
    imageDiv.appendChild(titleEl);
    imageDiv.appendChild(imgEl);
    

    // append imageDiv to imageContainer
    imageContainer.appendChild(imageDiv);
});