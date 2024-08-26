import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // tus componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Agrega esta línea
    // otros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
