import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolSelectorComponent } from './school-selector/school-selector.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/school-selector', pathMatch: 'full' },
  { path: 'school-selector', component: SchoolSelectorComponent },
  { path: 'confirmation', component: ConfirmationComponent } // Add this route
];

@NgModule({
  declarations: [
    AppComponent,
    SchoolSelectorComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
