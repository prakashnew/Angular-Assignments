import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './app/menu-bar/menu-bar.component';
import { HeaderImageComponent } from './app/header-image/header-image.component';
import { ContentBoxComponent } from './app/content-box/content-box.component';
import { MainContentComponent } from './app/main-content/main-content.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { FooterComponent } from './app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeaderImageComponent,
    ContentBoxComponent,
    MainContentComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
