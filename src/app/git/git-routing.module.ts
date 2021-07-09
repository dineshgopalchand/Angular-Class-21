import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitAuthGuard } from '../guard/git-auth.guard';
import { FollowerComponent } from './follower/follower.component';
import { GitComponent } from './git.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {
    path: '',
    component: GitComponent
  },
  {
    path: ':username',
    component: GitComponent,
    // pathMatch: 'prefix',
    canActivateChild: [GitAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'profile'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'followers',
        component: FollowerComponent
      },
      {
        path: 'repos',
        component: RepoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitRoutingModule { }
