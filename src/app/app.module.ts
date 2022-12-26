import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnimatedLoginFormComponent } from './animated-login-form/animated-login-form.component';
import { AnimatedLoginForm2Component } from './animated-login-form2/animated-login-form2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AnimatedLoginFormComponent,
    AnimatedLoginForm2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
