import fries from "./images/fries.png";
import chickenFillet from "./images/chicken-fillet.png";
import mojito from "./images/mojito.png";

const products = [
    {
      id: 1,
      name: "Original Fries",
      description: "Original Fries",
      price: "KWD " + 0.650,
      image: fries,
    },

    {
      id: 2,
      name: "Classic Chicken Fillet",
      description: "Chicken breast, American cheese, lettuce, mayonaise",
      price: "KWD " + 1.800,
      image: chickenFillet,
    },

    {
      id: 3,
      name: "Mishmash Mojito",
      description: "Lime and Mint Mojito",
      price: "KWD " + 1.000,
      image: mojito,
    },
];

export default products;