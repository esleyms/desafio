import { Component, OnInit } from '@angular/core';
import { CitsmartService } from './citsmart.service';
import { ICitsmart } from '../model/citsmart-login.model';
import { ICitsmartDataQuery } from '../model/citsmart-data-query.model';
import { ICitsmartToken } from '../model/citsmart-token.model';
import { CitsmartEnum } from '../enums/citsmart.constants';
import { ICitsmartDataResult } from '../model/citsmart-data-results.model ';
import { Router } from '@angular/router';
import { DataService } from './services/data-service';

@Component({
  selector: 'app-citsmart',
  templateUrl: './citsmart.component.html',
  styleUrls: ['./citsmart.component.css']
})
export class CitsmartComponent implements OnInit {
  searchtext = '';
  filteredData: ICitsmartDataResult[] | undefined = undefined;
  app: string = "Gerenciamento de Ticket";

  token: ICitsmartToken | null = null;

  constructor(
    public citsmartService: CitsmartService,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.login();
  }

  popularParametroCitsmart(): ICitsmart {
    return {
      clientId: CitsmartEnum.CLIENT_ID,
      language: CitsmartEnum.LANGUAGE,
      userName: CitsmartEnum.USER_NAME,
      password: CitsmartEnum.PASSWORD
    };
  }

  popularParametroCitsmartData(): ICitsmartDataQuery {
    return {
      sessionID: this.token?.sessionID,
      queryName: CitsmartEnum.QUERY_NAME
    };
  }

  login(): void {
    this.citsmartService.login(this.popularParametroCitsmart()).subscribe(response => {
      this.token = response.body;
      if(this.token?.sessionID) {
        this.getDados();
      }
    });
  }

  getDados(): void {
    this.citsmartService.getDados(this.popularParametroCitsmartData()).subscribe(response => {
      this.filteredData = response.body?.result;
    });
  }

  getFiltro() : void {
    if(this.searchtext) {
      this.searchtext = this.searchtext.toUpperCase();
    }
    this.filteredData = this.filteredData!.filter(a =>
      a.Usuario!.toUpperCase().indexOf(this.searchtext) >= 0
    );
  }

  getLimparpesquisa(): void {
    this.searchtext = "";
    this.login();
  }

  goToDetalhesByState(data: ICitsmartDataResult) {
    this.router.navigateByUrl('/visualizar-dados', {
      state: { data: data }
    })
    this.dataService.setDataResult(data);
    console.log("data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", data);
    }

}
