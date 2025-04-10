import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'home page',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        title: 'home page',
        loadComponent: () => import('./components/home/home.component').then(h=>h.HomeComponent)
    },
    {
        path: 'admin',
        title: 'admin page',
        loadChildren: () => import('./routes/sub_routes').then(c => c.Children_Routes)
    },

    {
        path: 'about',
        title: 'About Us',
        loadComponent: () => import('./components/about/about.component').then(a=>a.AboutComponent)
    },
    {
        path: 'services',
        title: 'Our Services',
        loadComponent: () => import('./components/services/services.component').then(s=>s.ServicesComponent)
    },
    {
        path: '**',
        title: '404',
        loadComponent: () => import('./components/nopage/nopage.component').then(n=>n.NopageComponent)
    }
];