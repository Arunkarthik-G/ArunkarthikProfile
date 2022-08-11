import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { Menu, MenuItemContent, MenuModule } from 'primeng/menu';
import { TimelineModule} from 'primeng/timeline';
import {MenuItem} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { PhotoService } from './service/photoservice';
import {GalleriaModule} from 'primeng/galleria';
import {ChartModule} from 'primeng/chart';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './service/appconfigservice';
import {InputTextareaModule} from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    ToggleButtonModule,
    FormsModule, 
    CardModule,
    ImageModule,
    TimelineModule,
    GalleriaModule,
    HttpClientModule,
    ChartModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [PhotoService,AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
