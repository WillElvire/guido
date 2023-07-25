import { Injectable } from "@angular/core";
import { Store } from "../store";
import { UserState, UserStateDto } from "./user.state";

@Injectable({providedIn: 'root'})
export class UserStore extends Store<UserState> {

    constructor(){
      super(new UserState())
    }

    addUser(userDto : UserStateDto) {
      this.setState({ ...userDto});
      console.log("addUser",this.state);
    }

    getUser()  {
      console.log("getUser",this.state);
      return {...this.state}
    }

    removeUser(){
      this.setState({
        user : {},
        token : null
      })
    }
}
