import "./appHeader.scss";

const AppHeader = () => {
  return (
    <div className="app__header">
      <h1 className="app__title">
        <a href="#"><span>Marvel</span> information portal</a>
      </h1>

      <nav className="app__menu">
        <ul>
          <li><a>Characters</a></li>
          /
          <li><a>Comics</a></li>
        </ul>
      </nav>

    </div>
  )

}

// const AppHeader = () => {
//     return (
//         <div className="app__header">
//             <h1 className="app__title">
//                 <a href="#"><span>Marvel</span> information portal</a>
//             </h1>
//         <nav className="app__menu">
//             <ul>
//                 <li><a>Characters</a></li>
//                 /
//                 <li><a>Comics</a></li>
//             </ul>
//         </nav>

//         </div>
//     )
// };

export default AppHeader;
