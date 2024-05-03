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

const mainUl = document.getElementById("mainUl");

let favorites = [];

// const favoritesOl = document.createElement("ol");
// favoritesOl.id = "favoritesOl";
// document.body.appendChild(favoritesOl);

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

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", () => {
        li.remove();
      });

      const addToFavoritesButton = document.createElement("button");
      addToFavoritesButton.textContent = "Add to Favorites";

      addToFavoritesButton.addEventListener("click", () => {
        favorites.push(option);
        alert(`"${option.name}" was added to favorites.`);
      });

      mainDiv.appendChild(nameHeading);
      mainDiv.appendChild(locationHeading);
      mainDiv.appendChild(categoryParagraph);
      mainDiv.appendChild(priceParagraph);
      mainDiv.appendChild(descriptionParagraph);
      mainDiv.appendChild(deleteButton);
      mainDiv.appendChild(addToFavoritesButton);

      li.appendChild(imgAnchor);
      li.appendChild(mainDiv);

      mainUl.appendChild(li);

      // const favoriteLi = document.createElement("li");
      // const favoriteMainDiv = document.createElement("div");
      // const favoriteNameHeading = document.createElement("h3");
      // favoriteNameHeading.textContent = `Name: ${option.name}`;

      // favoriteMainDiv.appendChild(favoriteNameHeading);

      // favoriteLi.appendChild(favoriteMainDiv);

      // favoritesOl.appendChild(favoriteLi);
    });
  })
  .catch((error) => {
    console.log("Error fetching options data", error); //log error message and object
  });
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    //Create email content
    let emailContent = "Am " + name + "\n" + "My message : " + message;

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
