import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { FormsModule } from '@angular/forms';
import { PhotoService } from './service/photoservice';
import { Subscription } from 'rxjs';
import { AppConfig } from './domain/appconfig';
import { AppConfigService } from './service/appconfigservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'AkProfile';
  events1: any[];
    
  events2: any[];
  items: MenuItem[];
  checked1:boolean=false;

  data: any;

    chartOptions: any;

    subscription: Subscription;

    config: AppConfig;

  images: any[];

  constructor(private photoService: PhotoService,private configService: AppConfigService) { }

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  ngOnInit() {
    this.photoService.getImages().then(images => this.images = images);

    this.data = {
      labels: ['C# WinForms','C# WPF','C# Angular'],
      datasets: [
          {
              data: [1, 3, 5],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }
      ]
  };

  this.config = this.configService.config;
  this.updateChartOptions();
  this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
      this.updateChartOptions();
  });


}

updateChartOptions() {
  this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
}

getLightTheme() {
  return {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      }
  }
}

getDarkTheme() {
  return {
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          }
      }
  }
}
;
}

