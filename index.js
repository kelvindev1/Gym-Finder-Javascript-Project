const mainUl = document.getElementById('mainUl');

fetch("http://localhost:3000/options")
    .then(Response => Response.json())
    .then(data => {
        data.forEach(option => {
            const li = document.createElement('li');


            const imgAnchor = document.createElement('a');
            imgAnchor.href = option.image;

            const img = document.createElement('img');
            img.id = 'Gym-image';
            img.src = option.image;
            img.width = 260;
            img.height = 180;

            imgAnchor.appendChild(img);



            const mainDiv = document.createElement('div');

            const nameHeading = document.createElement('h3');
            nameHeading.textContent = `Name: ${option.name}`;

            const locationHeading = document.createElement('h4');
            locationHeading.textContent = `Location: ${option.location}`;

            const priceParagraph = document.createElement('p');
            priceParagraph.textContent = `Price: kshs${option.price}`;

            const categoryParagraph = document.createElement('p');
            categoryParagraph.textContent = `Gender: ${option.category}`;

            const descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = option.description;

            mainDiv.appendChild(nameHeading);
            mainDiv.appendChild(locationHeading);
            mainDiv.appendChild(categoryParagraph);
            mainDiv.appendChild(priceParagraph);
            mainDiv.appendChild(descriptionParagraph);

            li.appendChild(imgAnchor);
            li.appendChild(mainDiv);

            mainUl.appendChild(li);
        });
    })
    .catch(error => {
        console.log('Error fetching options data', error); //log error message and object 
    });


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    //Create email content
    let emailContent = 'Am' + name + '\n' +
        'My message: ' + message;


    // Create mailto link
    let mailtoLink = 'mailto:kelvinmutugi336@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(emailContent);


    //Aler user and open email
    alert('Email client opened with pre-filled message. Hit OK to Proceed.');
    window.location.href = mailtoLink;
});
// clear buttons

  function clearField(id) {
    document.getElementById(id).value = '';
    alert('Do you want to clear!');
}
