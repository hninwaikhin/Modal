import React, { Component } from "react";
import "./MovieBox.css";
import Modal from './Modal';
class MovieBox extends Component {
  state = { items: [] };

  // constructor(props) {
  //   super(props);
  //   var watchMovies = { items: [] };
  //   //this.state = { items: [] };
  // }
  // handleAdd(event) {
  //   const id = event.target.id;
  //   this.addToWatchList(id);
  // }
  // addToWatchList(id) {
  //   console.log("add to watchList : " + id);
  //   // var watchList = [];
  //   // if (localStorage.getItem("watchList") !== null) {
  //   //   watchList = localStorage.getItem("watchList");
  //   // }
  //   // watchList.concat(id);
  //   // localStorage.setItem("watchList", watchList);
  //   // console.log(localStorage.getItem("watchList").value);
  // }

  constructor() {
      super();

      this.state = {
          isShowing: false
      }
  }

  openModalHandler = () => {
      this.setState({
          isShowing: true
      });
  }

  closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
  }

  render() {
    return (
      <div
        key={this.props.movie.id}
        style={{
          width: 240,
          height: 400,
          paddingTop: 25,
          color: "#00cca3",
          float: "left"
        }}
      >
        <div className="poster">
          <img alt="poster" src={this.props.movie.poster} onClick={this.openModalHandler} />
          <div className="hoverText">
            <strong>{this.props.movie.title}</strong>
            <p>{this.props.movie.overview}</p>
          </div>
        </div>
        <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}>
                {this.props.movie.overview}
        </Modal>
        <br />
        <center>
          <div className="title">
            {this.props.movie.title}
            <br />
            <span style={{ textAlign: "right" }}>Genres:</span>
            <span>{this.props.movie.id}</span>
            <span style={{ textAlign: "left" }}>Year:</span>
            <span>{this.props.movie.id}</span>
          </div>
        </center>
        <center>
          <div className="vote">{this.props.movie.vote_average}</div>
        </center>
        <br />
        {/* <button id={this.props.movie.id} onClick={this.handleAdd.bind(this)}>
          ADD
        </button> */}
      </div>
    );
  }
}

export default MovieBox;
