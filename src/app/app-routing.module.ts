import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentebComponent } from 'src/components/componenteb/componenteb.component';
import { ComponentecComponent } from 'src/components/componentec/componentec.component';
import { ComponentedComponent } from 'src/components/componented/componented.component';
import { ComponentAComponent } from 'src/components/component_a/component-a/component-a.component';


const routes: Routes = [
{
  path:'',component:ComponentAComponent//pad hace referencia a lo que va despues del dominio 
},
{
  path:'web2',component:ComponentebComponent//pad hace referencia a lo que va despues del dominio 
},
{
  path:'',component:ComponentecComponent//pad hace referencia a lo que va despues del dominio 
},
{
  path:'',component:ComponentedComponent//pad hace referencia a lo que va despues del dominio 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
