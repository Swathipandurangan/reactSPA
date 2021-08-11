import React from 'react';
import {render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NoteTaker from '../Components/noteTaker/NoteTaker';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('Button Checking',() => {
    act(() => {
        render(<NoteTaker />,container);
        const button = container.querySelector('button');
        expect(button.innerHTML).toBe('Submit');
    })
})
it('Contatin title text box',() => {
    act(() => {
        render(<NoteTaker />,container);
        const title = container.querySelector('input').getAttribute('placeholder');
        expect(title).toBe('Note Title');
    })
})