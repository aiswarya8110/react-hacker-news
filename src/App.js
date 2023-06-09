import React from 'react';
import SearchForm from './SearchForm';
import Buttons from './Buttons';
import Stories from './Stories';

class App extends React.Component{
  render(){
    return <React.Fragment>
      <SearchForm/>
      <Buttons/>
      <Stories/>
    </React.Fragment>
  }
}

export default App;
