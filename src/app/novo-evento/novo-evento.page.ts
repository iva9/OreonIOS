import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {  CidadeService } from '../cidades.service';
import { finalize } from 'rxjs/operators';
import { EventoService } from '../evento.service';
import { IonSlides} from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database'
import { Environment,  Geocoder  } from '@ionic-native/google-maps'
import * as moment from 'moment'
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ImagePicker , ImagePickerOptions} from '@ionic-native/image-picker/ngx' ;
import { AngularFireAuth } from '@angular/fire/auth';
declare var google : any;


@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.page.html',
  styleUrls: ['./novo-evento.page.scss'],

})

export class NovoEventoPage implements OnInit {
  @ViewChild('fileButton' ,  {static: false}) fileButton;
  @ViewChild('slides' ,{static: false})  slides: IonSlides;
  public next(){
    this.slides.slideNext();
  }

  public prev(){
    this.slides.slidePrev();
  }
  loading : any;
  img : any;
  selectedImage: any = null;
  items;
  presenca = true
  fim
  dia2
  usuario
  ingressoType = ''
  existe : boolean = false
  url: string;
  nome: string;
  link: string;
  ingresso: string;
  options = { month: 'long', day: 'numeric',
  year: 'numeric' };
  dia //= new Date().toLocaleDateString('en-GB' , this.options);
  public destnation : any;
  public lugar : any;
  hide : boolean = true
  local: string ;
  public tipo = "Presencial"
  public search : string = '';
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
 
 

       constructor(@Inject(AngularFireStorage) 
        private storage : AngularFireStorage , @Inject(EventoService) 
       private eventoService: EventoService ,
       public firebase : AngularFireDatabase,
       private ngzone: NgZone,
       private imgPic : ImagePicker,
       public alert: AlertController,
       private auth: AngularFireAuth ,
       private loadingC : LoadingController
       )
        {  }

  ngOnInit() {
    this.eventoService.getImageDetailList(); 
    this.img = "../assets/icon/unnamed.png";
    this.getCidadeDetails();
    this.name()
  } 
  getCidadeDetails(){
    this.firebase.list('cidades').valueChanges().subscribe(
       data =>{ this.tratacidades(data)
     })
       }
       tratacidades(dados){
         this.items = Object.keys(dados).map(i => dados[i])  
         console.log(this.items,"todas as city")
       }

  showPreview(event: any){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.img = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.next()
    }else{
      this.img = "../assets/icon/unnamed.png";
      this.selectedImage = null;
    }
  }
  writeUserData( ){
    this.fileButton.nativeElement.click()
 }

 novaData(){
  this.next()
  moment.locale('pt-BR')
  this.dia2 = moment(this.dia).format('ddd DD MMM')
 }
 Presencial(){
  this.presenca = true
  this.next()
}
Online(){
  this.presenca = false
  this.local = null
  this.lugar = null
  this.next()
}

async name(){
  const res = (await this.auth.currentUser).displayName
  this.usuario = res
}
  save(){
    if (this.presenca == true){
    this.presentLoading()
    if(this.nome == null){
      return  this.showalert("Erro " , "Nome do evento é Obrigatório")
    }
    if(this.selectedImage == null){
      return  this.showalert("Erro " , "Imagem do evento é Obrigatório")
    }
    if(this.dia == null){
      return  this.showalert("Erro " , "Data de ínicio do evento é Obrigatório")
    }
    if(this.fim == null){
      return  this.showalert("Erro " , "Data de fim do evento é Obrigatório")
    }
    if(this.local == null){
      return  this.showalert("Erro " , "Local do evento é Obrigatório")
    }
      var name = this.selectedImage.name;
      const fileRef = this.storage.ref(name);
      this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.url = url;
            
            this.eventoService.insertImageDetails(this.nome,this.url, this.ingresso, this.dia,this.fim, this.local ,this.lugar);
            if( this.items.some( cidade => (cidade.lugar == this.lugar)) ){
              return console.log("cidade" ,"ja existente")
            } else {
              var lugar = this.lugar
              this.firebase.list('cidades').push({
                lugar
              })} 
           ;
          })
          
        })
      ).subscribe();
      this.loading.dismiss()
      this.showalert("Evento " , "Publicado com sucesso")
    }
    if (this.presenca == false) {
      this.presentLoading()
    if(this.nome == null){
      return  this.showalert("Erro " , "Nome do evento é Obrigatório")
    }
    if(this.selectedImage == null){
      return  this.showalert("Erro " , "Imagem do evento é Obrigatório")
    }
    if(this.dia == null){
      return  this.showalert("Erro " , "Data de ínicio do evento é Obrigatório")
    }
    if(this.fim == null){
      return  this.showalert("Erro " , "Data de fim do evento é Obrigatório")
    }
    if(this.link == null){
      return  this.showalert("Erro " , "Link do evento é Obrigatório")
    }
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.eventoService.insertOnline(this.nome,this.url, this.link, this.dia,this.fim);                   
        })
      })
    ).subscribe();
    this.loading.dismiss()
    this.showalert("Evento " , "Publicado com sucesso")

    }
  }
  imagepicker(){
    console.log("chamou")
    var options : ImagePickerOptions ={
      maximumImagesCount : 1,
      allow_video : false
    }
    this.imgPic.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
    
  }

  save2(){
    this.presentLoading()
    if(this.nome == null){
      return  this.showalert("Erro " , "Nome do evento é Obrigatório")
    }
    if(this.selectedImage == null){
      return  this.showalert("Erro " , "Imagem do evento é Obrigatório")
    }
    if(this.dia == null){
      return  this.showalert("Erro " , "Data de ínicio do evento é Obrigatório")
    }
    if(this.fim == null){
      return  this.showalert("Erro " , "Data de fim do evento é Obrigatório")
    }
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.eventoService.insertOnline(this.nome,this.url, this.link, this.dia,this.fim);                   
          this.showalert("Evento" , "Publicado com sucesso ")
        })
      })
    ).subscribe();
    this.loading.dismiss()
    this.showalert("Evento " , "Publicado com sucesso")
}
  searchChanged(){
    if (!this.search.trim().length )  return;
     this.googleAutocomplete.getPlacePredictions( {  input: this.search ,  },  predictions => {
       this.ngzone.run(() =>{
        this.searchResults = predictions
       })
      

})}
async showalert(header : string , message: string){
  const alert = await  this.alert.create({
    header,
    message,
    buttons: ["Ok"]
  })
  await alert.present() 
}
 async localizou(item: any){
    this.search = "";
    this.local = item
    this.destnation = item    
   const info : any = await  Geocoder.geocode( {address: this.destnation.description } );
    this.lugar = info[0].subAdminArea;
    if (info[0].adminArea == "Distrito Federal"){
      this.lugar = "Brasilia"
    }
    if (this.lugar != "Brasilia" || "Rio de Janeiro" || "São Paulo"){
      this.lugar , this.local = ""
      return this.showalert("Ops!" , "O Oreon só esta disponivel em Brasilia, Rio de Janeiro e São paulo")
    }
    console.log(this.lugar)
    return this.local , this.lugar ;   
  }
  load(){
  Environment.setEnv({
    'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyClABG0SXj9mDIMW-nZBBKoIaGscHBHoyo',
    'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyClABG0SXj9mDIMW-nZBBKoIaGscHBHoyo'
  });
}
async presentLoading(){
 this.loading = await this.loadingC.create({
    cssClass: 'my-custom-class',
    message: 'Espere um momento...',
    duration: 2000
  });
  await this.loading.present();
} 

}