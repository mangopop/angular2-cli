/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: AngularCli', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should title Todo',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('Todo');
    }));

  it('should have vars defined',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.items).toBeDefined();
      expect(app.activeItems).toBeDefined();
      expect(app.show).toBeDefined();
    }));

  it('should add item to array',
    inject([AppComponent], (app: AppComponent) => {
      app.addItem('string');
      expect(app.items.length).toEqual(2);
      expect(app.activeItems).toEqual(2);
    }));

  it('should remove item from array',    
    inject([AppComponent], (app: AppComponent) => {
      app.removeItem(1);
      //started with 1 added 1 and remove one should be 1
      expect(app.items.length).toEqual(1);
      expect(app.activeItems).toEqual(1);
    }));

  it('should calc active items',    
    inject([AppComponent], (app: AppComponent) => {
      app.calcActiveItems();
      expect(app.activeItems).toEqual(1);
    }));

  it('should toggle prop completed on object',
    inject([AppComponent], (app: AppComponent) => {
      // let obj = {text:'string',completed:false};
      app.toggleCompleted(app.items,0);
      expect(app.items[0].completed).toEqual(true);
    }));
});
