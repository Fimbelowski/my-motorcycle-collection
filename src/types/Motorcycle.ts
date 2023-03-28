import type MotorcycleImage from '@/types/MotorcycleImage';

export default interface Motorcycle {
  color: string;
  description: string;
  displacement: number;
  horsePower: number;
  img: MotorcycleImage;
  manufacturer: string;
  model: string;
  year: number;
}
