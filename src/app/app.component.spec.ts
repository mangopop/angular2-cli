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

  it('should have as title Todo',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('Todo');
    }));

  // let items = ['item1','item2'];

  it('should have items defined',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.items).toBeDefined();
    }));

  it('should have add item to array',
    inject([AppComponent], (app: AppComponent) => {
      app.addItem('string');
      expect(app.items.length).toEqual(2);
    }));

  it('should have remove item from array',
    inject([AppComponent], (app: AppComponent) => {
      app.removeItem('string');
      expect(app.items.length).toEqual(0);
    }));
});
