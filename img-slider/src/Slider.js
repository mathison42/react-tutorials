import React, { Component } from 'react';
import Slide from './Slide';
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
          { <Slide num= { this.state.slideCount } /> }

          {/* Arrow Functionality */}
          <div>
          <RightArrow nextSlide={this.nextSlide} />
          <LeftArrow previousSlide={this.previousSlide} />
          </div>
      </div>
    );
  }
}
