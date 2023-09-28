export interface ICitsmartDataQuery {
    sessionID?: string;
    queryName?: string;
  }
  
  export class CitsmartDataQuery implements ICitsmartDataQuery {
    constructor(public sessionID?: string, public queryName?: string) {
    }
  }
