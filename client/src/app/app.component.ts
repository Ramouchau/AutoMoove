import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { Storage } from '@ionic/storage';
import {AuthService} from "../providers/auth-service";

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage: any = LoginPage;
	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage, public auth: AuthService) {
		platform.ready().then(() => {
			statusBar.styleDefault();
		});
	}

	public openProfile() {
		this.nav.push(ProfilePage);
	}

	public logout()
	{
			this.auth.logout().subscribe(res =>
			{
					this.nav.push(LoginPage);
			});
	}
}

