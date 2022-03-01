import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store2';

  imgDefault: string = 'https://www.donbalon.com/images/venue_default.png'
  imgParent = ''

  showImage = true;

  clear(){
    this.imgParent = "https://www.donbalon.com/images/venue_default.png"
  }

  onLoaded(img: string){
    console.log('Log padre', img)
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }



  toggleImg(){
    this.showImage = !this.showImage
  }

}
