import React from "react";
import as98 from '../assets/labels/as98.jpg'
import filnoir from '../assets/labels/filnoir.gif'
import gang from '../assets/labels/gang.jpg'
import herrlicher from '../assets/labels/herrlicher.jpg'
import moma from '../assets/labels/moma.jpg'
import nile from '../assets/labels/nile.jpg'
import penninkny from '../assets/labels/penninkny.jpg'
import rosemunde from '../assets/labels/rosemunde.jpg'
import smithAndSoul from '../assets/labels/smith&soul.gif'

export const LabelsGallery = () => {
  return (
    <div id="labels">
        <img src={nile} alt="Nile" />
        <img src={as98} alt="as98" />
        <img src={gang} alt="gang" />
        <img src={rosemunde} alt="gang" />
        <img src={penninkny} alt="penninkny" />
        <img src={herrlicher} alt="herrlicher" />
        <img src={moma} alt="moma" />
        <img src={filnoir} alt="filnoir" />
        <img src={smithAndSoul} alt="smithAndSoul" />
    </div>
  );
};
