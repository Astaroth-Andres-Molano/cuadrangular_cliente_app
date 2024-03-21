import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CuadrangularComponent } from './cuadrangular/cuadrangular.component'; // Asegúrate de importar correctamente el componente

@NgModule({
  declarations: [
    AppComponent,
    CuadrangularComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { CuadrangularComponent } from './cuadrangular/cuadrangular.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CuadrangularComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
    
    
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
