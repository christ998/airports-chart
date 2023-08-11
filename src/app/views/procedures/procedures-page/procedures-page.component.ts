import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProceduresModel } from '../../../models/procedures.model';
import { DataService } from '../../../services/dataService/data.service';

@Component({
  selector: 'app-procedures-page',
  templateUrl: './procedures-page.component.html',
  styleUrls: ['./procedures-page.component.css'],
})
export class ProceduresPageComponent implements OnInit {
  procedures: ProceduresModel | null;
  isLoading: boolean = false;
  icao: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.route.params.subscribe((params) => {
      this.icao = params['icao'];
      this.isLoading = true;
      this.dataService.getProcedures(this.icao).subscribe({
        next: (procedures) => {
          this.dataService.setProcedures(procedures);
          this.procedures = this.dataService.procedures;
          this.isLoading = false;
        },
        error: ({ error }) => {
          this.isLoading = false
          this.procedures = null
        },
      });
    });
  }

  handleLoading(loadingStatus: boolean) {
    this.callApi();
  }

  protected readonly Object = Object;
}
