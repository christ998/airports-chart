import { Component, Input, OnInit } from '@angular/core';
import { Procedure } from '../../../interfaces/Procedure';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ChartService } from '../../../services/chartService/chart.service';

@Component({
  selector: 'app-table-procedures',
  templateUrl: './table-procedures.component.html',
  styleUrls: ['./table-procedures.component.css'],
})
export class TableProceduresComponent implements OnInit {
  @Input() procedures: any;
  apiUrl = environment.apiUrl;
  country: string;
  icao: string;
  airport_name: string;
  ifr_details: Array<Procedure>;


  constructor(
    private httpClient: HttpClient,
    private chartService: ChartService,
  ) {}

  ngOnInit(): void {
    this.country = this.procedures.country;
    this.icao = this.procedures.icao;
    this.airport_name = this.procedures.airport_name;
    this.ifr_details = this.procedures.procedures;
  }

  openPdf(number: string) {
    // this.chartService.getChart(number, this.icao, this.country).subscribe((response) => {
    //   const file = new Blob([response], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);
    //   window.open(fileURL, '_blank');
    // })
    const api = `${this.apiUrl}/${this.country}/${this.icao}/${number}`;
    window.open(api, '_blank');
  }
}