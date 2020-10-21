import React, {Component} from "react";
import "./essayDetailed.css"

export default class essayDetailed extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        let Thumbnail= (<img width="500px" height="300px" src={this.props.essay.thumbnail} alt="THUMBNAIL"/>)
        return (
            <div className = "essay_details">
                <div className="essay_details_picture">{Thumbnail}</div>
                <div className="essay_details_title">{this.props.essay.name}</div>
                <div className="essay_details_content">{this.props.essay.content}</div>
                <div className="essay_details_date">{this.props.essay.date}</div>
            </div>

        )
    }
}