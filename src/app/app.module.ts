import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContentLayoutComponent } from './main-content-layout/main-content-layout.component';
import { SearchContainerLayoutComponent } from './search-container-layout/search-container-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentLayoutComponent,
    SearchContainerLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
