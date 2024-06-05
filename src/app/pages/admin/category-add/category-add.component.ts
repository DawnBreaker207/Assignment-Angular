import { Component } from '@angular/core';
import { CategoryService } from '../../../category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../../interfaces/Category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css',
})
export class CategoryAddComponent {
  constructor(private CategoryService: CategoryService) {}
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),

    // image: new FormControl(null, Validators.required),
  });
  
  onSubmit = () => {
    this.CategoryService.Add_Product(
      this.categoryForm.value as Category
    ).subscribe((data) => {
      console.log(data);
    });
  };
}
