import React from "react";
import "./videocard.scss";

class VideoCard extends React.Component {
  renderTimeIcon = (video) => {
    if (video.distance) {
      return (
        <>
          <img
            src={require("../assets/images/_icn_timer_line.png")}
            alt="activity"
            className="timer-image"
          />
          <span className="video-card_time">{video.time}</span>
        </>
      );
    }
  };
  renderDistanceIcon = (video) => {
    if (video.distance) {
      return (
        <>
          <img
            src={require("../assets/images/_icn_distance_line.png")}
            alt="activity"
            className="distance-image"
          />
          <span className="video-card_distance">{video.distance}</span>
        </>
      );
    }
  };

  render() {
    let video = this.props.video;
    return (
      <div className="video-card">
        <img
          src={require(`../assets/images/${video.image}`)}
          alt=""
          className="video-card_header-image"
        />
        <div className="video-card_header">
          <h3 className="video-card_title">{video.title}</h3>
          <img
            src={require(`../assets/images/${video.avatarImage}`)}
            alt=""
            className="video-card_title-image"
          />
        </div>
        <div className="video-card_details">
          {this.renderTimeIcon(video)}
          {this.renderDistanceIcon(video)}
        </div>
        <div className="video-card_view-details">{video.viewDetails}</div>
      </div>
    );
  }
}

export default VideoCard;
