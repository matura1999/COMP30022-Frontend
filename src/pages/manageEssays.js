import React, { Component } from "react";
import FilterablePostList from "../components/FilterablePostList";

const postItemList = [
    {
        name: "Horizon",
        abstract: "I came to dance-dance-dance-dance (Yeah)\n" +
            "I hit the floor 'cause that's my plans plans plans plans (Yeah)\n" +
            "I'm wearing all my favorite brands brands brands brands (Yeah)\n" +
            "Give me some space for both my hands hands hands hands\n" +
            "Yeah yeah 'cause it goes on and on and on",
        date: "2020-09-01 01:01:00",
        thumbnail: "https://static.billboard.com/files/media/ateez-1-2020-kq-entertainment-1024x677.jpg",
    },
    {
        name: "The Tortoise and the Hare",
        abstract: "'Cause I-I-I'm in the stars tonight\n" +
            "So watch me bring the fire and set the night alight (hey)\n" +
            "Shining through the city with a little funk and soul\n" +
            "So I'ma light it up like dynamite, whoa",
        date: "2020-09-02 01:01:00",
        thumbnail: 'https://static.billboard.com/files/2020/07/Stray-Kids-2020-cr-JYP-Entertainment-Billboard-1548-1594239171-768x433.jpg',
    },
    {
        name: "Fearless",
        abstract: "This is getting heavy\n" +
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
        abstract: "Shoes on, get up in the morn\n" +
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
        abstract: "Look so good, yeah, look so sweet (Hey)\n" +
            "Lookin' good enough to eat\n" +
            "Coldest with the kiss, so he call me ice cream\n" +
            "Catch me in the fridge, right where the ice be\n" +
            "Look so good, yeah, look so sweet (Hey)\n" +
            "Baby, you deserve a treat",
        date: "2018-09-01 01:01:00",
        thumbnail: 'https://image7.uhdpaper.com/wallpaper/blackpink-ice-cream-members-uhdpaper.com-4K-7.2617.jpg'    },
    {
        name: "#",
        abstract: "Eh, can't let it hide, burn\n" +
            "Oh, the look in your eyes has changed (Hey!)\n" +
            "The obstacles that were too high\n" +
            "I'll show you, I'll go     over them\n" +
            "Further with my thrilling eyes\n\n" +
            "Follow me\n" +
            "Being sharp, so what?",
        date: "2019-09-01 01:01:00",
        thumbnail: 'http://images6.fanpop.com/image/photos/42600000/LOONA-X-X-image-loo-CE-A0-CE-94-42662149-2250-1500.jpg',
    },
];

export default class ManageEssays extends Component {
    render() {
        return (
            <div className="postList">
                <FilterablePostList posts={postItemList} />
            </div>
        );
    }
}
