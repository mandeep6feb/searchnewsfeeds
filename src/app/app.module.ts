import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { InsertNewsComponent } from './components/insert-news/insert-news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppService} from './app.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    InsertNewsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
