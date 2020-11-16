// this is the file item component for the file management page
import React from "react";
import "./essayItem.scss";
import EditEssayModal from "./editEssayModal";
import url from '../../assets/constant/constant'

class EssayItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  deleteEssay = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id:id, username: sessionStorage.getItem('username')}),
    };
    await fetch(
      url.backendUrl + "/files/essay",
      requestOptions
    );
    window.location.reload(false);
  }

  render(){
    const {name, content, id, thumbnail, date} = this.props
    return (
      <div className="essayItem__container">
        <div className="essayItem__item">
          <div className="essayItem__iconAndInfo">
            <div className="essayItem__thumbnail" data-testid="essayItem-thumbnail">
              {thumbnail}
            </div>
    
            <div className="essayItem__info">
              <div className="essayItem__title" data-testid="essayItem-name">
                {name}
              </div>
              <div className="essayItem__content" data-testid="essayItem-content">
                {content}
              </div>
              <div className="essayItem__date" data-testid="essayItem-date">
                {date}
              </div>
            </div>
          </div>
    
          <div className="essayItem__options">
            <EditEssayModal title={name} content={content} id={id}/>
            <button className="essayItem__delete" onClick={()=>this.deleteEssay(id)}>Delete</button>
          </div>
        </div>
      </div>
    )

  }
};

export default EssayItem;
