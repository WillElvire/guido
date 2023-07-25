import { NgModule } from "@angular/core";
import { UserStore } from "src/app/store/user$/user.store";

@NgModule({
  providers : [UserStore],
  imports :  []
})
export class StoreModules{

}
