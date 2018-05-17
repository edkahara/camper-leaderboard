//import the necessary files
import React from 'react';

//create a class for the table that will display the top 100 campers and export it
export class Table extends React.Component {
  render() {
    const top100 = this.props.top100;
    const mostRecentList = this.props.mostRecent;
    const allTimeList = this.props.allTime;
    return(
      <table>
        <thead>
          <tr className="titles">
            <td className="position"><h4><strong>#</strong></h4></td>
            <td><h4><strong>Camper</strong></h4></td>
            <td>{mostRecentList}</td>
            <td>{allTimeList}</td>
          </tr>
        </thead>
        <tbody>
          {top100.map((user, index) => (
            <tr key={index}>
              <td className='position centralized'>{index + 1}</td>
              <td><div className="profile"><a href={'https://www.freecodecamp.org/' + user.username}><img src={user.img} alt='' /> {user.username}</a></div></td>
              <td className="centralized">{user.recent}</td>
              <td className="centralized">{user.alltime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};
