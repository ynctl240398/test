import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  id: string = 'test-1';
  src: string = '';

  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit(): void {
    this.nativeAudio.preloadSimple(this.id, this.src);
  }

  play() {
    this.nativeAudio.play(this.id).then(
      res => {
        console.log('play :', res);

      },
      err => {
        console.log('play err:', err);

      }
    );
  }

}
