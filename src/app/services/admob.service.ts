import { Injectable } from '@angular/core';
//IMPORT PLATFORM SO WE CAN START ADMOB AS SOON AS IT'S READY.
import { Platform } from '@ionic/angular';
//IMPORT WHAT WE NEED FROM ADMOBFREE PLUGIN.
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
@Injectable({
providedIn: 'root'
})
export class AdmobService {
//BANNER CONFIG
bannerConfig: AdMobFreeBannerConfig = {
id: "ca-app-pub-9842149140567121/4378888315",
/* isTesting: false, */
autoShow: false,
};
//INTERSTITIAL CONFIG
interstitialConfig: AdMobFreeInterstitialConfig = {
id: "ca-app-pub-9842149140567121/6925160601",
/* isTesting: false, */
autoShow: true,
//id: "ID GENERATED AT ADMOB ca-app-pub FOR PROD"
};
//REWARD VIDEO CONFIG.
RewardVideoConfig: AdMobFreeRewardVideoConfig = {
id: "ca-app-pub-9842149140567121/4235418081",
/* isTesting: false, */
autoShow: true//,
//id: "ID GENERATED AT ADMOB ca-app-pub FOR PROD"
};
//ADD PLATFORM Y ADMOB AT CONSTRUCTOR.
constructor(
public platform: Platform,
private admobFree: AdMobFree
) {
//LOAD ADS AT PLATFORM READY PROMISE.
platform.ready().then(()=>{
//BANNER
this.admobFree.banner.config(this.bannerConfig);
//INTERSTITIAL
this.admobFree.interstitial.config(this.interstitialConfig);
this.admobFree.interstitial.prepare().then(() => {
console.log('INTERSTIAL LOADED')
}).catch(e =>
console.log('PROBLEM LOADING INTERSTITIAL: ', e)
);
//REWARD VIDEO
this.admobFree.rewardVideo.config(this.RewardVideoConfig);
this.admobFree.rewardVideo.prepare().then(() => {
console.log('REWARD VIDEO LOADED')
}).catch(e =>
console.log('PROBLEM LOADING REWARDVIDEO: ', e)
);
});
}
ShowBanner() {
//CHECK AND SHOW BANNER
this.admobFree.banner.prepare().then(() => {
    this.admobFree.banner.show().then(() =>
console.log('BANNER LOADED')
)}).catch(e =>
console.log('PROBLEM LOADING BANNER: ', e)
);
}
ShowInterstitial() {
//CHECK AND SHOW INTERSTITIAL
this.admobFree.interstitial.isReady().then(() => {
this.admobFree.interstitial.prepare().then(() =>
this.admobFree.interstitial.show().then(() => {
console.log('INTERSTITIAL LOADED')
})
.catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e)  ));
})
.catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e)  );
}

ShowRewardVideo() {
//CHECK AND SHOW REWARDVIDEO
this.admobFree.rewardVideo.isReady().then(() => {
this.admobFree.rewardVideo.prepare().then(() =>
this.admobFree.rewardVideo.show().then(() => {
console.log('BANNER LOADED')
})
.catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e)  ));
})
.catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e)  );
}
}