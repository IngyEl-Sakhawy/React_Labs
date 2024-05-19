import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import styles from  "../Styles/Slider.module.css"

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            isPlaying: false,
            intervalId: null,
            images : [
                require("E:/iti/react/labs/demo/src/Images/1.jpg"),
                require("E:/iti/react/labs/demo/src/Images/2.jpg"),
                require("E:/iti/react/labs/demo/src/Images/3.jpg")
            ]
        };
    }

    handlePlay = () => {
        if (!this.state.isPlaying) {
            const intervalId = setInterval(this.nextSlide, 2000);
            this.setState({ isPlaying: true, intervalId });
        }
    };

    handleStop = () => {
        if (this.state.isPlaying) {
            clearInterval(this.state.intervalId);
            this.setState({ isPlaying: false, intervalId: null });
        }
    };

    nextSlide = () => {
        const { currentIndex, images } = this.state;
        const newIndex = (currentIndex + 1) % images.length;
        this.setState({ currentIndex: newIndex });
    };

    prevSlide = () => {
        const { currentIndex, images } = this.state;
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        this.setState({ currentIndex: newIndex });
    };

    render() {
        const { currentIndex, images } = this.state;
        return (
            <div>
                <div id="carouselExample" className={`carousel slide ${styles.carouselContainer}`}>
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
                                <img src={image} className={`${styles.img} ${styles.halfWidth}`} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={this.prevSlide}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={this.nextSlide}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <button type="button" className={styles.playButton} onClick={this.handlePlay}>Play</button>
                <button type="button" className={styles.stopButton} onClick={this.handleStop}>Stop</button>
                <button type="button" className={styles.nextButton} onClick={this.nextSlide}>Next</button>
                <button type="button" className={styles.prevButton} onClick={this.prevSlide}>Prev</button>

            </div>
        );
    }
}

export default Slider;
