


import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

class RandomChar extends Component {

  constructor (props) {
    super(props);
    this.updateChar();
  }

  state = {
    name: null,
    description: null,
    thumbnail: null,
    homepage: null,
    wiki: null,
  }


  marvelService = new MarvelService();
  updateChar = () => {
    const id = Math.floor(Math.random () * (1011400 - 1011000) + 1011000);
    this.marvelService
    .getCharacter(id)
    .then(res => {
      const result = res.data.results[0];
      this.setState({
        name: result.name,
        description: result.description,
        thumbnail: result.thumbnail.path + '.' + result.thumbnail.extension,
        homepage: result.urls[0].url,
        wiki: result.urls[1].url,
      })
    })
  }


  render () {
    console.log(this.state.name)
    const {name, description, thumbnail, homepage, wiki} = this.state;
    return (
      <div className="randomchar">
          <div className="randomchar__block">
              <img src={thumbnail} alt="Random character" className="randomchar__img"/>
              <div className="randomchar__info">
                  <p className="randomchar__name">{name}</p>
                  <p className="randomchar__descr">{description}</p>
                  <div className="randomchar__btns">
                      <a href="#" className="button button__main">
                          <div className="inner" onClick={homepage}>homepage</div>
                      </a>
                      <a href="#" className="button button__secondary">
                          <div className="inner" onClick={wiki}>wiki</div>
                      </a>
                  </div>
              </div>
          </div>
          <div className="randomchar__static">
              <p className="randomchar__title">
                  Random character for today!<br/>
                  Do you want to get to know him BETTER?
                  HELLO WORLD
                  !!!
              </p>
              <p className="randomchar__title">
                  Or choose another one
              </p>
              <button className="button button__main">
                  <div className="inner">try it</div>
              </button>
              <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
          </div>
      </div>
  )
  }
}

export default RandomChar;





















// import mjolnir from "../../resources/img/mjolnir.png";
// import thor from '../../resources/img/thor.jpeg';
// import MarvelService from "../../services/MarvelService";
// import Spinner from "../spinner/Spinner";

// import "./randomChar.scss";
// import { Component } from "react";


// class RandomChar extends Component {
//   constructor (props) {
//     super (props);
//     this.updateChar();
//   };

//   state = {
//     char: {},
//     loading: true,
//   };

//   onCharLoaded = (char) => {
//     this.setState({char})
//   }

//   marvelService = new MarvelService();
//   updateChar = () => {
//     const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
//     this.marvelService
//     .getCharacter(id)
//     .then(this.onCharLoaded)
//   }
  

//   render () {
//     const {char, loading} = this.state;

 
//     return (
//       <div className="randomchar">
//         {loading ? <Spinner/> : <View char={char}/>}
//       <div className="randomchar__static">
//         <p className="randomchar__title">Random character for today!<br/>
//         Do you want to get to know him better?</p>
//         <p className="randomchar__title">
//           Or choose another one
//         </p>

//         <button className="button button__main">
//           <div className="inner">try it</div>
//         </button>

//         <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>


//       </div>

//       </div>
//     )
//   }
// };


// const View = (char) => {


// const {name, description, thumbnail, homepage, wiki} = char;
//   return (
//     <div className="randomchar__block">
//     <img src={thumbnail} alt="thor" className="randomchar__img"/>
//     <div className="randomchar__info">
//       <p className="randomchar__name">{name}</p>
//       <p className="randomchar__descr">{description}</p>
//       <div className="randomchar__btns">
//         <a href={homepage} className="button button__main">
//           <div className="inner">Homepage</div>
//         </a>
//         <a href={wiki} className="button button__secondary">
//           <div className="inner">wiki </div>
//         </a>
//       </div>
//     </div>
//   </div>

//   )
// }

// export default RandomChar;
