import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';

import { AdmobService } from './services/admob.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  image: string;
  message:string;
  imageForSharing:string;
  isDarkMode: boolean = false
  constructor(
    private appRate: AppRate,
    private admobService: AdmobService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Página inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Filmes',
      url: '/movies',
      icon: 'film'
    },
    {
      title: 'Séries',
      url: '/series',
      icon: 'videocam'
    },
    {
      title: 'Categorias',
      url: '/categories',
      icon: 'pricetags'
    },
    {
      title: 'Pedidos',
      url: '/requests',
      icon: 'receipt'
    },
    {
      title: 'Pesquisar',
      url: '/search',
      icon: 'search'
    }
  ];
  public labels = ['Hykem Corporation'];

  initializeApp() {
    this.platform.ready().then(() => {
      this.admobService.ShowBanner();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const systemDark = localStorage.getItem('systemDark');
    if(systemDark && systemDark === 'dark'){
      document.body.setAttribute('color-theme', `${systemDark}`)
      this.isDarkMode = true
    }
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
      localStorage.setItem('systemDark', 'dark');
    }
    else{
      document.body.setAttribute('color-theme', 'light');
      localStorage.removeItem('systemDark');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('color-theme', 'dark');		
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  rate(){
    this.appRate.preferences = {
      usesUntilPrompt: 3,
      storeAppURL: {
       ios: '<app_id>',
       android: 'market://details?id=<com.pobreflix.app>',
       windows: 'ms-windows-store://review/?ProductId=<store_id>'
      }
    }
  }

  //FUNCTION FOR INTERSTITIAL
  Interstitial(){
    this.admobService.ShowInterstitial();
  }
  //FUNCTION FOR VIDEOREWARD
  Reward(){
    this.admobService.ShowRewardVideo();
  }
}
