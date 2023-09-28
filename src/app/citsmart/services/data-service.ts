import { Injectable } from "@angular/core";
import { ICitsmartDataResult } from "src/app/model/citsmart-data-results.model ";

@Injectable({
    providedIn: 'root'
    })
    export class DataService {

    private data: ICitsmartDataResult | undefined = undefined;

    constructor() { }

    setDataResult(dataResult: ICitsmartDataResult) {
        this.data = dataResult;
    }

    getDataResult() {
        return this.data;
    }
}