const heading = document.getElementById('main-heading');
const paragraphs = document.getElementsByClassName('text-content');
const image = document.getElementById('main-image');
const container = document.querySelector('.container');
const paragraphsInContainer = document.querySelectorAll('.container p');

// Change the text of the heading
heading.textContent = 'Updated Heading';

// Change the color of paragraphs with the class text-content
for (let paragraph of paragraphs) {
  paragraph.style.color = 'red';
}

// Change the source of the image with the id main-image
image.src = 'new_image.jpg';

// Change the background color of the div with the class container
container.style.backgroundColor = 'yellow';

// Change the text of all paragraphs inside the container div
for (let paragraph of paragraphsInContainer) {
  paragraph.textContent = 'Modified Paragraph';
}