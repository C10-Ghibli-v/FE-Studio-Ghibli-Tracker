import React from 'react'

import Carousel from '../components/Carousel'
import HeaderHome from '../components/HeaderHome'


const Home = () => {
  return (
    <div>
      <HeaderHome />
      <section className="flex justify-center content-between my-40 flex-wrap">
        <p className="text-white text-2xl  mx-5 md:text-3xl sm:w-3/5 lg:text-4xl text-center font-thin uppercase">Disfruta de las mejores peliculas <span className='font-bold'>hechas a tu medida</span> y en el lugar que quieras</p>
        <p className="text-white text-xl mt-5 md:text-2xl sm:w-3/5 lg:text-3xl text-center font-thin">Crea tu cuenta y empieza a vivir la experiencia de nuestra app, con historias inigualables.</p>
      </section>
      <Carousel />
    </div>
  )
}


export default Home