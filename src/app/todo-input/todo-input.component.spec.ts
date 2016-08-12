/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TodoInputComponent } from './todo-input.component';

describe('Component: TodoInput', () => {
  it('should create an instance', () => {
    let component = new TodoInputComponent();
    expect(component).toBeTruthy();
  });
});
