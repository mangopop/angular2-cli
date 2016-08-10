/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MyNewPipePipe } from './my-new-pipe.pipe';

describe('Pipe: MyNewPipe', () => {
  it('create an instance', () => {
    let pipe = new MyNewPipePipe();
    expect(pipe).toBeTruthy();
  });
});
