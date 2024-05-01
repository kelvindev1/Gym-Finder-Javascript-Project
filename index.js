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