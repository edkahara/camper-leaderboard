//import the necessary files
import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from './table';

//create a class that loads and shows the top 100 campers in the last 30 days and export it
export class mostRecentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mostRecent: []};
  }
  componentWillMount() {//load data from the API before the component renders
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(response => {
      return response.json();
    }).then(json => {
      this.setState({mostRecent: json});
    });
  }
  render() {
    const mostRecentTop100 = this.state.mostRecent;
    const link = '/all-time';
    const mostRecentList = <h4><strong>Points In Past 30 Days &#9660;</strong></h4>;
    const allTimeList = <Link to={link}><h4><strong>All Time Points</strong></h4></Link>;
    return(
      <div className="table">
        <div className="header"><h1>FREE CODE CAMP LEADERBOARD</h1></div>
        <Table top100={mostRecentTop100} linkTo={link} mostRecent={mostRecentList} allTime={allTimeList} />
      </div>
    );
  }
};
