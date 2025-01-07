import { Routes } from '@angular/router'; // {} []
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

export const routes: Routes = [
    
    {
        path: "user-page",
        component: UserComponent   
    },
    {
        path: "admin-page",
        component: AdminComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    }
];
