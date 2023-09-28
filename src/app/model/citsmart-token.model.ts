export interface ICitsmartToken {
    error?: string;
    privacyTerm?: {required: boolean, id: number, content: string}
    sessionID?: string;
  }
  
  export class CitsmartToken implements ICitsmartToken {
    constructor(
      public error?: string,
      public privacyTerm?: {required: boolean, id: number, content: string},
      public sessionID?: string) {
    }
  }
