import React, { useState } from 'react';
import HTMLFlipBook from "react-pageflip";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';
import './index.css';
import Carousel from './Carousel';


const CARDS = 10;
const MAX_VISIBILITY = 3;



function Rules({ }) {
  
  // const count = React.Children.count(children);

  // const card = [{title: 'Manish Rane 1', content: "Lorem ipsum dolor sit amet"}, {title: 'Manish Rane 2', content: "Lorem ipsum dolor sit amet"}]
  // const count = Card.length;
  return (
    <Carousel />
  );
}

export default Rules;