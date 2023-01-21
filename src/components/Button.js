import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // contextType is a reserved keyword and should be used as is
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
