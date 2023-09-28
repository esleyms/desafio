import { ICitsmartDataResult } from "./citsmart-data-results.model "

export interface ICitsmartData {

  dateTime?: Date,
  dateTimeMilliseconds?: string,
  error?: string,
  operationID?: number
  result?: ICitsmartDataResult[]

  }
  
  export class CitsmartData implements ICitsmartData {
    constructor( 
      public dateTime?: Date,
      public dateTimeMilliseconds?: string,
      public error?: string,
      public operationID?: number,
      public result?: ICitsmartDataResult[],

) {
    }
  }
