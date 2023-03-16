import BmwF750Gs from './assets/BmwF750GS.png';
import DucatiMonster from './assets/DucatiMonster.jpeg';
import DucatiPanigaleV4 from './assets/DucatiPanigaleV4.png';
import IndianScoutBobber from './assets/IndianScoutBobber.png';
import MotorcycleName from './types/MotorcycleName';

import type Motorcycle from './types/Motorcycle';

const MOTORCYCLES: Record<MotorcycleName, Motorcycle> = {
  [MotorcycleName.BmwF750GS]: {
    color: 'Austin Yellow Metallic',
    description:
      "The BMW F 750 GS is your ticket to adventure. With this balanced Enduro all-rounder, you can master all paths and expand your horizons. The F 750 GS gives you more power, more comfort, more spirit of GS. Feel the strong-charactered engine and enjoy the ease of handling of the F 750 GS. While you're off discovering the world, you have the bike safely under control with the Automatic Stability Control (ASC) and ABS. With the additional option Connectivity, the 6.5 inch TFT-display boasts many features including navigation and smartphone connectivity.",
    displacement: 853,
    imgSrc: BmwF750Gs,
    manufacturer: 'BMW',
    model: 'F 750 GS',
    power: '77 hp (at 7,500 rpm)',
    year: 2020,
  },
  [MotorcycleName.DucatiMonster]: {
    color: 'Stealth Black',
    description:
      'The Monster 821 pays homage to the legacy of the Monster 900, which over 25 years ago revolutionized the motorcycle world. Agile and featuring sporty performance, it was designed for maximum riding enjoyment, at all times and in all conditions.  The Monster 821 range has been rejuvenated with a new stealth version: matte black livery, updated graphics and front fairing give a unique character to the naked Ducati par excellence.',
    displacement: 821,
    imgSrc: DucatiMonster,
    manufacturer: 'Ducati',
    model: 'Monster 821 Stealth',
    power: '109 hp (80 kW)',
    year: 2020,
  },
  [MotorcycleName.DucatiPanigaleV4]: {
    color: 'Ducati Red',
    description:
      'The 2020 version of the Panigale V4 boosts performance even further and takes track riding to the next level for amateurs and pros alike. ',
    displacement: 1103,
    imgSrc: DucatiPanigaleV4,
    manufacturer: 'Ducati',
    model: 'Panigale V4',
    power: '157.5 kW (214 hp)',
    year: 2020,
  },
  [MotorcycleName.indianScoutBobber]: {
    color: 'Black',
    description:
      'Stripped down and blacked out with an aggressive stance and raw power, the Scout Bobber is a modern take on the iconic bobber style.',
    displacement: 1133,
    imgSrc: IndianScoutBobber,
    manufacturer: 'Indian',
    model: 'Scout Bobber',
    power: '100 hp',
    year: 2020,
  },
};

export default MOTORCYCLES;
