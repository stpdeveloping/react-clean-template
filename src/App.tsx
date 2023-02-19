import * as React from 'react';
import ExampleComponent from './modules/example-module/example-component';

export default class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className='App-container'>
        <ExampleComponent></ExampleComponent>
      </div>
    );
  }
}

