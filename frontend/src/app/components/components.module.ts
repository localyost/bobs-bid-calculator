import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
    declarations: [
        ToolBarComponent,
        DeleteModalComponent
    ],
    exports: [
        ToolBarComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class ComponentsModule { }
