import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MOCKITEMS} from '../mock-items';

@Component({
  moduleId: module.id,
  selector: 'app-todo-input',
  templateUrl: 'todo-input.component.html',
  styleUrls: ['todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  //There if this component was reused, this might be helpful. Otherwise I cannot see benifit, it's not that much different to test either.
  // but this type of thing is strongly suggested...

  constructor() { }
  ngOnInit() {  }

  @Output()
  added:EventEmitter<string> = new EventEmitter();

  items = MOCKITEMS; //not able to remove from this in test?

  addItem(newItem:string){
    if(newItem){
        newItem = newItem.trim();
        // Pure pipe won't update display because heroes array reference is unchanged
        // but using a impure pipe will watch mutations        
        this.items.push({text:newItem,completed:false});
        // Pipe updates display because heroes array is a new object
        // this.items = this.items.concat({text:newItem,completed:false});
        
        //emit event to parent, which in turn calls a method on the parent 
        // of course we could send a value and using parent method to assign this etc
        this.added.emit('added');         
    }

    //TODO we need to clear input upon entering item, cannot do this with blur nicely
  }

}
