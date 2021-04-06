import React from "react";
import Board from "../../components/Board/Board";
import Subs from "./Substitutes/Substitutes";

const Lineup = props => {
    const players = {
        GK: [],
        DEF: [],
        MID: [],
        FWD: [],
        SUB: []
    }


    const fillTeam = role => {
        // fills the players array in a certain role e.g GK or MID...
        props.team[role].forEach(teamPlayer => {
            let player = props.players[role].find(SquadPlayer => SquadPlayer.placement === teamPlayer)
            if (player) { players[role].push(player) }
        })
    }

    fillTeam("GK")
    fillTeam("DEF")
    fillTeam("MID")
    fillTeam("FWD")
    props.team.SUB.forEach(teamPlayer => {
        // this function fills the substitutes
        let player = props.players.GK.find(SquadPlayer => SquadPlayer.placement === teamPlayer)
        if (!player)
            player = props.players.DEF.find(SquadPlayer => SquadPlayer.placement === teamPlayer)
        if (!player)
            player = props.players.MID.find(SquadPlayer => SquadPlayer.placement === teamPlayer)
        if (!player)
            player = props.players.FWD.find(SquadPlayer => SquadPlayer.placement === teamPlayer)

        players.SUB.push(player)
    })

    return <>
        <Board
            players={players}
            setSelectedPlayer={props.setSelectedStartingPlayer}
            selectedPlayer={props.selectedStartingPlayer}
        />
        <Subs
            players={players.SUB}
            setSelectedPlayer={props.setSelectedBenchPlayer}
            selectedPlayer={props.selectedBenchPlayer}
        />
    </>
}

export default Lineup;