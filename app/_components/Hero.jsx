import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div>
        <section className=" text-white relative  lg:bg-cover lg:bg-center lg:bg-no-repeat" style={{ backgroundImage: "url('/piggybank1.jpg')" }}>
  <div className="mx-auto max-w-screen-xl px-2 py-6 lg:flex ">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="text-primary text-3xl font-extrabold sm:text-5xl"
      >
       Manage Your Budget

        <span className="sm:block text-primary"> Control Your Money </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black">
       Start creating Budget and save lot of money .
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary hover:border-blue-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>
      </div>
      <Image src={'/savingsXpert.png'} width={1700} height={1700} className='w-full mt-5 rounded-lg border-2'/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero