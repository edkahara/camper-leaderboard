//import the necessary files
import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from './table';

//create a class that loads and shows the all time top 100 campers and export it
export class allTimeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {allTime: []};
  }
  componentWillMount() {//load data from the API before the component renders
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(response => {
      return response.json();
    }).then(json => {
      this.setState({allTime: json});
    });
  }
  render() {
    const allTimeTop100 = this.state.allTime;
    const link = '/';
    const mostRecentList = <Link to={link}><h4><strong>Points In Past 30 Days</strong></h4></Link>;
    const allTimeList = <h4><strong>All Time Points &#9660;</strong></h4>;
    return(
      <div className="table">
        <div className="header"><h1>FREE CODE CAMP LEADERBOARD</h1></div>
        <Table top100={allTimeTop100} linkTo={link} mostRecent={mostRecentList} allTime={allTimeList} />
      </div>
    );
  }
};
