import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const CORE_COMPONENTS = [NavbarComponent, SidebarComponent, FooterComponent, 
    MainDashboardComponent, PageNotFoundComponent];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [CORE_COMPONENTS],
    exports: [CORE_COMPONENTS]
})
export class ScmMainModule { }
