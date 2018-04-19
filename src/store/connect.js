import React from 'react';

import { Consumer } from '../store/stateCtx';

const connect = (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Consumer`;
    render() {
      return (
        <Consumer>
          {(state) => {
            return <Component {...this.props} state={state} />;
          }}
        </Consumer>
      );
    }
  };
};

export default connect;
