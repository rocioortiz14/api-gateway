/* eslint-disable prettier/prettier */
import { IPassenger } from 'src/common/interfaces/passenger.interface';

/* eslint-disable prettier/prettier */
export interface IFlight {
  
    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
    passengers: IPassenger[];
}
