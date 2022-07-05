import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import {CgArrowLongLeft, CgArrowLongRight} from "react-icons/cg";

const Slide = ({ bg, children }) => {
    return (
        <div className="slider__slide">
            <div className="slider__slide_content" style={bg ? { backgroundImage: `url(${bg})` } : null}>
                {children}
            </div>
        </div>
    )
}

const Slider = ({ children, showNav, startFrom }) => {
    const slider = useRef();
    const [activeSlide, setActiveSlide] = useState(startFrom ? startFrom : 0);

    const showPrevSlide = () => {
        if (activeSlide > 0) {
            slider.current.style.transform = `translateX(${(activeSlide - 1) * -100}%)`;
            setActiveSlide(prev => prev - 1);
        }
    }

    const showNextSlide = () => {
        if (activeSlide < children.length - 1) {
            slider.current.style.transform = `translateX(${(activeSlide + 1) * -100}%)`;
            setActiveSlide(prev => prev + 1);
        }
    }

    const updateNavElements = (index) => {
        setActiveSlide(index);
        slider.current.style.transform = `translateX(${index * -100}%)`;
    }

    return (
        <div className="slider-wrapper">
            <div className="slider" ref={slider}>
                {children}
            </div>

            <div className="slider-wrapper__buttons">
                <button onClick={showPrevSlide} disabled={activeSlide === 0}>
                    <CgArrowLongLeft />
                </button>
                <button onClick={showNextSlide} disabled={activeSlide === children.length - 1}>
                    <CgArrowLongRight />
                </button>
            </div>

            {showNav && <div className="slider-wrapper__nav">
                {children.map((s, i) => <span key={i} className={activeSlide === i ? 'active' : ''}
                    onClick={() => updateNavElements(i)}></span>)}
            </div>}
        </div>
    )

}


export { Slide, Slider }