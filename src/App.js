import React from 'react';
import './App.css';
import RichEditorExample from './components/editor';
import GetData from './components/getData';
import 'draft-js/dist/Draft.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <div className="side-padding-20">
          <RichEditorExample
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleBeforeInput={this._handleBeforeInput}
          handlePastedText={this._handlePastedText} />
          </div>

          <br/>
          <div>
            
          </div>
      </div>
    );
  }
}
