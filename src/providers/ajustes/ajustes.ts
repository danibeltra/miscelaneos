
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class AjustesService{

  ajustes={
    mostrar_tutorial: true
  }

  constructor(private platform: Platform, private storage: Storage) {
    console.log('Hello Ajustes Provider');
  }

  cargar_storage(){

    let promesa=new Promise((resolve, reject)=>{
      if( this.platform.is("cordova")){
        //dispositivo
        console.log("Inicializando storage");
        this.storage.ready()
            .then(()=>{
              console.log("Storage Listo");
              this.storage.get("ajustes")
                .then(ajustes=>{
                  if(ajustes){
                    
                    this.ajustes=ajustes;
                  }

                  resolve();
                });
            
        })
      }else{
        //escritorio
        if(localStorage.getItem("ajustes")){
          this.ajustes=JSON.parse(localStorage.getItem("ajustes"));
        }
        resolve(); 
      }
    });
    return promesa;

  }

  guardar_storage(){
    if( this.platform.is("cordova")){
      //dispositivo
      this.storage.ready()
          .then(()=>{
            this.storage.set("ajustes", this.ajustes);
          })
    }else{
      //escritorio
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
    }
  }
}
