import type Motorcycle from '@/types/Motorcycle';

export default function getMotorcycleMakeModel(motorcycle: Motorcycle) {
  const { manufacturer, model } = motorcycle;

  return `${manufacturer} ${model}`;
}
