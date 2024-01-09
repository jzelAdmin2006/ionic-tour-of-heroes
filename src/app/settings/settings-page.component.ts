import {Component} from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings-page.component.html',
  styleUrls: ['settings-page.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonList, IonLabel, IonInput, IonButton, FormsModule]
})
export class SettingsPage {
  contactData = {
    name: 'Johannes Zeller',
    email: 'johannes.zeller@bison-group.com',
    company: 'Bison Schweiz AG'
  }
  private savedContactData = this.deepClone(this.contactData);

  save() {
    this.savedContactData = this.deepClone(this.contactData);
  }

  cancel() {
    this.contactData = this.deepClone(this.savedContactData);
  }

  private deepClone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
