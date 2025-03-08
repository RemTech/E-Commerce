import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
//import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase, connectDatabaseEmulator } from '@angular/fire/database';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, Messaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
//import { DevEnvironment } from '../environments/environment.development';
import { connectDataConnectEmulator, DataConnect, getDataConnect } from 'firebase/data-connect';
//import { connectorConfig } from '../../dataconnect-generated/js/default-connector';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), //provideClientHydration(),
    provideFirebaseApp(() => {
      //const connector: DataConnect = getDataConnect(connectorConfig);
      //connectDataConnectEmulator(connector, 'localhost', 9390);
      return initializeApp();
    }),
    provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService,
    provideFirestore(() => {
      connectFirestoreEmulator(getFirestore(), 'localhost', 8080);
      return getFirestore();
    }),
    provideDatabase(() => {
      connectDatabaseEmulator(getDatabase(), 'localhost', 9000);
      return getDatabase();
    }),
    /*provideAppCheck(() => {
      TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_  reCAPTCHA Enterprise site key 
      const provider = new ReCaptchaEnterpriseProvider('');
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }), */
    provideFunctions(() => {
      connectFunctionsEmulator(getFunctions(),'localhost',5001);
      return getFunctions()
    }),
    provideMessaging(() => {
     return  getMessaging();
      }),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig())
  ]
};