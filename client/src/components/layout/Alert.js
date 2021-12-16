import PropTypes from "prop-types";
import { connect } from "react-redux";

//Check if there are elements in alert state props, if it does create div with alert parameters
const Alert = ({ alerts }) =>
  alert !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  //get alert state from reducer
  alerts: state.alert,
});

//connect subscribe component to store
export default connect(mapStateToProps)(Alert);
