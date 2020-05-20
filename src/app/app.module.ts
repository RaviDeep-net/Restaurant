import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SumPipePipe } from './pipe/sum-pipe.pipe';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SumPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
