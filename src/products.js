import fries from "./images/fries.png";
import chickenFillet from "./images/chicken-fillet.png";
import mojito from "./images/mojito.png";

const products = [
  {
    id: 1,
    name: "Original Fries",
    slug: "original-fries",
    description: "Original Fries",
    price: "KWD " + 0.65,
    image: fries,
  },

  {
    id: 2,
    name: "Classic Chicken Fillet",
    slug: "classic-chicken-fillet",
    description: "Chicken breast, American cheese, lettuce, mayonaise",
    price: "KWD " + 1.8,
    image: chickenFillet,
  },

  {
    id: 3,
    name: "Mishmash Mojito",
    slug: "mishmash-mojito",
    description: "Lime and Mint Mojito",
    price: "KWD " + 1.0,
    image: mojito,
  },
];

export default products;
