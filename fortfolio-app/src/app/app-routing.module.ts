import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {EducationComponent} from './education/education.component';
import {ProjectComponent} from './project/project.component';
import {SkillComponent} from './skill/skill.component';

const routes: Routes = [


{
   path:'',
   redirectTo:'home',
   pathMatch:'full'
},


{
  path: 'home' ,
 component:HomeComponent 
}
,
{
  path:'about' ,
  component:AboutComponent
}
,
{
  path:'contact' ,
  component:ContactComponent
}
,
{
  path:'skill' ,
  component:SkillComponent
}
,
{
  path:'education' ,
  component:EducationComponent
}
,
{
  path:'project' ,
  component:ProjectComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
