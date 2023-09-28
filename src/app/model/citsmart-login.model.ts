export interface ICitsmart {
    clientId?: string;
    language?: string;
    userName?: string;
    password?: string;
  }
  
  export class Citsmart implements ICitsmart {
    constructor(public clientId?: string, public language?: string, public userName?: string, public password?: string) {
    }
  }
