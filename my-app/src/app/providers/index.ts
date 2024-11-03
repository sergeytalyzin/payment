import compose from 'compose-function';
import WithAntd from './with-antd';
import withRouter from './with-router';

const withProviders = compose(withRouter, WithAntd);
export default withProviders;
