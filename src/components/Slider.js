import React from "react";
import { Link } from "gatsby";
import s from "../style/dist/Slider.module.css";

/**
 *
 * @param {*} props Includes: blogTitles, paths
 */
export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, touchX: 0 };
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  handleSlideChange(delta) {
    const next = this.state.index + delta;
    if (!(next < 0) && !(next > this.props.paths.length - 1)) {
      this.setState({ index: this.state.index + delta });
    }
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.setState({ touchX: e.touches[0].clientX });
  }

  handleTouchMove(e) {
    e.preventDefault();
    const clientX = e.touches[0].clientX;
    const diffX = this.state.touchX - clientX;
    if (diffX > 200) {
      this.setState({ touchX: clientX });
      this.handleSlideChange(1);
    } else if (diffX < -200) {
      this.setState({ touchX: clientX });
      this.handleSlideChange(-1);
    }
  }

  render() {
    const { paths } = this.props;
    const nav_dots = paths.map((url, index) =>
      index === this.state.index ? (
        <li key={index.toString()} className={s.nav_dots_selected}></li>
      ) : (
        <li key={index.toString()}></li>
      )
    );
    return (
      <Link
        className={`${s.container} ${this.props.className}`}
        onTouchMove={this.handleTouchMove.bind(this)}
        onTouchStart={this.handleTouchStart.bind(this)}
      >
        <p>{this.props.blogTitles[this.state.index]}</p>
        <ul className={s.nav_dots}>{nav_dots}</ul>
      </Link>
    );
  }
}
