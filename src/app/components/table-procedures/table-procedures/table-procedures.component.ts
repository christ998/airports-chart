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
    // document.body.style.cursor = 'wait';
    // this.chartService.getChart(number, this.icao, this.country).subscribe({
    //   next: (response) => {
    //     const file = new Blob([response], { type: 'application/pdf' });
    //     const fileURL = URL.createObjectURL(file);
    //     document.body.style.cursor = 'auto';
    //
    //     window.open(fileURL, '_blank');
    //   },
    //   error: err => {
    //     document.body.style.cursor = 'auto';
    //   }
    //
    // })
    const pageBuffer = `${this.apiUrl}/${this.country}/${this.icao}/${number}`;
    const blob = new Blob([pageBuffer], {type: 'application/pdf'})
    const pdfUrl = URL.createObjectURL(blob);
    window.open(pageBuffer, '_blank');
  }
}
