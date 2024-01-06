import AppHeader from "../appHeader/AppHeader";



import '../../style/style.scss';
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import vision from '../../resources/img/vision.png';


const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
            </main>
        </div>
    )















    // return (
    //     <div className="app">
    //         <AppHeader/>
    //         <main>
    //         <RandomChar/>
    //             <div className="char__content">
    //             <CharList/>
    //             <CharInfo/>
    //             </div>
    //             <img className="bg-decoration" alt="vision" src={vision}/>


    //         </main>

    //     </div>
    // )
};


export default App;