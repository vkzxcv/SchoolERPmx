import React from 'react';
import RtButton from 'react-toolbox/lib/button/Button';
import {Link} from 'react-router';

export class Button extends React.Component {
  render() {
    const {href, ...otherProps} = this.props;

    if (href == undefined) {
      return <RtButton {...otherProps}/>;
    }

    return (
      <Link to={href}>
        <RtButton {...otherProps} accent raised/>
      </Link>
    );
  }
};

export default Button;
