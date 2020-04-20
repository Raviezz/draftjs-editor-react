import React from 'react';
import './App.css';
import DraftJsEditor from './components/editor';
import 'draft-js/dist/Draft.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="side-padding-20">
          <DraftJsEditor
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
