import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Todo';
  //we need an array to hold the todo items
  items = [
    {text:'item1',completed:false},
    {text:'item2',completed:true}
  ];
  
  //also need to hold state of completion
  //could mark by array index (but this changes when new items are added)
  completedItems: string[] = [];

  //the item object is passed
  //the strikethrough class is also added or removed
  toggleCompleted(item:Object,index:number){
    // console.log(`toggled with ${item}`);
    // console.log(index);
    // console.log(this.items[index]);
    this.items[index].completed = !this.items[index].completed;
  }

  //we need a handler push the items to the array when add is clicked or enter is pressed
  addItem(newItem:string){
    if(newItem){
        this.items.push({text:newItem,completed:false});        
    }
    //we need to clear input upon entering item, cannot do this with blur nicely
  }

  //we need a handler remove items from the array
  removeItem(index){
    console.log(index);    
    this.items.splice(index,1);
  }
}
