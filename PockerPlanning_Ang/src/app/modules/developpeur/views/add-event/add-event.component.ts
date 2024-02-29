import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/service/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  event: any = {}; 
  amPmOptions: number[] = [
    0, 1, 2, 3, 4, 5, 
    6, 7, 8, 9, 10, 11, 
    12, 13, 14, 15, 16, 17, 
    18, 19, 20, 21, 22, 23
];


   constructor(private router: Router, private eventService: EventService) {}
  showPDF(contenu:string,name:string) {
    
    const contenuDuFichier = contenu;
const nom = name;
    // Créer un objet Blob à partir du contenu
    const blob = new Blob([contenuDuFichier], { type: 'text/plain' });

    // Créer un objet URL pour le Blob
    const urlDuFichier = URL.createObjectURL(blob);

    // Créer un lien invisible dans le document
    const lien = document.createElement('a');
    lien.href = urlDuFichier;
    lien.download = nom + '.txt';

    // Simuler un clic sur le lien pour déclencher le téléchargement
    document.body.appendChild(lien);
    lien.click();

    // Nettoyer l'objet URL après le téléchargement
    URL.revokeObjectURL(urlDuFichier);
    document.body.removeChild(lien);

  }
  submitForm() {
    this.eventService.addEvent(this.event).subscribe(
      (response) => {
        console.log('evenement ajoutée avec succès :', response);
this.showPDF(this.event.description,this.event.name);
        this.router.navigate(['/list-event']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout :', error);
      }
    );
  }
}
