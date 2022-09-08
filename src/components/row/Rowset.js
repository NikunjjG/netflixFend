// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import React from 'react'
import Row from './Row'
// import './Rowset.css'

export default function Rowset() {
  return (
    <>
    <div className='rows'>
        <Row title ={'Netflix Originals'} isLarge = {true} />
        <Row title ={'Trending Now'} isLarge = {false} />
        <Row title ={'Top Rated'} isLarge = {false} />
        <Row title ={'Comedy Movies'} isLarge = {false} />
        <Row title ={'Action Movies'} isLarge = {false} />    
        <Row title ={'Romance Movies'} isLarge = {false} />
        <Row title ={'Horror Movies'} isLarge = {false} />
        <Row title ={'Adventure Movies'} isLarge = {false} />
    </div>
    </>
  )
}
