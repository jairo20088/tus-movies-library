import React from "react";
import style from "./MovieDescription.module.css";
import styled from "styled-components";
import imageNotFound from "../../assets/imageNotFound.png";
import { connect } from "react-redux";
import * as action from "../../store/action/index";

class movieDescription extends React.Component {
  state = { fail: true };

  render() {
    const NewStyle = styled.div`
      text-align: center;
      padding: 5rem;
      width: 104rem;
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.85),
          rgba(0, 0, 0, 0.85)
        ),
        url(https://image.tmdb.org/t/p/w500${this.props.bg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: #fff;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      display: grid;
      grid-template-columns: 30rem 1fr;
      animation-name: popup;
      animation-delay: 0.2s;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      z-index: 1000;

      i {
        font-size: 4rem;
        cursor: pointer;
      }
      span {
        position: absolute;
        right: 3rem;
        top: 1.6rem;
      }
      @keyframes popup {
        0% {
          transform: translate(-50%, -50%) scale(0);
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
        }
      }

      @media only screen and (max-width: 50em) {
        width: 50rem;
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
        position: absolute;
        top: 74rem;

        span {
          position: absolute;
          right: 1rem;
          top: 0.5rem;
        }
      }
      @media only screen and (max-width: 25em) {
        width: 100%;
      }
    `;
    const defaultImage = imageNotFound;
    const image = `https://image.tmdb.org/t/p/w300/${this.props.img}`;

    return (
      <NewStyle>
        <div>
          <span>
            <i
              onClick={() => this.props.closeDetailMovie()}
              className="fas fa-times"
            ></i>
          </span>
          <img
            src={this.state.fail ? image : defaultImage}
            className={style.MovieImage}
            onError={e => {
              this.setState({ fail: false });
            }}
            alt=""
          />
        </div>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p>Genres: {this.props.genres}</p>
          <p>Vote Average: {this.props.vote}</p>
          <a
            href={`https://www.youtube.com/watch?v=${this.props.trailer}`}
            target="_blank"
            rel="noopener noreferrer"
            className={style.Trailer}
          >
            Trailer
          </a>
        </div>
      </NewStyle>
    );
  }
}
const mapDispathToProds = dispatch => {
  return {
    closeDetailMovie: () => dispatch(action.hideBackdrop())
  };
};
export default connect(null, mapDispathToProds)(movieDescription);
