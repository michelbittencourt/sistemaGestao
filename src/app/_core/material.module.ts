import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule, MatCardModule, MatInputModule, MatTableModule, MatGridListModule, MatCheckboxModule, MatRadioModule, MatSnackBarModule, MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatSnackBarModule, MatTooltipModule, MatInputModule, MatTableModule, MatRadioModule, MatGridListModule, MatCheckboxModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatSnackBarModule, MatTooltipModule, MatInputModule, MatTableModule, MatRadioModule, MatGridListModule, MatCheckboxModule],
})
export class CustomMaterialModule { }