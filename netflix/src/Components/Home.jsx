import React from 'react';
import popular from '../images/popular.jpg';
import tvs2 from '../images/tvs2.jpg';
import tvs1 from '../images/tvs1.jpg';
import tvs3 from '../images/tvs3.jpg';
import tvs4 from '../images/tvs4.jpg';
import tvs5 from '../images/tvs5.jpg';

function Home() {
  return (
    <>
    <div className='uptitle'>
    <div className='title'>Home</div>
    <h2 className='titleName'>Popular on Netflix</h2>
    <div className='pop'>
        <img className='pimg' src={popular} alt="" />
        <img className='pimg' src={tvs5} alt="" />
        <img className='pimg' src={tvs3} alt="" />
        <img className='pimg' src={tvs2} alt="" />
        <img className='pimg' src={popular} alt="" />
    </div>
    <h2 className='titleName'>Movies</h2>
    <div className='pop'>
        <img className='pimg' src={tvs2} alt="" />
        <img className='pimg' src={popular} alt="" />
        <img className='pimg' src={tvs5} alt="" />
        <img className='pimg' src={tvs3} alt="" />
        <img className='pimg' src={tvs4} alt="" />
    </div>
    <h2 className='titleName'>TV Shows</h2>
    <div className='pop'>
        <img className='pimg' src={tvs1} alt="" />
        <img className='pimg' src={tvs2} alt="" />
        <img className='pimg' src={tvs4} alt="" />
        <img className='pimg' src={tvs3} alt="" />
        <img className='pimg' src={tvs5} alt="" />
    </div>
    <h2 className='titleName'>Recently Added</h2>
    <div className='pop'>
        <img className='pimg' src={tvs4} alt="" />
        <img className='pimg' src={tvs3} alt="" />
        <img className='pimg' src={tvs2} alt="" />
        <img className='pimg' src={popular} alt="" />
        <img className='pimg' src={tvs1} alt="" />
    </div>
    <h2 className='titleName'>My list</h2>
    <div className='pop'>
        <img className='pimg' src={tvs1} alt="" />
        <img className='pimg' src={tvs5} alt="" />
        <img className='pimg' src={tvs2} alt="" />
        <img className='pimg' src={tvs4} alt="" />
        <img className='pimg' src={popular} alt="" />
    </div>
    <footer>
    <div className="footer">
    <p>Copyrights reserved-@<a href="https://www.netflix.com/in/"><em>Netflix</em></a></p>
    </div>
    </footer>
    </div>
    </>
  )
}

export default Home