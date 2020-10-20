import React, {Component} from "react";

const essay =
    {
        name: "Horizon",
        content: "I came to dance-dance-dance-dance (Yeah)\n" +
            "I hit the floor 'cause that's my plans plans plans plans (Yeah)\n" +
            "I'm wearing all my favorite brands brands brands brands (Yeah)\n" +
            "Give me some space for both my hands hands hands hands\n" +
            "Yeah yeah 'cause it goes on and on and on",
        date: "2020-09-01 01:01:00",
        thumbnail: "https://static.billboard.com/files/media/ateez-1-2020-kq-entertainment-1024x677.jpg",
    }

export default class essayDetailed extends Component {

    render() {
        let Thumbnail= (<img width="150px" height="100px" src={essay.thumbnail} alt="THUMBNAIL"/>)
        return (
            <div>{Thumbnail}</div>
        )
    }
}