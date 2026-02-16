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
        title: 'BizFushion',
        loadComponent: () => import('./components/home/home.component').then(h=>h.HomeComponent)
    },
    {
        path: 'signup',
        title: 'BizFushion | Sign Up',
        loadComponent: () => import('./components/sign-up/sign-up.component').then(s=>s.SignUpComponent)
    },
    {
        path: 'login',
        title: 'BizFushion | Log In',
        loadComponent: () => import('./components/login/login.component').then(l=>l.LoginComponent)
    },
    {
        path: 'admin',
        title: 'admin page',
        loadChildren: () => import('./routes/sub_routes').then(c => c.Children_Routes)
    },

    {
        path: 'aboutus',
        title: 'About Us',

        loadComponent: () => import('./components/about/about.component').then(a=>a.AboutComponent)
    },
    {
        path: 'services',
        title: 'BizFusion | Services',
        loadComponent: () => import('./components/services/services.component').then(s=>s.ServicesComponent)
    },
    {
        path: '**',
        title: '404',
        loadComponent: () => import('./components/nopage/nopage.component').then(n=>n.NopageComponent)
    }
];
