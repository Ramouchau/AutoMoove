import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, NavOptions, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { UserToken } from '../../interfaces/auth-socket-interfaces';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../login/login";


@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(private nav: NavController, private auth: AuthService, private splashScreen: SplashScreen, public alertCtrl: AlertController, public navParams: NavParams) {
		splashScreen.hide();
	}

	public ionViewWillEnter() {}

	public logout() {
		this.auth.logout().subscribe(succ => {
			this.nav.setRoot('LoginPage')
		});
	}
	/*private showError(text) {

		let alert = this.alertCtrl.create({
			title: 'Fail',
			subTitle: text,
			buttons: ['OK']
		});
		alert.present(<NavOptions>prompt);
	}*/
}
