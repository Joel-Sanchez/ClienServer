import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponentComponent } from './auth/register-component/register-component.component';
import { HeaderComponentComponent } from './Shared/header-component/header-component.component';
import { FooterComponentComponent } from './Shared/footer-component/footer-component.component';
import { NavigationComponentComponent } from './Shared/navigation-component/navigation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NavigationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
