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

  it('transforms and shows active items if show === "active"', () => {
    expect(pipe.transform(items,'active')).toEqual(
      [
        { "text": 'item1', "completed": false }
      ]
    );
  });

  it('transforms and shows completed items if show === "completed"', () => {
    expect(pipe.transform(items,'completed')).toEqual(
      [
        { "text": 'item2', "completed": true }
      ]
    );
  });

    it('transforms and shows all items if show === "all"', () => {
    expect(pipe.transform(items,'all')).toEqual(
      [
        { "text": 'item1', "completed": false },
        { "text": 'item2', "completed": true }
      ]
    );
  });
});
