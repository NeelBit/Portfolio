import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ServicioComponent } from './components/servicio/servicio.component';



const routes: Routes = [
    /* { path: 'sobre-mi', component: SobreMiComponent },
    { path: 'conocimientos', component: ConocimientosComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'servicios', component: ServicioComponent}, */
    { path:  '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
            /* onSameUrlNavigation: "ignore",
            anchorScrolling:'enabled',
            scrollPositionRestoration: 'enabled' */
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
