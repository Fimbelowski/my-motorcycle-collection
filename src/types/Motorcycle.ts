import type MotorcycleImage from './MotorcycleImage';

export default interface Motorcycle {
  color: string;
  description: string;
  displacement: number;
  img: MotorcycleImage;
  manufacturer: string;
  model: string;
  power: string;
  year: number;
}
