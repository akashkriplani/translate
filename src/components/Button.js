import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // contextType is a reserved keyword and should be used as is
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
