import React, { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Link,
  Route,
} from "react-router-dom";
import PortfolioEssayDetailed from "../userPortfolioEssays/essayDetailed";
import "./listOfEssay.scss";

const essayList = [
  {
    name: "Horizon",
    content:
      "They all agreed and nodded simultaneously, putting a half-hearted smile on Chans face. Realizing their attempt at making him feel better, he put on a determined face, and walked passed the group looking at the building in front of them. Chans determination was contagious as the eight of them lined up beside him, all with looks of pure determination and strength. They started walking towards their destination, but not without Chan reminding them of the rules." +
      "“Everyone remembers. Don’t wander off. Don’t make a mess. Don’t go anywhere without anyone else going with you, including the bathroom. Don’t cause a scene. Don’t talk to strangers. And. DO. NOT. PUT. ANYTHING IN THE CART THAT WE DON’T NEED. Got it?” Chan looked to his right, seeing four nods, he looked to his left, seeing four more nods. “Good. Now let’s do this.” The nine of them walked, with strong posture, straight through the gates of hell. Or in anyone else’s case, the door to the supermarket." +
      "Chan paced back and worth, running into Woojin a few times, as he was pacing in the opposite direction. Minho and Changbin just stood, leaning against the shelves on the opposite sides of the aisle. They looked at each other a few times, to anyone looking at the two, it would have looked like they were communicating to each other telepathically. Changbin jerked his head towards the two eldest." +
      "Changbin stared off above him thinking for a second before a grimace crossed his face. He leaned back against the shelf, and finally looked at the others. “I’ve decided to stay.” Saying it as if it was his idea." +
      "“Jeongin! Why are you just standing there?” Seungmin said getting off the ground, from when he bumped into Jeongin. The younger didn’t respond, only pointing to thing he was aweing at. Seungmin hesitantly looked at the display, his eyes immediately growing larger, mouth agape. Both maknaes bent looking through the glass. Both had huge eyes, mouths open." +
      "“Yeah, but I’m more relieved you guys are okay. What were you even looking at?” Chan asked looking over to the display case. Seeing a four-layer chocolate cake, with chocolate icing, and chocolate flowers. Topped with multiple chocolate covered strawberries, which was drizzled in strawberry sauce. “Okay… I fully understand why you snuck away.”" +
      "When they got to him, they stood over him just looking at him. “Suengmin, Jeongin, do you know where the others are?” Minho asked, killing the silence as Chan was still suffering on the ground.",

    date: "2020-09-01 01:01:00",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Ex",
    content:
      "They all agreed and nodded simultaneously, putting a half-hearted smile on Chans face. Realizing their attempt at making him feel better, he put on a determined face, and walked passed the group looking at the building in front of them. Chans determination was contagious as the eight of them lined up beside him, all with looks of pure determination and strength. They started walking towards their destination, but not without Chan reminding them of the rules." +
      "“Everyone remembers. Don’t wander off. Don’t make a mess. Don’t go anywhere without anyone else going with you, including the bathroom. Don’t cause a scene. Don’t talk to strangers. And. DO. NOT. PUT. ANYTHING IN THE CART THAT WE DON’T NEED. Got it?” Chan looked to his right, seeing four nods, he looked to his left, seeing four more nods. “Good. Now let’s do this.” The nine of them walked, with strong posture, straight through the gates of hell. Or in anyone else’s case, the door to the supermarket." +
      "Chan paced back and worth, running into Woojin a few times, as he was pacing in the opposite direction. Minho and Changbin just stood, leaning against the shelves on the opposite sides of the aisle. They looked at each other a few times, to anyone looking at the two, it would have looked like they were communicating to each other telepathically. Changbin jerked his head towards the two eldest." +
      "Changbin stared off above him thinking for a second before a grimace crossed his face. He leaned back against the shelf, and finally looked at the others. “I’ve decided to stay.” Saying it as if it was his idea." +
      "“Jeongin! Why are you just standing there?” Seungmin said getting off the ground, from when he bumped into Jeongin. The younger didn’t respond, only pointing to thing he was aweing at. Seungmin hesitantly looked at the display, his eyes immediately growing larger, mouth agape. Both maknaes bent looking through the glass. Both had huge eyes, mouths open." +
      "“Yeah, but I’m more relieved you guys are okay. What were you even looking at?” Chan asked looking over to the display case. Seeing a four-layer chocolate cake, with chocolate icing, and chocolate flowers. Topped with multiple chocolate covered strawberries, which was drizzled in strawberry sauce. “Okay… I fully understand why you snuck away.”" +
      "When they got to him, they stood over him just looking at him. “Suengmin, Jeongin, do you know where the others are?” Minho asked, killing the silence as Chan was still suffering on the ground.",
    date: "2020-09-02 01:01:00",
    thumbnail:
      "https://static.billboard.com/files/2020/07/Stray-Kids-2020-cr-JYP-Entertainment-Billboard-1548-1594239171-768x433.jpg",
  },
  {
    name: "HOME;RUN",
    content:
      "They all agreed and nodded simultaneously, putting a half-hearted smile on Chans face. Realizing their attempt at making him feel better, he put on a determined face, and walked passed the group looking at the building in front of them. Chans determination was contagious as the eight of them lined up beside him, all with looks of pure determination and strength. They started walking towards their destination, but not without Chan reminding them of the rules." +
      "“Everyone remembers. Don’t wander off. Don’t make a mess. Don’t go anywhere without anyone else going with you, including the bathroom. Don’t cause a scene. Don’t talk to strangers. And. DO. NOT. PUT. ANYTHING IN THE CART THAT WE DON’T NEED. Got it?” Chan looked to his right, seeing four nods, he looked to his left, seeing four more nods. “Good. Now let’s do this.” The nine of them walked, with strong posture, straight through the gates of hell. Or in anyone else’s case, the door to the supermarket." +
      "Chan paced back and worth, running into Woojin a few times, as he was pacing in the opposite direction. Minho and Changbin just stood, leaning against the shelves on the opposite sides of the aisle. They looked at each other a few times, to anyone looking at the two, it would have looked like they were communicating to each other telepathically. Changbin jerked his head towards the two eldest." +
      "Changbin stared off above him thinking for a second before a grimace crossed his face. He leaned back against the shelf, and finally looked at the others. “I’ve decided to stay.” Saying it as if it was his idea." +
      "“Jeongin! Why are you just standing there?” Seungmin said getting off the ground, from when he bumped into Jeongin. The younger didn’t respond, only pointing to thing he was aweing at. Seungmin hesitantly looked at the display, his eyes immediately growing larger, mouth agape. Both maknaes bent looking through the glass. Both had huge eyes, mouths open." +
      "“Yeah, but I’m more relieved you guys are okay. What were you even looking at?” Chan asked looking over to the display case. Seeing a four-layer chocolate cake, with chocolate icing, and chocolate flowers. Topped with multiple chocolate covered strawberries, which was drizzled in strawberry sauce. “Okay… I fully understand why you snuck away.”" +
      "When they got to him, they stood over him just looking at him. “Suengmin, Jeongin, do you know where the others are?” Minho asked, killing the silence as Chan was still suffering on the ground.",

    date: "2020-10-01 01:01:00",
    thumbnail:
      "https://www.officiallykmusic.com/wp-content/uploads/2020/10/seventeen-home-run-mv.png",
  },
  {
    name: "NCT 2020",
    content:
      "They all agreed and nodded simultaneously, putting a half-hearted smile on Chans face. Realizing their attempt at making him feel better, he put on a determined face, and walked passed the group looking at the building in front of them. Chans determination was contagious as the eight of them lined up beside him, all with looks of pure determination and strength. They started walking towards their destination, but not without Chan reminding them of the rules." +
      "“Everyone remembers. Don’t wander off. Don’t make a mess. Don’t go anywhere without anyone else going with you, including the bathroom. Don’t cause a scene. Don’t talk to strangers. And. DO. NOT. PUT. ANYTHING IN THE CART THAT WE DON’T NEED. Got it?” Chan looked to his right, seeing four nods, he looked to his left, seeing four more nods. “Good. Now let’s do this.” The nine of them walked, with strong posture, straight through the gates of hell. Or in anyone else’s case, the door to the supermarket." +
      "Chan paced back and worth, running into Woojin a few times, as he was pacing in the opposite direction. Minho and Changbin just stood, leaning against the shelves on the opposite sides of the aisle. They looked at each other a few times, to anyone looking at the two, it would have looked like they were communicating to each other telepathically. Changbin jerked his head towards the two eldest." +
      "Changbin stared off above him thinking for a second before a grimace crossed his face. He leaned back against the shelf, and finally looked at the others. “I’ve decided to stay.” Saying it as if it was his idea." +
      "“Jeongin! Why are you just standing there?” Seungmin said getting off the ground, from when he bumped into Jeongin. The younger didn’t respond, only pointing to thing he was aweing at. Seungmin hesitantly looked at the display, his eyes immediately growing larger, mouth agape. Both maknaes bent looking through the glass. Both had huge eyes, mouths open." +
      "“Yeah, but I’m more relieved you guys are okay. What were you even looking at?” Chan asked looking over to the display case. Seeing a four-layer chocolate cake, with chocolate icing, and chocolate flowers. Topped with multiple chocolate covered strawberries, which was drizzled in strawberry sauce. “Okay… I fully understand why you snuck away.”" +
      "When they got to him, they stood over him just looking at him. “Suengmin, Jeongin, do you know where the others are?” Minho asked, killing the silence as Chan was still suffering on the ground.",

    date: "2019-09-01 01:01:00",
    thumbnail: "https://image.flaticon.com/icons/png/512/124/124010.png",
  },
  {
    name: "Ice Cream",
    content:
      "They all agreed and nodded simultaneously, putting a half-hearted smile on Chans face. Realizing their attempt at making him feel better, he put on a determined face, and walked passed the group looking at the building in front of them. Chans determination was contagious as the eight of them lined up beside him, all with looks of pure determination and strength. They started walking towards their destination, but not without Chan reminding them of the rules." +
      "“Everyone remembers. Don’t wander off. Don’t make a mess. Don’t go anywhere without anyone else going with you, including the bathroom. Don’t cause a scene. Don’t talk to strangers. And. DO. NOT. PUT. ANYTHING IN THE CART THAT WE DON’T NEED. Got it?” Chan looked to his right, seeing four nods, he looked to his left, seeing four more nods. “Good. Now let’s do this.” The nine of them walked, with strong posture, straight through the gates of hell. Or in anyone else’s case, the door to the supermarket." +
      "Chan paced back and worth, running into Woojin a few times, as he was pacing in the opposite direction. Minho and Changbin just stood, leaning against the shelves on the opposite sides of the aisle. They looked at each other a few times, to anyone looking at the two, it would have looked like they were communicating to each other telepathically. Changbin jerked his head towards the two eldest." +
      "Changbin stared off above him thinking for a second before a grimace crossed his face. He leaned back against the shelf, and finally looked at the others. “I’ve decided to stay.” Saying it as if it was his idea." +
      "“Jeongin! Why are you just standing there?” Seungmin said getting off the ground, from when he bumped into Jeongin. The younger didn’t respond, only pointing to thing he was aweing at. Seungmin hesitantly looked at the display, his eyes immediately growing larger, mouth agape. Both maknaes bent looking through the glass. Both had huge eyes, mouths open." +
      "“Yeah, but I’m more relieved you guys are okay. What were you even looking at?” Chan asked looking over to the display case. Seeing a four-layer chocolate cake, with chocolate icing, and chocolate flowers. Topped with multiple chocolate covered strawberries, which was drizzled in strawberry sauce. “Okay… I fully understand why you snuck away.”" +
      "When they got to him, they stood over him just looking at him. “Suengmin, Jeongin, do you know where the others are?” Minho asked, killing the silence as Chan was still suffering on the ground.",

    date: "2018-09-01 01:01:00",
    thumbnail:
      "https://s.yimg.com/ny/api/res/1.2/fHxH29M3wXOFl.MgJKOt5g--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/stylecaster_935/c5a30443d4db06a57d1acaddb29fa85a",
  },
  {
    name: "Why Not",
    content:
      "When they got to him, they st\nood over him just looking at him. “Suengmin, Jeongin, do you know where the others are?” Minho asked, killing the silence as Chan was still suffering on the ground.",

    date: "2019-09-01 01:01:00",
    thumbnail:
      "https://i.guim.co.uk/img/media/1b60dd804c5925e953b08208652e742ef940164d/0_346_5184_3110/master/5184.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3551ab4f5922d2cfb034f53ee2feb454",
  },
];

