import { Aktuelles } from "../pages/2_Aktuelles";
import { BesucheUns } from "../pages/4_Besuche-uns";
import { Home } from "../pages/1_Home";
import { Kontakt } from "../pages/6_Kontakt";
import { Labels } from "../pages/5_Labels";
import { UeberUns } from "../pages/3_Ueber-uns";

export const SECTIONS = [
    {title: 'Herzlich Willkommen!', url: '/', inner: Home},
    {title: 'Aktuelles', url: '#aktuelles', inner: Aktuelles},
    {title: 'Über uns', url: '#ueber-uns', inner: UeberUns},
    {title: 'Besuche uns', url: '#besuche-uns', inner: BesucheUns},
    {title: 'Labels', url: '#labels', inner: Labels},
    {title: 'Kontakt', url: '#kontakt', inner: Kontakt},
]