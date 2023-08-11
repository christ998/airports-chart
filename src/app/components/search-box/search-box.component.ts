import { Component, EventEmitter, Output } from '@angular/core';
import { ProceduresModel } from '../../models/procedures.model';
import { DataService } from '../../services/dataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  icao: string;
  @Output() loadingStatus = new EventEmitter<boolean>()

  constructor(
    private dataService: DataService,
    private router: Router,
  ) {}

  handleIcaoValue() {
    if (this.icao.length == 4) {
      this.router.navigate([`${this.icao}`])
    }
  }
}
