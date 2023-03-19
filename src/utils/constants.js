import React from "react";
import { MdVideogameAsset } from "react-icons/md";
import { FaGamepad, FaHandPointer } from "react-icons/fa";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <MdVideogameAsset />,
    title: "Premium Gaming Gadgets",
    text: "Find top-quality gaming gadgets from renowned brands to take your gaming experience to the next level.",
  },
  {
    id: 2,
    icon: <FaGamepad />,
    title: "Wireless Gaming Accessories",
    text: "Get rid of the hassle of cords and cables and enjoy wireless freedom with our range of gaming accessories.",
  },
  {
    id: 3,
    icon: <FaHandPointer />,
    title: "Customizable Gaming Peripherals",
    text: "Personalize your gaming setup with our customizable gaming peripherals and accessories to match your style and needs.",
  },
];

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = "/.netlify/functions/products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = `/.netlify/functions/single-product?id=`;
