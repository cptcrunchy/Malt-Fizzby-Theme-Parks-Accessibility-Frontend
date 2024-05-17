import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ParksComponent } from "./parks.component";
import { ParkAccessibilityComponent } from "../park-accessibility/park-accessibility.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ParkPreviewComponent } from "../park-preview/park-preview.component";


export const parksRoutes: Routes = [
    // This sets the path to the component 
    {
        path: '',
        component: ParksComponent,
    },
    {
        path: 'parks/:id/parkaccessibility/:id',
        component: ParkAccessibilityComponent,
    }
];


@NgModule({
    imports: [RouterModule.forChild(parksRoutes)],
    exports: [RouterModule]
})
export class ParksRoutingModule {}
