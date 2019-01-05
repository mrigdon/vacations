import React from "react";
import IconButton from "./IconButton";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const animationDuration = 200;

export default class VacationImage extends React.Component {
  state = { isHolding: false, isHeld: false };

  handleMouseDown = () => {
    this.setState({ isHolding: true });
    this.holdTimer = setTimeout(() => {
      this.setState({ isHeld: true });
      this.props.onHeld();
    }, 1000);
  };

  handleMouseUp = () => {
    if (this.state.isHeld) return;
    clearTimeout(this.holdTimer);
  };

  render() {
    const { isHeld } = this.state;
    const { src, onHeld, className, allHeld, ...props } = this.props;
    return (
      <a
        {...props}
        className={classnames("vacation-image", className)}
        href="javascript:void(0)"
        style={{ backgroundImage: `url(${src})` }}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <ReactCSSTransitionGroup
          transitionName="vacation-image__delete"
          transitionLeaveTimeout={animationDuration}
          transitionEnterTimeout={animationDuration}
        >
          {allHeld && (
            <IconButton
              className="vacation-image__delete"
              icon={faTimesCircle}
              size="2x"
            />
          )}
        </ReactCSSTransitionGroup>
      </a>
    );
  }
}