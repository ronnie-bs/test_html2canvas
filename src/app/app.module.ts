import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { OrgSummaryComponent } from './components/org-summary/org-summary.component';
import { RoleSimilarityComponent } from './components/role-similarity/role-similarity.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgSummaryComponent,
    RoleSimilarityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
