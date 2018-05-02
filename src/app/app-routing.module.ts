import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NavbarComponent} from './navbar/navbar.component'
import { HomeComponent} from './home/home.component'

const routes: Routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'navbar',
  component: NavbarComponent
},
{
  path:'search',
  component: SearchComponent  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
