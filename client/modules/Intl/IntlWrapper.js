import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

export function IntlWrapper(props) {
  return (
    <IntlProvider {...props.intl} >
      {props.children}
    </IntlProvider>
  );
}

IntlWrapper.propTypes = {
  children: propTypes.element.isRequired,
  intl: propTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(IntlWrapper);
