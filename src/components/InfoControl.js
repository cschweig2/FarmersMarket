import React from "react";
import ProduceList from "./ProduceList";
import WeeklySchedule from "./WeeklySchedule";

class InfoControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceListVisibleOnPage: false,
      weeklyScheduleVisibleOnPage: false,
      currentProduceAndMarketVisibleOnPage: true
    };
  }

  produceViewClick = () => {
    this.setState(prevState => ({
      produceListVisibleOnPage: !prevState.produceListVisibleOnPage
    }));
  }

  scheduleViewClick = () => {
    this.setState(prevState => ({
      weeklyScheduleVisibleOnPage: !prevState.weeklyScheduleVisibleOnPage
    }));
  }

  viewSeasonalProduce = () => {
    if (availableProduce.month && marketSchedule.day) {
      // display todays produce and schedule
    }
  }

  render() {
    let currentVisibleProduceState = null;
    let currentVisibleScheduleState = null;
    let produceListButton = "View Complete Produce List";
    let weeklyScheduleButton = "View Entire Weekly Schedule";
    if (this.state.produceListVisibleOnPage) {
      currentVisibleProduceState = <ProduceList />
    } else if (this.state.weeklyScheduleVisibleOnPage) {
      currentVisibleScheduleState = <WeeklySchedule />
    } else {
      currentVisibleProduceState = ?
    }
    return(
      <>
        {currentVisibleProduceState}
        {currentVisibleScheduleState}
        <button onClick={this.produceViewClick}>{produceListButton}</button>
        <button onClick={this.ScheduleViewClick}>{weeklyScheduleButton}</button>
      </>
    );
  }
}

export default InfoControl;
