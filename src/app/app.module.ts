import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { ParksRoutingModule } from '@pages/parks/parks-routing-module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ParksPage } from '@pages/parks/parks.component';
import { ParkPreviewComponent } from '@components/park-preview/park-preview.component';
import { ParkAccessibilityPage } from '@pages/park-accessibility/park-accessibility.component';
import { AttractionsPage } from '@pages/attractions/attractions.component';
import { AttractionAccessibilityPage } from '@pages/attraction-accessibility/attraction-accessibility.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParksPage,
    ParkPreviewComponent,
    ParkAccessibilityPage,
    AttractionsPage,
    AttractionAccessibilityPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ParksRoutingModule,
    // AttractionsRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
