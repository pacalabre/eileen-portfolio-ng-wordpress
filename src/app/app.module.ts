import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryProjectComponent } from './pages/category-project/category-project.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleProjectComponent,
    AllProjectsComponent,
    CategoryProjectComponent,
    NotFoundComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'projects/:category/:id', component: SingleProjectComponent},
    	{ path: 'projects/:category', component: CategoryProjectComponent},
    	{ path: 'projects', component: AllProjectsComponent },
    	{ path: '**', component: NotFoundComponent }
    ],
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
