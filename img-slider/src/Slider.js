import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        //slideCount: 1
        slideCount: Math.floor(Math.random() * 3)
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  nextSlide() {
      let newSlideCount = this.state.slideCount + 1
      if (newSlideCount > 2) {
          newSlideCount = 0
      }
      this.setState({ slideCount: newSlideCount })
  }

  previousSlide() {
      let newSlideCount = this.state.slideCount - 1
      if (newSlideCount < 0) {
          newSlideCount = 2
      }
      this.setState({ slideCount: newSlideCount })
  }

  render() {
    return (
      <div className="slider">
          {/* Slides go here */}
          { this.state.slideCount === 0 ? <SlideOne /> : null }
          { this.state.slideCount === 1 ? <SlideTwo /> : null }
          { this.state.slideCount === 2 ? <SlideThree /> : null }


          {/* Arrow Functionality */}
          <div>
          <RightArrow nextSlide={this.nextSlide} />
          <LeftArrow previousSlide={this.previousSlide} />
          </div>
      </div>
    );
  }
}
