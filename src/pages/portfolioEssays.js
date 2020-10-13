import React, { Component } from "react";
import ListOfEssay from "../components/ListOfEssay";



const essayList = [
    {
        name: "Horizon",
        content: "I came to dance-dance-dance-dance (Yeah)\n" +
            "I hit the floor 'cause that's my plans plans plans plans (Yeah)\n" +
            "I'm wearing all my favorite brands brands brands brands (Yeah)\n" +
            "Give me some space for both my hands hands hands hands\n" +
            "Yeah yeah 'cause it goes on and on and on",
        date: "2020-09-01 01:01:00",
        thumbnail: "https://static.billboard.com/files/media/ateez-1-2020-kq-entertainment-1024x677.jpg",
    },
    {
        name: "The Tortoise and the Hare",
        content: "'Cause I-I-I'm in the stars tonight\n" +
            "So watch me bring the fire and set the night alight (hey)\n" +
            "Shining through the city with a little funk and soul\n" +
            "So I'ma light it up like dynamite, whoa",
        date: "2020-09-02 01:01:00",
        thumbnail: 'https://static.billboard.com/files/2020/07/Stray-Kids-2020-cr-JYP-Entertainment-Billboard-1548-1594239171-768x433.jpg',
    },
    {
        name: "Fearless",
        content: "This is getting heavy\n" +
            "Can you hear the bass boom? I'm ready (woo hoo)\n" +
            "Life is sweet as honey\n" +
            "Yeah, this beat cha-ching like money\n" +
            "Disco overload, I'm into that, I'm good to go\n" +
            "I'm diamond, you know I glow up\n" +
            "Hey, so let's go",
        date: "2020-10-01 01:01:00",
        thumbnail: 'https://pbs.twimg.com/media/EcOkixUU4AADQ7T.jpg',
    },
    {
        name: "NCT 2020",
        content: "Shoes on, get up in the morn\n" +
            "Cup of milk, let's rock and roll\n" +
            "King Kong, kick the drum, rolling on like a rolling stone\n" +
            "Sing song when I'm walking home\n" +
            "Jump up to the top, LeBron\n" +
            "Ding dong, call me on my phone\n" +
            "Ice tea and a game of ping pong",
        date: "2019-09-01 01:01:00",
        thumbnail: 'https://static.billboard.com/files/2020/09/NCT-2020-RESONANCE-Pt-1-billboard-1548-1600784845-1024x677.jpg',
    },
    {
        name: "Ice Cream",
        content: "Look so good, yeah, look so sweet (Hey)\n" +
            "Lookin' good enough to eat\n" +
            "Coldest with the kiss, so he call me ice cream\n" +
            "Catch me in the fridge, right where the ice be\n" +
            "Look so good, yeah, look so sweet (Hey)\n" +
            "Baby, you deserve a treat",
        date: "2018-09-01 01:01:00",
        thumbnail: 'https://s.yimg.com/ny/api/res/1.2/fHxH29M3wXOFl.MgJKOt5g--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/stylecaster_935/c5a30443d4db06a57d1acaddb29fa85a'    },
    {
        name: "#",
        content: "Eh, can't let it hide, burn\n" +
            "Oh, the look in your eyes has changed (Hey!)\n" +
            "The obstacles that were too high\n" +
            "I'll show you, I'll go over them\n" +
            "Further with my thrilling eyes\n\n" +
            "Follow me\n" +
            "Being sharp, so what?",
        date: "2019-09-01 01:01:00",
        thumbnail: 'http://images6.fanpop.com/image/photos/42600000/LOONA-X-X-image-loo-CE-A0-CE-94-42662149-2250-1500.jpg',
    },
];



export default class portfolioEssays extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const rows = [];
        essayList.forEach(({ name, thumbnail, content, date }) => {
            rows.push(<ListOfEssay name={name} thumbnail={<img width="150px" height="100px" src={thumbnail} alt="THUMBNAIL"/>} content={content} date={date} />);
        });

        return <div className="portfolio_essayList">{rows}</div>;
    }
}