import React, { Component } from 'react';
import './app.css';
import ContentEditable from 'react-contenteditable';

class App extends Component {
  constructor(props) {
    super(props)
    this.contentEditable = React.createRef();
    this.state = {
      inputText: 'here',
      html: "<p>here</p>",
      test: '',
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    const empty =  "<p> </p>";
    this.setState({html:empty})   
  }


  handleChange = e => {
    // console.log(e.nativeEvent.data, e.nativeEvent,'here 2!') 
    // console.log(e.target.value, 'here 2')
    console.log("This is the target", e.target.value)
    // this.setState({html: e.target.value});
  };

  onBlur = e => {
    this.setState({html: "<p>here</p>"});
  }

  render() {
    return (
      <>
        <div className='header'>
          <p className='header-text'>01100011 01101100 01101001 01110100 01101111 01110010 01101001 01110011</p>
        </div>

        {/* <div className='w-input' onClick={this.handleClick} onChange={this.onChange} contentEditable="true">
            <p className='p-type'>{this.state.inputText}</p>
        </div> */}

        <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
              className='w-input'
              onClick={this.handleClick}
              onBlur={this.onBlur}
            />
      </>
    );
  }
}

export default App;