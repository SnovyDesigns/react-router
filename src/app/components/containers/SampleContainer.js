import { connect } from 'react-redux';
import Sample from './Sample';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample);
