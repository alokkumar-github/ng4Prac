import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostControllerComponent } from './post-controller/post-controller.component';
import { SinglePostComponent } from './post-controller/single-post/single-post.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostServiceService } from './shared/post-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PostControllerComponent,
    SinglePostComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
