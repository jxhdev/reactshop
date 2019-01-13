import * as React from 'react';

interface IProps {
  loading: boolean;
}

const Loader: React.FunctionComponent<IProps> = props => {
  if (!props.children) {
    return null;
  }
  return props.loading ? (
    <div>Hi i am loading</div>
  ) : props.children ? (
    <>{props.children}</>
  ) : null;
};

export default Loader;
