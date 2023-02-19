import * as React from 'react';
import './ExampleComponent.css';

export default class ExampleComponent extends React.Component {
  public render(): JSX.Element {
    return (
      <div className='Example-container'>
        <p className='Example-class'>example text</p>
      </div>
    );
  }
}


