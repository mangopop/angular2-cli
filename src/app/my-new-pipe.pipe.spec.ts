/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MyNewPipePipe } from './my-new-pipe.pipe';

describe('Pipe: MyNewPipe', () => {

  let items = [
    { "text": 'item1', "completed": false },
    { "text": 'item2', "completed": true }
  ];

  let pipe: MyNewPipePipe;
  beforeEach(() => {
    pipe = new MyNewPipePipe();
  });

  it('create an instance', () => {
    // let pipe = new MyNewPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms shows all items if show === "active"', () => {
    expect(pipe.transform(items,'active')).toEqual(
      [
        { "text": 'item1', "completed": false }
      ]
    );
  });
});
