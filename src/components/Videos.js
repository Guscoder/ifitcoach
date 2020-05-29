import React from "react";
import VideoCard from "./VideoCard";
import "./videos.scss";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          image: "img_marketing_web_cardimg_marketing_web_card@2x_(24).png",
          avatarImage: "puspure_sanita_avatar_002.png",
          title: "Lake Inniscarra, Ireland--Pyramid",
          time: "30:53",
          distance: "6,248 M",
          viewDetails: "view details",
        },
        {
          image: "img_marketing_web_cardimg_marketing_web_card@2x_(18).png",
          avatarImage: "francia_susan_avatar_001.png",
          title: "Performance Series",
          time: "",
          distance: "",
          viewDetails: "",
        },
        {
          image: "img_marketing_web_cardimg_marketing_web_card@2x_(25).png",
          avatarImage: "_Alex_Silver_Fagan.png",
          title: "Slow Pulls and Fast Intervals",
          time: "44:13",
          distance: "9,948 M",
          viewDetails: "",
        },
        {
          image: "img_marketing_web_cardimg_marketing_web_card@2x_(19).png",
          avatarImage: "gregory_alex_avatar_01.png",
          title: "20 Minutes to Toned",
          time: "",
          distance: "",
          viewDetails: "",
        },
        {
          image: "img_marketing_web_cardimg_marketing_web_card@2x_(32).png",
          avatarImage: "whipple_mary_hero3x_001.png",
          title: "Charles Race, Boston, Massachusetts",
          time: "36:22",
          distance: "8,648 M",
          viewDetails: "",
        },
        {
          image: "img_marketing_web_cardimg_marketing_web_card@2x_(20).png",
          avatarImage: "eden_hannah_avatar_03.png",
          title: "Full-Body HIIT Series",
          time: "",
          distance: "",
          viewDetails: "",
        },
        {
          image: "img_marketing_web_cardimg_marketing_web_card@2x_(35).png",
          avatarImage: "nanchengwa_desmond_avatar_003.png",
          title: "Kafue River, Zambia--Power Stroke Pyramid",
          time: "22:22",
          distance: "4,660 M",
          viewDetails: "",
        },
        {
          image: "img_marketing_web_cardimg_marketing_web_card@2x_(21).png",
          avatarImage: "_Gideon_Akande.png",
          title: "Shred & Burn Series",
          time: "",
          distance: "",
          viewDetails: "",
        },
      ],
    };
  }

  renderVideoCards = () => {
    return this.state.videos.map((video) => {
      console.log(video);
      return <VideoCard video={video} key={video.key} />;
    });
  };

  render() {
    return <div className="videos">{this.renderVideoCards()}</div>;
  }
}

export default Videos;
