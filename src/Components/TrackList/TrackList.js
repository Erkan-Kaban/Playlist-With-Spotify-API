import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track name={track.name} artist={track.artist} album={track.album} key={track.id} />
                    }
                    )
                }
            </div>
        )
    }
}

export default TrackList