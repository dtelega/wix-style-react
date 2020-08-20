import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './MarketingPageLayout.st.css';
import { dataHooks } from './constants';

import { Layout, Cell } from '../Layout';

/** Marketing Page Layout */
class MarketingPageLayout extends React.PureComponent {
  state = {};

  render() {
    const {
      dataHook,
      className,
      size,
      sidePadding,
      verticalPadding,
      content,
      image,
      footer,
    } = this.props;

    return (
      <div
        data-hook={dataHook}
        className={st(
          classes.root,
          { size, sidePadding, verticalPadding },
          className,
        )}
      >
        <Layout>
          {content && (
            <Cell span={6}>
              <div className={classes.contentContainer}>{content}</div>
            </Cell>
          )}
          {image && (
            <Cell span={6}>
              <div className={classes.imageContainer}>{image}</div>
            </Cell>
          )}
          {footer && <Cell span={12}>{footer}</Cell>}
        </Layout>
      </div>
    );
  }
}

MarketingPageLayout.displayName = 'MarketingPageLayout';

MarketingPageLayout.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specifies the size of the marketing page layout.  The default value is 'large'. */
  size: PropTypes.string,

  /** Determine if to add side padding to the page */
  sidePadding: PropTypes.bool,

  /** Determine if to add vertical padding to the page */
  verticalPadding: PropTypes.bool,

  /** The page's content. Use: <MarketingPageLayoutContent/> */
  content: PropTypes.node,

  /** The page's image */
  image: PropTypes.node,

  /** The page's footer. Use <TestimonialList/> or <FeatureList/> */
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

MarketingPageLayout.defaultProps = {
  size: 'large',
  sidePadding: true,
  verticalPadding: true,
};

export default MarketingPageLayout;
