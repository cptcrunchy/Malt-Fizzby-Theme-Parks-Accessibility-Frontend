import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParksComponent } from './parks/parks.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { ParkAccessibilityComponent } from './park-accessibility/park-accessibility.component';
import { AttractionAccessibilityComponent } from './attraction-accessibility/attraction-accessibility.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkPreviewComponent } from './park-preview/park-preview.component';


export const routes: Routes = [
    {
        path: '',
        component: ParksComponent
    },
    {
        path: 'parkaccessibility',
        component: ParkAccessibilityComponent
    },
    {
        path: 'attractions',
        component: AttractionsComponent
    },
    {
        path: 'attractionaccessibility',
        component: AttractionAccessibilityComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
