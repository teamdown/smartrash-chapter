import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './views/start/start.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SignComponent } from './views/sign/sign.component';

const routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent},
    { path: '', component: SignComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
