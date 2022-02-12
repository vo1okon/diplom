import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MemmosComponent } from './memmos/memmos.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'news', component:NewsComponent },
  {path: 'calendar', component:CalendarComponent },
  {path: 'memmos', component:MemmosComponent },
  {path: 'about', component:AboutComponent},
  {path: 'contacts', component:ContactsComponent },
  {path: 'register', component:RegisterComponent },
  {path: '%%', component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
