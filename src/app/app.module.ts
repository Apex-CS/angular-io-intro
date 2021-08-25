import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainContentLayoutComponent } from './main-content-layout/main-content-layout.component';
import { SearchContainerLayoutComponent } from './search-container-layout/search-container-layout.component';
import { FormsModule } from "@angular/forms";
import { CardItemComponent } from './card-item/card-item.component';
import { CardShadowDirective } from './card-shadow.directive';
@NgModule({
  declarations: [
    AppComponent,
    MainContentLayoutComponent,
    SearchContainerLayoutComponent,
    CardItemComponent,
    CardShadowDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
