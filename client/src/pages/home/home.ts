import { Component } from '@angular/core'
import { NavController, IonicPage, AlertController, NavParams } from 'ionic-angular'
import { AuthService } from "../../providers/auth-service"
import { UserToken } from '../../interfaces/auth-socket-interfaces'
import { SplashScreen } from '@ionic-native/splash-screen'
import { LoginPage } from "../login/login"


@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(private nav: NavController, private auth: AuthService, private splashScreen: SplashScreen, public alertCtrl: AlertController, public navParams: NavParams) {

		this.auth.getUser().subscribe((user: UserToken) => {
		}, (err: string) => {
			this.nav.setRoot(LoginPage)
		})
		this.splashScreen.hide()
	}

	public ionViewWillEnter() {}

	public logout() {
		this.auth.logout().subscribe(succ => {
			this.nav.setRoot('LoginPage')
		})
	}
	/*private showError(text) {

		let alert = this.alertCtrl.create({
			title: 'Fail',
			subTitle: text,
			buttons: ['OK']
		})
		alert.present(<NavOptions>prompt)
	}*/
}
