import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, private loadingCtrl:LoadingController) {
  }

  ir_pagina3(){
    this.navCtrl.push("mi-pagina3");
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");   
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }
  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }
  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }
  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }
  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }
  ionViewCanEnter(){
    console.log("ionViewCanEnter");
    // let numero=Math.round(Math.random()*10);
    // console.log(numero);
    // if (numero>=3){
    //   return true;
    // }else{
    //   return false;
    // }

    let promesa=new Promise((resolve, reject)=>{


      let confirmar=this.alertCtrl.create({
        title: "¿Seguro?",
        subTitle: "¿Está seguro de que desea entrar?",
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              console.log('Disagree clicked');
              resolve(false);
            }
          },
          {
            text: 'Si, estoy seguro',
            handler: () => {
              console.log('Agree clicked');
              resolve(true);
            }
          }
        ]
      });
      confirmar.present();
    });

    return promesa;

  }
  ionViewCanLeave(){
    console.log("ionViewCanLeave");

    console.log("Espere 2 segundos para salir");

    let loading=this.loadingCtrl.create({
      content:"Espere por favor..."
    });

    loading.present();

    let promesa=new Promise((resolve, reject)=>{
      setTimeout(()=>{
        loading.dismiss();
        resolve(true)
      }, 2000);
    })
    return promesa;
  }   


}
