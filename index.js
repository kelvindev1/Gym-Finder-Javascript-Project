const mainUl = document.getElementById("mainUl");

fetch("http://localhost:3000/options")
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((option) => {
      const li = document.createElement("li");

      const imgAnchor = document.createElement("a");
      imgAnchor.href = option.image;

      const img = document.createElement("img");
      img.id = "Gym-image";
      img.src = option.image;
      img.width = 300;
      img.height = 180;

      imgAnchor.appendChild(img);

      const mainDiv = document.createElement("div");

      const nameHeading = document.createElement("h3");
      nameHeading.textContent = `Name: ${option.name}`;

      const locationHeading = document.createElement("h4");
      locationHeading.textContent = `Location: ${option.location}`;

      const priceParagraph = document.createElement("p");
      priceParagraph.textContent = `Price: kshs${option.price}`;

      const categoryParagraph = document.createElement("p");
      categoryParagraph.textContent = `Gender: ${option.category}`;

      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.textContent = option.description;

      // Define cartItems array to store items in the cart
      let cartItems = [];

      // Create "Add to cart" button
      const addButton = document.createElement("button");
      addButton.textContent = "Add";
      addButton.classList.add("add-button");
      addButton.addEventListener("click", function (event) {
        event.preventDefault();
        addToCart(option);
        addButton.textContent = "Added";
        addButton.disabled = true; // Disable add button after adding to cart
        removeButton.disabled = false; // Enable remove button after adding to cart
      });

      // Create "Remove from cart" button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-button");
      removeButton.disabled = true; // Initially disabled until item is added to cart
      removeButton.addEventListener("click", function (event) {
        event.preventDefault();
        removeFromCart(option.name);
        addButton.textContent = "Add";
        addButton.disabled = false; // Enable add button after removing from cart
        removeButton.disabled = true; // Disable remove button after removing from cart
      });

      // Function to add an item to the cart
      function addToCart(option) {
        cartItems.push(option);
        console.log('Item added to cart:', option.name);
        console.log('Cart items:', cartItems);
      }

      // Function to remove an item from the cart
      function removeFromCart(optionName) {
        const index = cartItems.findIndex((item) => item.name === optionName);
        if (index !== -1) {
          cartItems.splice(index, 1);
          console.log('Item removed from cart:', optionName);
          console.log('Cart items:', cartItems);
          alert(`Item ${optionName} removed from cart`);
        } else {
          console.log('Item not found in cart:', optionName);
          alert(`Item ${optionName} not found in cart`);
        }
      }

      mainDiv.appendChild(nameHeading);
      mainDiv.appendChild(locationHeading);
      mainDiv.appendChild(categoryParagraph);
      mainDiv.appendChild(priceParagraph);
      mainDiv.appendChild(descriptionParagraph);
      mainDiv.appendChild(addButton);
      mainDiv.appendChild(removeButton);

      li.appendChild(imgAnchor);
      li.appendChild(mainDiv);

      mainUl.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("Error fetching options data", error); //log error message and object
  });

  document.getElementById("gymForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = {
      name: document.getElementById("name").value,
      location: document.getElementById("location").value,
      description: document.getElementById("description").value,
      price: document.getElementById("price").value,
      image: document.getElementById("image").value,
      category: document.getElementById("category").value,
    };
  
    try {
      const response = await fetch("http://localhost:3000/options", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const addedGym = await response.json();
        displayGym(addedGym);
      } else {
        console.error("Error adding gym:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  });
  
  function displayGym(gym) {
    const outputOnDOM = document.getElementById("outputOnDOM");
  
    const gymDivElement = document.createElement("div");
  
    gymDivElement.innerHTML = `
          <h3>${gym.name}</h3>
          <h4>Location: ${gym.location}</h4>
          <p>Description: ${gym.description}</p>
          <p>Price: Kshs${gym.price}</p>
          <img src="${gym.image}" alt="${gym.name}" style="max-width: 300px; height:180;">
          <p>Category: ${gym.category}</p>
      `;
  
    outputOnDOM.appendChild(gymDivElement);
  }

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    //Create email content
    let emailContent = `Am ${name}\nMy message: ${message}\nItem: ${cartItem.name} (${cartItem.price})`;


    // Create mailto link
    let mailtoLink =
      "mailto:kelvinmutugi336@gmail.com?subject=" +
      subject +
      "&body=" +
      encodeURIComponent(emailContent);

    //Alert user and open email
    alert("Email client opened with pre-filled message. Hit OK to Proceed.");
    window.location.href = mailtoLink;
  });

// clear button
function clearField(id) {
  document.getElementById(id).value = "";
}
