import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SobreMiComponent,
    ConocimientosComponent,
    ProyectosComponent,
    ServicioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
