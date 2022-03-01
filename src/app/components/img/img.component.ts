import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';



@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy {

  /* counter = 0;
  counterFn: number | undefined; */
  constructor() { }

  ngOnInit(): void {
    //Se ejecuta antes del render
    //Se ejecuta una vez
    console.log('Entro al ngOnInit')
    /* this.counterFn = window.setInterval(()=> {
      this.counter++;
      console.log(this.counter)
    }, 1000) */
  }

  //Se ejecuta una vez algo se destruya
  ngOnDestroy(): void {
    /* console.log('Lo destruyó')
    window.clearInterval(this.counterFn) */
  }

  img: string = '';

  //Nos ayuda a recibir info del padre

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg
    console.log('Image Changed')
  }

  //Nos ayuda a entregar info al padre
  @Output() loaded = new EventEmitter<string>();

  imgDefaultPng: string = "https://www.donbalon.com/images/venue_default.png"

  clear(){
    this.img = this.imgDefaultPng;
  }

  imgError(){
    this.img = this.imgDefaultPng
  }

  imgLoaded(){
    console.log('Log hijo')
    this.loaded.emit(this.img)
  }

}
