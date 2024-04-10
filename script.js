var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxheight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  }
  else {
    MenuItems.style.maxHeight = "0px";
  }
}

const menuItems = [
  { name: "Classic Cheeseburger", image: "images/burger1.jpg", description: "A timeless favorite with juicy beef patty, melted cheese, lettuce, tomato, and pickles." },
  { name: "Bacon BBQ Burger", image: "images/burger2.jpg", description: "Savor the smoky flavor with crispy bacon, tangy BBQ sauce, caramelized onions, and melted cheese." },
  { name: "Mushroom Swiss Burger", image: "images/burger3.jpg", description: "Indulge in earthy mushrooms, melted Swiss cheese, and savory beef patty." },
  { name: "Veggie Burger", image: "images/burger4.jpg", description: "A plant-based delight with a flavorful veggie patty, lettuce, tomato, and avocado spread." },
  { name: "Hawaiian Burger", image: "images/burger5.jpg", description: "Tropical vibes with juicy pineapple, crispy bacon, teriyaki glaze, and grilled chicken patty." },

];

const menuCardsContainer = document.getElementById("menuCards");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;

  const content = document.createElement("div");
  content.classList.add("card-content");

  const title = document.createElement("h3");
  title.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  content.appendChild(title);
  content.appendChild(description);

  card.appendChild(img);
  card.appendChild(content);

  menuCardsContainer.appendChild(card);
});
