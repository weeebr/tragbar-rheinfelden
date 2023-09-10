import { FacebookIcon, InstagramIcon } from "../assets/icons";

import React from "react";

export const Kontakt = () => {
  return (
    <div>
      <p>
        <span>Tragbar Rheinfelden</span>
        <a href="tel:+41618313190">061 831 31 90</a>
        <a href="mailto:info@tragbarmode.ch">info@tragbarmode.ch</a>
      </p>
      <p>Für noch aktuellere Updates, folgen Sie uns auf Social Media:</p>
      <a href="https://www.facebook.com/tragbarmode"><FacebookIcon /></a>
      <a href="https://www.facebook.com/tragbarmode"><InstagramIcon /></a>
    </div>
  );
};
