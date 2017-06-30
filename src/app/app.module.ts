import { NgModule } from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import { AppComponent } from "./app.component";
import { TextFilter } from "./shared/app.testfilter";
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,TextFilter],
    bootstrap: [AppComponent]
})
export class AppModule {}