import { CategoryManagementComponent } from './category-management/category-management.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'category-list', component: CategoryManagementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
