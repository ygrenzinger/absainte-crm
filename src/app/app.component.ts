import { Component } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'
  user = null

  constructor(
    private afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => {
      console.log(user)
      this.user = user;
    })
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isLoggedIn() {
    return this.user != null
  }
}
