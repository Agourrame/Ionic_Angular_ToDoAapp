import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}


  test:string="";

  table:string[]=["hamza","nothing"];


  addtotable(){
    if(this.test==""){
      this.alert();
      return;}else{
      this.table.push(this.test);
    this.test=""
    }

  }

  removefromtable(name:string){
    this.table=this.table.filter((e)=>{
        return e!==name;
    })
  }


  clear(){
    this.table=this.table.filter(()=>{
      return false;
    })
  }




  handlerMessage = '';
  roleMessage = '';


  async Remove(n:string) {
    const alert = await this.alertController.create({
      header: 'do you want to delete this item !',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //
          },
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this.table=this.table.filter((e)=>{
              return e!==n;
            })
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'invalid input!!',
      // message: 'Write somthing first ',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
