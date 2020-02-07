import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagosComponent } from './pages/pagos/pagos.component';
import { UploadComponent } from './pages/upload/upload.component';


const routes: Routes = [
  { path: 'pagos', component: PagosComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
