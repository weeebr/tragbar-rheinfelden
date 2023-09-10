import React from "react";
import doris from '../assets/team/doris_weber.jpg'
import ulli from '../assets/team/ulli_knoepfli.jpg'
import walli from '../assets/team/walli_vromans.jpg'

export const Team = ({ title, text }) => {
  return (
    <div>
        <div><img src={doris} alt="Doris"/><p>Doris Weber</p>Geschäftsinhaberin</div>
        <div><img src={ulli}  alt="Ulli"/><p>Ulli Knöpfli</p>Mitarbeiterin Verkauf</div>
        <div><img src={walli}  alt="Walli"/><p>Walli Vromans</p>Mitarbeiterin Verkauf</div>
    </div>
  );
};
