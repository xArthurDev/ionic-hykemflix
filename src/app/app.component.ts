import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isDarkMode: boolean = false
  constructor(
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
    }
  ];
  public labels = ['Hykem Corporation'];

  initializeApp() {
    this.platform.ready().then(() => {
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
}
