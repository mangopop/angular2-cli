import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MOCKITEMS} from '../mock-items';

@Component({
  moduleId: module.id,
  selector: 'app-todo-input',
  templateUrl: 'todo-input.component.html',
  styleUrls: ['todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

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
        
        //TODO call parent but avoid strong coupling 
        this.added.emit('added');         
    }

    //TODO we need to clear input upon entering item, cannot do this with blur nicely
  }

}
