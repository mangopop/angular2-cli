/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Items} from './items';

describe('MOCKITEMS', () => {
  it('has text', () => {
    let item: Items = {text: 'Super Cat', completed: false};
    expect(item.text).toEqual('Super Cat');
  });
  it('has completed', () => {
    let item: Items = {text: 'Super Cat', completed: false};
    expect(item.completed).toEqual(false);
  });
});
