import React from 'react'

import Carousel from '../components/Carousel'
import HeaderHome from '../components/HeaderHome'


const Home = () => {
  return (
    <div>
      <HeaderHome />
      <Carousel />
      <section className="flex justify-center">
        <p className="text-white text-2xl w-4/5 mx-5 md:text-3xl sm:w-3/5 lg:text-4xl text-center font-thin uppercase">Disfruta de las mejores peliculas <span className='font-bold'>hechas a tu medida</span> y en el lugar que quieras</p>
      </section>
    </div>
  )
}


export default Home