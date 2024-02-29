import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/service/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {
  supplier: any = {}; 

  constructor(private router: Router, private supplierService: SupplierService) {}

  submitForm() {
    this.supplierService.addSupplier(this.supplier).subscribe(
      (response) => {
        console.log('Fournisseur ajoutée avec succès :', response);

        this.router.navigate(['/list-supplier']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de fournisseur :', error);
      }
    );
  }
}
