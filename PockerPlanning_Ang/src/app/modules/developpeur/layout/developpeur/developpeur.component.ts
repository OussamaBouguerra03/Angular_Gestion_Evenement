import { Component } from '@angular/core';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.css']
})
export class DeveloppeurComponent {
  currentView: 'list' | 'add' | 'update' = 'list';

  // Fonctions pour changer l'état
  showList() {
    this.currentView = 'list';
  }

  showAddForm() {
    this.currentView = 'add';
  }

  showUpdateForm() {
    this.currentView = 'update';
  }
}
