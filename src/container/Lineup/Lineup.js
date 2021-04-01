import React, { useState } from "react";
import Board from "../../components/Board/Board";
import Subs from "./Substitutes/Substitutes";

const Lineup = props => {
    const [selectedBenchPlayer, setSelectedBenchPlayer] = useState({})
    const [selectedStartingPlayer, setSelectedStartingPlayer] = useState({})

    const players = {
        GK: [],
        DEF: [],
        MID: [],
        FWD: [],
        SUB: []
    }

    if (selectedStartingPlayer.index >= 0 && selectedBenchPlayer.index >= 0) {
        setSelectedBenchPlayer({})
        setSelectedStartingPlayer({})
    }

    const fillTeam = role => {
        // fills the players array in a certain role e.g GK or MID...
        props.team[role].forEach(teamPlayer => {
            let player = props.players[role].find(SquadPlayer => SquadPlayer.position === teamPlayer)
            if (player) { players[role].push(player) }
        })
    }

    fillTeam("GK")
    fillTeam("DEF")
    fillTeam("MID")
    fillTeam("FWD")
    props.team.SUB.forEach(teamPlayer => {
        // this function fills the substitutes
        let player = props.players.GK.find(SquadPlayer => SquadPlayer.position === teamPlayer)
        if (!player)
            player = props.players.DEF.find(SquadPlayer => SquadPlayer.position === teamPlayer)
        if (!player)
            player = props.players.MID.find(SquadPlayer => SquadPlayer.position === teamPlayer)
        if (!player)
            player = props.players.FWD.find(SquadPlayer => SquadPlayer.position === teamPlayer)

        players.SUB.push(player)
    })

    return <>
        <Board
            players={players}
            setSelectedPlayer={setSelectedStartingPlayer}
        />
        <Subs
            players={players.SUB}
            setSelectedPlayer={setSelectedBenchPlayer}
        />
    </>
}

export default Lineup;