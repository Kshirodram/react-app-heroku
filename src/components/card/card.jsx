import React from "react";

import Styles from "card.module.css";

const Card = (props) => (
  <div class={}>
    <div class={}>
      <h3>{props.data.header}</h3>
      <p>{props.data.shortDesc}</p>
      <p>{props.data.longDesc}</p>
    </div>
  </div>
);

export default Card;
