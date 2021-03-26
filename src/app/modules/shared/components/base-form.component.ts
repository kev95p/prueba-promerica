import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-base-form',
  template: ` <div>base works!!</div> `,
})
export class BaseFormComponent{

  protected dataForm:FormGroup = new FormGroup({})

  constructor(){
  }

}
