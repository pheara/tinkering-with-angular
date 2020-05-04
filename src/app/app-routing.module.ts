import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path: 'somepath', component: TestComponentComponent },
  { path: 'anotherpath', component: TestComponentComponent },
  { path: '', redirectTo: '/somepath', pathMatch: 'full' },
  { path: '**', redirectTo: '/somepath' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
