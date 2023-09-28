import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICitsmartDataResult } from 'src/app/model/citsmart-data-results.model ';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-visualizar-dados',
  templateUrl: './visualizar-dados.component.html',
  styleUrls: ['./visualizar-dados.component.css']
})
export class VisualizarDadosComponent implements OnInit {

  data?: ICitsmartDataResult | null = null;

  constructor(protected activatedRoute: ActivatedRoute,
    private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getDataResult();
  }

  previousState(): void {
    window.history.back();
  }

}
