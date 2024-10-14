import type { Car } from '~/server/validator/interfaces/interfaces.tableCarApi';

export default function modification(car: Car) {
  return (car.engine &&
    `
      ${car.engine.volume}
      ${car.engine.transmission ? car.engine.transmission : ''}
      ${car.engine.power ? `(${car.engine.power} л.с.)` : ''}
    `
  );
}