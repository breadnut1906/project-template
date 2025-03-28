import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

const PRIMENGMODULES = [
  CommonModule,
  ToolbarModule,
  ButtonModule,
  AvatarModule,
  AvatarGroupModule,
  MenuModule,
  ConfirmPopupModule,
]

@NgModule({
  declarations: [],
  imports: [ ...PRIMENGMODULES ],
  exports: [ ...PRIMENGMODULES ]
})
export class PrimengUiModule { }
