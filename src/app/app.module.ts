import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent },
        ])
    ],
    declarations: [AppComponent, HomeComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
