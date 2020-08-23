/* eslint-disable */
import React from 'react';
import { Breadcrumbs } from 'wix-style-react';

class BreadcrumbsEllipsis extends React.Component {
  render() {
    const items = [
      { id: 1, value: 'short text' },
      { id: 2, value: 'long text that is going to be cut off at some point' },
      { id: 3, value: 'short text' },
    ];

    return <Breadcrumbs items={items} />;
  }
}

export default BreadcrumbsEllipsis;
