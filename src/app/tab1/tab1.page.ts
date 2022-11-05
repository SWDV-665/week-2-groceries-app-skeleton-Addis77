import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  title = 'Grocery';

  Item = [
    {
      name: 'Cheese',
      quantity: 5,
    },
    {
      name: 'Bread',
      quantity: 1,
    },
    {
      name: 'Mangos',
      quantity: 3,
    },
    {
      name: 'Apple',
      quantity: 1,
    },
    {
      name: 'Charry',
      quantity: 1,
    },
  ];

  constructor(
    private toastController: ToastController,
    private alertCtrl: AlertController
  ) {}

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Removing Item - ' + index,
      duration: 3000,
      position: 'bottom',
    });
    await toast.present();
    this.Item.splice(index, 1);
  }
// Add Item function call
  addItem() {
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Add Item',
      buttons: [
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved Clicked');
            this.Item.push(data);
          },
        },
        {
          text: 'Cancel',
          handler: (data) => {
            console.log('Cancel clicked');
          },
        },
      ],
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
        },
      ],
    });
    await prompt.present();
  }
}
