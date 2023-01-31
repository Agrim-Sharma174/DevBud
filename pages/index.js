import Head from "next/head";
import React from 'react'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='relative h-[100vh] sm:h-[100vh] lg:[100vh] xl:h-[100vh] 2xl:[100vh]'>
        <Image className='blur-[2px] ' src={"/chat.jpg"} 
        layout='fill' objectFit='cover' />
        <div className='absolute top-1/2 w-full text-center'>
            <h1 className='text-lg sm:text-5xl font-bold text-white -mt-4'>Let's connect with a fellow developer</h1>

            <button className='text-gray-700 bg-white px-10 py-4 shadow-sm rounded-full font-bold my-5 hover:shadow-md shadow-white hover:shadow-white active:scale-90 transition duration-150'>Video Call</button>
            <br />
            <button className='text-gray-700 bg-white px-10 py-4 shadow-sm rounded-full font-bold hover:shadow-md shadow-white hover:shadow-white active:scale-90 transition duration-150'>Chat Now!</button>
        </div>
    </div>
  );
}