class portfolioEssays extends Component {
  constructor(props) {
    super(props);
  }

  showContent = (content) => {
    // if (window.location.pathname === "/userPortfolio/" + sessionStorage.getItem('username') + "/essays") {
    //     return <div className="portfolio_essayList">{content}</div>;
    // } else{
    //     console.log(this.props.match);
    //     // return <PortfolioEssayDetailed essay={essayList.find(item=>item.name== this.props.match.params.path)}/>;
    //     return <PortfolioEssayDetailed essay={essayList[0]}/>;
    // }
    switch (window.location.pathname) {
      case "/userPortfolio/" + sessionStorage.getItem("username") + "/essays":
        return <div className="portfolio_essayList">{content}</div>;
      case "/userPortfolio/" +
        sessionStorage.getItem("username") +
        "/essays/Horizon":
        return <PortfolioEssayDetailed essay={essayList[0]} />;
      case "/userPortfolio/" +
        sessionStorage.getItem("username") +
        "/essays/Ex":
        return <PortfolioEssayDetailed essay={essayList[1]} />;
      case "/userPortfolio/" +
        sessionStorage.getItem("username") +
        "/essays/HOME;RUN":
        return <PortfolioEssayDetailed essay={essayList[2]} />;
      case "/userPortfolio/" +
        sessionStorage.getItem("username") +
        "/essays/NCT%202020":
        return <PortfolioEssayDetailed essay={essayList[3]} />;
      case "/userPortfolio/" +
        sessionStorage.getItem("username") +
        "/essays/Ice%20Cream":
        return <PortfolioEssayDetailed essay={essayList[4]} />;
      case "/userPortfolio/" +
        sessionStorage.getItem("username") +
        "/essays/Why%20Not":
        return <PortfolioEssayDetailed essay={essayList[5]} />;
    }
  };

  render() {
    const rows = [];
    essayList.forEach(({ name, thumbnail, content, date }) => {
      // rows.push(<ListOfEssay react={goToEssay} name={name} thumbnail={<img width="150px" height="100px" src={thumbnail} alt="THUMBNAIL"/>} content={content} date={date} />);
      let Thumbnail = (
        <img width="150px" height="100px" src={thumbnail} alt="THUMBNAIL" />
      );
      rows.push(
        <div className="essays__item">
          <div className="essays__thumbnail">{Thumbnail}</div>

          <div className="essays__info">
            <Link
              exact
              to={
                "/userPortfolio/" +
                sessionStorage.getItem("username") +
                "/essays/" +
                name
              }
            >
              <div className="essays__title">{name}</div>
              <div className="essays__content">{content}</div>
              <div className="essays__date">{date}</div>
            </Link>
          </div>
        </div>
      );
    });

    // return <div className="portfolio_essayList">{rows}</div>;
    return this.showContent(rows);
  }
}

export default withRouter(portfolioEssays);
