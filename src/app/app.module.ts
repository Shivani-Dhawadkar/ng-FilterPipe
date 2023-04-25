import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { summaryPipe } from './summary.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from './pipes/filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    summaryPipe,
    FilterPipePipe,
    PlayerComponent,
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
