import { NgModule } from '@angular/core';
import { TufudMaterialTestLibraryComponent } from './tufud-material-test-library.component';
import { MinusPlusComponent } from './minus-plus/minus-plus.component';
import {MatIconModule} from '@angular/material/icon'; 



@NgModule({
  declarations: [
    TufudMaterialTestLibraryComponent,
    MinusPlusComponent
  ],
  imports: [
    MatIconModule
  ],
  exports: [
    TufudMaterialTestLibraryComponent,
    MinusPlusComponent
  ]
})
export class TufudMaterialTestLibraryModule { }
