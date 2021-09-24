import React, { useState, useRef, useEffect } from 'react'
import Controls from './Controls';
import { motion, useAnimation } from 'framer-motion';



function Player(props) {
    const audioEl = useRef(null);
    const progressEl = useRef(null)
    const cdEl = useRef(null)
    const [cdWidth, setCdWidth] = useState(0)
    const [scrolled, setScrolled] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false)
    const [isRandom, setIsRandom] = useState(false)

    const controlsAnimation = useAnimation()

    const spinTransition = {
        loop: Infinity,
        duration: 10,
        ease: 'linear'
    }



    //lấy ra width của cd
    useEffect(() => {
        setCdWidth(cdEl.current.offsetWidth)

    }, [cdEl, cdWidth]);


    //lấy ra giá trị scroll
    window.addEventListener('scroll', () => {
        setScrolled(window.scrollY)
    })

    //set width và opacity cho .cd khi scroll
    if (cdEl.current) {
        let newWidth = cdWidth - scrolled
        cdEl.current.style.width = newWidth > 0 ? newWidth + 'px' : 0 + 'px'
        cdEl.current.style.opacity = newWidth / cdWidth
    }


    //play hoặc pause phụ thuộc và giá trị isPlaying và cd quay
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
            controlsAnimation.start({
                rotate: 360
            })
        } else {
            audioEl.current.pause();
            controlsAnimation.stop()
        }
    });




    //làm chạy thanh progress
    const setProgress = () => {
        const progressPercent = audioEl.current.currentTime / audioEl.current.duration * 100
        progressEl.current.value = progressPercent
    }

    //seek nhạc trên thanh progress
    const seekMusic = (e) => {
        const seekTime = audioEl.current.duration * e.target.value / 100
        audioEl.current.currentTime = seekTime
    }

    //nextsong hoặc prevsong tùy vào chế độ random 
    const skipSong = (forwards = true) => {
        if (forwards) {
            if (isRandom === false) {
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp++;

                    if (temp > props.songs.length - 1) {
                        temp = 0;
                    }
                    return temp;
                });
            } else {
                let temp = props.currentSongIndex
                while (temp === props.currentSongIndex) {
                    temp = Math.floor(Math.random() * (props.songs.length))
                }
                props.setCurrentSongIndex(temp)

            }

        } else {
            if (isRandom === false) {
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp--;

                    if (temp < 0) {
                        temp = props.songs.length - 1;
                    }

                    return temp;
                });
            }
            else {
                let temp = props.currentSongIndex
                while (temp === props.currentSongIndex) {
                    temp = Math.floor(Math.random() * (props.songs.length))
                }
                props.setCurrentSongIndex(temp)
            }

        }
    }

    //tự động chuyển bài tùy vào chế độ random hay repeat
    const nextAuto = () => {
        if (isRepeat === false)
            if (isRandom === false) {
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp++;
                    if (temp > props.songs.length - 1) {
                        temp = 0;
                    }
                    return temp;
                });
            } else {

            }
        else {
            let temp = props.currentSongIndex
            props.setCurrentSongIndex(temp)
            audioEl.current.play()
        }
    }

    return (

        <div className="dashboard">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl} onTimeUpdate={setProgress} onEnded={nextAuto}></audio>
            <header>
                <h4>Now playing:</h4>
                <h2 >{props.songs[props.currentSongIndex].title}</h2>
            </header>

            <div className="cd" ref={cdEl}>
                <motion.div
                    className="cd-thumb"
                    style={{ backgroundImage: `url(${props.songs[props.currentSongIndex].img_src})` }}
                    animate={controlsAnimation}
                    transition={spinTransition}

                />
            </div>
            <Controls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
                isRepeat={isRepeat}
                setIsRepeat={setIsRepeat}
                isRandom={isRandom}
                setIsRandom={setIsRandom}

            />
            <input id="progress" className="progress" type="range" defaultValue="0" step="0.1" min="0" max="100" ref={progressEl} onChange={seekMusic} />
        </div>
    )
}

export default Player;
