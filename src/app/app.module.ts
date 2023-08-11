import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/dataService/data.service';
import {HttpClientModule} from "@angular/common/http";
import { ProceduresPageComponent } from './views/procedures/procedures-page/procedures-page.component';
import { TableProceduresComponent } from './components/table-procedures/table-procedures/table-procedures.component';
import { LoadingCircleComponent } from './components/loading-circle/loading-circle.component';

@NgModule({
  declarations: [AppComponent, SearchBoxComponent, HomeComponent, ProceduresPageComponent, TableProceduresComponent, LoadingCircleComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
