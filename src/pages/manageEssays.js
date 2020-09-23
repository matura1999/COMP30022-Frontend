import React, { Component } from "react";
import FilterablePostList from "../components/FilterablePostList";

const postItemList = [
    {
        name: "Answer",
        abstract: "I came to dance-dance-dance-dance (Yeah)\n" +
            "I hit the floor 'cause that's my plans plans plans plans (Yeah)\n" +
            "I'm wearing all my favorite brands brands brands brands (Yeah)\n" +
            "Give me some space for both my hands hands hands hands\n" +
            "Yeah yeah 'cause it goes on and on and on",
        date: "2020-09-01 01:01:00",
        thumbnail: "",
    },
    {
        name: "The Tortoise and the Hare",
        abstract: "'Cause I-I-I'm in the stars tonight\n" +
            "So watch me bring the fire and set the night alight (hey)\n" +
            "Shining through the city with a little funk and soul\n" +
            "So I'ma light it up like dynamite, whoa",
        date: "2020-09-02 01:01:00",
        thumbnail: '',
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
        thumbnail: '',
    },
    {
        name: "Dynamite",
        abstract: "Shoes on, get up in the morn\n" +
            "Cup of milk, let's rock and roll\n" +
            "King Kong, kick the drum, rolling on like a rolling stone\n" +
            "Sing song when I'm walking home\n" +
            "Jump up to the top, LeBron\n" +
            "Ding dong, call me on my phone\n" +
            "Ice tea and a game of ping pong",
        date: "2019-09-01 01:01:00",
        thumbnail: '',
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
