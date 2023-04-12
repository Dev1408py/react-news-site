import React, { Component } from "react";

export default class NewsItem extends Component {
  //   constructor(){
  //     super();
  // }

  render() {
    let { title, description, imageUrl, newsId, date_pub, author, source } =
      this.props;
    return (
      <>
        <div className="my-3">
          <div className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className="badge rounded-pill bg-danger"> {source} </span>
            </div>

            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqbaYLMUPAkEK8u4IU6MYXdHpuze82oXpGg&usqp=CAU"
              }
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {title ? title.slice(0, 30) : "..."}
              </h5>
              <p className="card-text my-1">
                {description ? description.slice(0, 40) : "..."}
              </p>
              <a
                href={newsId}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark btn-sm my-1"
              >
                Read more
              </a>
              <div>
                <b> Author - {author ? author : "Not available"} </b>
              </div>
              <div>
                <b> Source - {source ? source : "Not available"} </b>
              </div>

              <div className="card-footer text-muted">
                Published on {new Date(date_pub).toGMTString()}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
