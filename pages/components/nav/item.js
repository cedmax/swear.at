import React from 'react';
import Icon from 'components/icon';
import classes from './item.css';

export default ({ service, description, url }) => (
  <a
    className={`${classes.service} ${classes[service]}`}
    data-src={`img/gif/${service}.gif`}
    href={url}
    rel="noopener">
    <Icon service={service} />
    <span className={classes.tooltip}>{description}</span>
  </a>
)
