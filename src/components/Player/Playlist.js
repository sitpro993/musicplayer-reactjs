import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './playlist.scss'
function Playlist(props) {
    return (
        <div className="playlist">
            {
                props.songs.map((song, index) => (
                    <div
                        key={index}
                        className={index === props.currentSongIndex ? "song active-list" : "song"}
                        onClick={() => props.setCurrentSongIndex(index)}
                    >
                        <div className="thumb" style={{ backgroundImage: `url(${song.img_src})` }}>
                        </div>
                        <div className="body" >
                            <h3 className="title">{song.title}</h3>
                            <p className="author">{song.artist}</p>
                        </div>
                        <div className="option">
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default Playlist;