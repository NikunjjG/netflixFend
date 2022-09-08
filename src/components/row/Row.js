import React from 'react'
import './Row.css'
import {ApiCopy} from './ApiCopy.js'
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

export default function Row(props) {
    // const[movies,setMovies] = useState([]);
  return (
    <>
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="rowPosters">
            {ApiCopy.map((movie) =>(
              <img
              key={movie.id}
              className={props.isLarge?'rowPoster':'rowLandscape'}
              src={props.isLarge?movie.image:movie.poster} alt={movie.title} />
              ))}
        </div>
    </div>
    </>
  );
}
