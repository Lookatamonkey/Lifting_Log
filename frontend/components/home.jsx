import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';
import { Grid, Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import merge from 'lodash';
import LogFormContainer from './log_form_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // temporarily no state

    this.handleClick = this.handleClick.bind(this);
    this.renderLogs = this.renderLogs.bind(this);
  }

  handleClick() {
    this.props.requestLogout();
  }

  componentDidMount() {
    this.props.requestAllLogs();
  }

  renderLogs() {
    if (this.props.logs.length > 0) {
      let totalFat = 0;
      let totalCarb = 0;
      let totalProtein = 0;
      const logList = this.props.logs.map((log, idx) => {
        totalFat += log.fat;
        totalCarb += log.carb;
        totalProtein += log.protein;
        return (
          <li key={`log-${idx}`}>
            Food: {log.food}
            Carb: {log.carb}
            Fat: {log.fat}
            Protein: {log.protein}
          </li>
        );
      });
      return (
        <div>
          <ul>
            { logList }
          </ul>
          <div>
            Fat: { totalFat }
            Carb: { totalCarb }
            Protein: { totalProtein }
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
    <Grid className='home-outer'> 

      {/* Row 1 */}
      <Row>
        <Col xs={0} s={0} md={11} lg={11} xl={11}/>
        <Col xs={12} s={12} md={1} lg={1} xl={1}
          style={{}}
        >
          <Button className="logout_button" onClick={ this.handleClick }>Logout</Button>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row>
        <Col xs={0} s={0} md={3} lg={1} xl={1}/>
        <Col xs={12} s={12} md={4} lg={4} xl={4}>
        <LogFormContainer />
        </Col>

        <Col xs={0} s={0} md={7} lg={7} xl={7}>
        { this.renderLogs() }
        </Col>
      </Row> 

    </Grid>
  );
}

}

export default Home;