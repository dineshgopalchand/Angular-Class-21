import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FollowerComponent } from './follower/follower.component';
import { GitRoutingModule } from './git-routing.module';
import { GitComponent } from './git.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoComponent } from './repo/repo.component';



@NgModule({
  declarations: [
    GitComponent,
    FollowerComponent,
    RepoComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GitRoutingModule,
    ReactiveFormsModule
  ]
})
export class GitModule { }
