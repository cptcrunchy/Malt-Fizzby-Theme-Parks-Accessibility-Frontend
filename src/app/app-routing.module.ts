import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { ParksPage } from '@pages/parks/parks.component';
import { AttractionsPage } from '@pages/attractions/attractions.component';
import { ParkAccessibilityPage } from '@pages/park-accessibility/park-accessibility.component';
import { AttractionAccessibilityPage } from '@pages/attraction-accessibility/attraction-accessibility.component';

export const routes: Routes = [
    { path: '', redirectTo: 'parks', pathMatch: 'full' },
    { path: 'parks', component: ParksPage },
    { path: 'parks/:parkId/attractions', component: AttractionsPage },
    { path: 'park-accessibility', component: ParkAccessibilityPage },
    { path: 'parks/:parkId/park-accessibility/:parkaccessibilityId', component: ParkAccessibilityPage },
    { path: 'attractions', component: AttractionsPage },
    { path: 'attraction-accessibility', component: AttractionAccessibilityPage },
    {
      path: 'parks/:parkId/attractions/:attractionId/attraction-accessibility/:attractionAccessibilityId',
      component: AttractionAccessibilityPage
    },
    { path: 'parks/:id/parkaccessibility/:id', component: ParkAccessibilityPage }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
