import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const Pinfo = this.props.pinfoModule;
    return (
      <div className="App">
        <Pinfo 
          galleryComponent={this.props.galleryComponent}
          tabsComponent = {this.props.tabsComponent}
          tagComponent = {this.props.tagComponent}
          descriptionComponent={this.props.descriptionComponent}
          iconComponent= {this.props.iconComponent}
          optionComponent={this.props.optionComponent}
          buttonComponent={this.props.buttonComponent}
        />
        
      </div>
    );
  }
}

export default App;
