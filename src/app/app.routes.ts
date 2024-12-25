import { Routes } from '@angular/router';
import { LoginComponent } from './pages/common/login/login.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { CountryComponent } from './pages/admin/config/country/country.component';
import { StateComponent } from './pages/admin/config/state/state.component';
import { CityComponent } from './pages/admin/config/city/city.component';

export const routes: Routes = [
  {
    path:"admin",
    children:[
    {path:"home",component:AdminhomeComponent},
    {path:"config",children:[
       {path:"country",component:CountryComponent},
       {path:"state",component:StateComponent},
       {path:"city",component:CityComponent},
    ]},
    {path:"Home",component:AdminhomeComponent},
  ]},
  {path:'',redirectTo:'Admin/Home',pathMatch:'full'}
];
