import React, { Component } from "react";
import { connect } from "react-redux";

import {
  loadOperations,
  setSelectedDate
} from "../../store/statisticsPage/actions";

import "./StatisticsPage.scss";

import DateBox from "../../components/statisticsPage/DateBox/DateBox";
import OperationList from "../../components/statisticsPage/OperationList/OperationList";
import StatChart from "../../components/statisticsPage/StatChart/StatChart";
import TopSpanding from "../../components/statisticsPage/TopSpanding/TopSpanding";

class StatisticsPage extends Component {
  componentDidMount() {
    const {
      loadOperations,
      selectedDate,
      user: { id }
    } = this.props;
    loadOperations(id, selectedDate.startDate, selectedDate.finishDate);
  }

  componentDidUpdate() {
    if (!this.props.isRelevant) {
      const {
        loadOperations,
        selectedDate,
        user: { id }
      } = this.props;
      loadOperations(id, selectedDate.startDate, selectedDate.finishDate);
    }
  }

  render() {
    console.log(
      "operat",
      this.props.operations,
      "date",
      this.props.selectedDate
    );
    return (
      <div className={"statistics-page"}>
        <StatChart operations={this.props.operations} />
        <DateBox
          setSelectedDate={this.props.setSelectedDate}
          selectedDate={this.props.selectedDate}
        />
        <TopSpanding />
        <OperationList
          operations={this.props.operations}
          categories={this.props.categories}
          currency={this.props.user.currency}
        />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.auth.authorizedUser,
    operations: store.statisticsPage.operations,
    categories: store.app.categories,
    selectedDate: store.statisticsPage.selectedDate,
    isRelevant: store.statisticsPage.isRelevant
  };
}

const mapDispatchToProps = { loadOperations, setSelectedDate };

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
