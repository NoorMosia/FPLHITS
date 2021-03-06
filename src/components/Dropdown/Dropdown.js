import React, { Component } from 'react';

class SelectPage extends Component {
    render() {
        return (
            <div>
                <select onChange={(event) => this.props.onChange(event.target.value)} className="browser-default custom-select">
                    <option value="All">All</option>
                    <option value="GK">Goalkeepers</option>
                    <option value="DEF">Defenders</option>
                    <option value="MID">Midfielders</option>
                    <option value="FWD">Forwards </option>
                </select>
            </div>
        );
    }
}

export default SelectPage;




// class FavouriteTeam extends Component {
//     state = {
//       teams: [],
//       selectedTeam: "",
//       validationError: ""
//     };

//     componentDidMount() {
//       fetch(
//         "http://localhost:26854/api/premiershipteams"
//       )
//         .then(response => {
//           return response.json();
//         })
//         .then(data => {
//           let teamsFromApi = data.map(team => {
//             return { value: team, display: team };
//           });
//           this.setState({
//             teams: [
//               {
//                 value: "",
//                 display:
//                   "(Select your favourite team)"
//               }
//             ].concat(teamsFromApi)
//           });
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }

//     render() {
//       return (
//         <div>
//           <select
//             value={this.state.selectedTeam}
//             onChange={e =>
//               this.setState({
//                 selectedTeam: e.target.value,
//                 validationError:
//                   e.target.value === ""
//                     ? "You must select your favourite team"
//                     : ""
//               })
//             }
//           >
//             {this.state.teams.map(team => (
//               <option
//                 key={team.value}
//                 value={team.value}
//               >
//                 {team.display}
//               </option>
//             ))}
//           </select>
//           <div
//             style={{
//               color: "red",
//               marginTop: "5px"
//             }}
//           >
//             {this.state.validationError}
//           </div>
//         </div>
//       );
//     }
//   }