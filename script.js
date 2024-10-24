// // // let button = document.querySelector("button");
// // // button.style.color="white"
// // // button.innerText = "Click";

// // //find the element :querySelector,getElementBy
// // //change the content
// // //change the style
// // //ad event action
// // //btn.style.background = "linear-Gradient(45%,black,blue)";

// // //   let btn = document.querySelector(".btn");
// // //   btn.style.color = "white";
// // //btn.style.backgroundColor = "black";

function buttonClick() {
  let container = document.querySelector(".container");
  let btn = document.querySelector(".btn");
  const lightColors = [
    "#FFFFFF", // White
    "#F8F8F8", // Ghost White
    "#FAF0E6", // Linen
    "#F5F5DC", // Beige
    "#FFF0F5", // Lavender Blush
    "#FFFAF0", // Floral White
    "#F0E68C", // Khaki
    "#E6E6FA", // Lavender
    "#D3D3D3", // Light Gray
    "#FFF5EE", // Seashell
    "#FFE4E1", // Misty Rose
    "#F0FFF0", // Honeydew
    "#F5FFFA", // Mint Cream
    "#F0FFFF", // Azure
    "#F5F5F5", // White Smoke
    "#FAEBD7", // Antique White
    "#FFEBCD", // Blanched Almond
    "#FFE4B5", // Moccasin
    "#FFE4C4", // Bisque
    "#FFF8DC", // Cornsilk
    "#FFFACD", // Lemon Chiffon
    "#FDF5E6", // Old Lace
    "#FAFAD2", // Light Goldenrod Yellow
    "#E0FFFF", // Light Cyan
    "#D8BFD8", // Thistle
    "#DDA0DD", // Plum
    "#FFDEAD", // Navajo White
    "#F0E68C", // Khaki
    "#B0E0E6", // Powder Blue
    "#BEBEBE", // Gray
    "#C0C0C0", // Silver
    "#F5DEB3", // Wheat
  ];
  //const colorNumber = Math.round(Math.random() * 30);
  const colorNumber = Math.floor(Math.random() * 30);
  container.style.backgroundColor = lightColors[colorNumber];
  //btn.style.color = lightColors[colorNumber];
  btn.style.color = lightColors[colorNumber];
}
