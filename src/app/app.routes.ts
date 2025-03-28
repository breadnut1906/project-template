import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
        loadChildren: () => import('./pages/pages.routes')
    }
];
