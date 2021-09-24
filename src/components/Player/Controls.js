import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward, faRedoAlt, faRandom } from '@fortawesome/free-solid-svg-icons'
import './controls.scss'

function Controls(props) {


    return (
        <div className="control">
            <div className="btn btn-repeat" onClick={() => props.setIsRepeat(!props.isRepeat)}>
                <FontAwesomeIcon className={props.isRepeat ? "active" : ""} icon={faRedoAlt} />
            </div>
            <div className="btn btn-prev" onClick={() => props.skipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </div>
            <div className="btn btn-toggle-play" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </div>
            <div className="btn btn-next" onClick={() => props.skipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </div>
            <div className="btn btn-random" onClick={() => props.setIsRandom(!props.isRandom)}>
                <FontAwesomeIcon className={props.isRandom ? "active" : ""} icon={faRandom} />
            </div>
        </div>
    )
}

export default Controls
