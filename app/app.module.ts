import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { RepportsComponent } from './repports/repports.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LanguagePipe } from './language.pipe';
import { ChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { allowspacesss } from './custom.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { EditcellsComponent } from './editcells/editcells.component';
import { BootstrapdialogComponent } from './bootstrapdialog/bootstrapdialog.component';
import { CanvaschartsComponent } from './canvascharts/canvascharts.component';
import { ChunksComponent } from './chunks/chunks.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DndModule } from 'ngx-drag-drop';
import {MatCardModule,MatGridListModule,MatFormFieldModule,MatCheckboxModule,MatDatepickerModule,MatRadioModule,
  MatSelectModule,MatSlideToggleModule,MatExpansionModule,MatButtonModule, MatNativeDateModule} from '@angular/material';
import { MaterialComponent } from './material/material.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpModule } from '@angular/http';
import { PageserviceService } from './pagination/pageservice.service';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemCartComponent } from './item-cart/item-cart.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { RouterModule, Routes } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { DressesComponent } from './dresses/dresses.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');}

const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: ShoppingItemsComponent},
  { path: 'item-detail/:id', component:ItemDetailsComponent },
  { path: 'cart', component:ItemCartComponent},
  {path: 'mobiles', component: MobilesComponent},
  {path: 'dresses', component:DressesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RepportsComponent,
    LanguagePipe,
    RegisterComponent,
    allowspacesss,
    DashboardComponent,
    ContactsComponent,
    // EditcellsComponent,
    BootstrapdialogComponent,
    CanvaschartsComponent,
    ChunksComponent,
    DragdropComponent,
    MaterialComponent,
    PaginationComponent,
    ItemDetailsComponent,
    ItemCartComponent,
    ShoppingItemsComponent,
    MobilesComponent,
    DressesComponent,
   
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
   HttpClientModule,
   MatMenuModule,
   ChartsModule,
   DndModule,
   MatCardModule,
   MatGridListModule,
   MatFormFieldModule,
   MatCheckboxModule,
   MatDatepickerModule,
   MatRadioModule,
   MatSelectModule,
   MatSlideToggleModule,
   MatExpansionModule,
   MatButtonModule,
   MatNativeDateModule,
   HttpModule,
   ModalModule.forRoot(),
   RouterModule.forRoot(routes),
   BsDropdownModule.forRoot(),
   PopoverModule.forRoot(),
   MatSidenavModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    PopoverModule.forRoot(),
  ],
  providers: [DatePipe, PageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
