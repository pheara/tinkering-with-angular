import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path: 'somepath/:id', component: TestComponentComponent },
  { path: 'anotherpath/:id', component: TestComponentComponent },
  { path: '', redirectTo: '/somepath/0', pathMatch: 'full' },
  { path: '**', redirectTo: '/somepath/0' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
