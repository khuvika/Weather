'use client'

import { Heart, House, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import { Search } from './_components/Search'

const Home = () => {
  return (
    <div className="flex w-screen h-screen ">
      <div className="flex items-center justify-center bg-[#F3F4F6] w-[50%] ">
        <Search />
        <div className="relative flex flex-col items-start  w-[45%] rounded-3xl bg-white/10 backdrop-blur-xs px-6 py-8 shadow-lg duration-300 z-10">
          <p className="text-sm text-gray-500 mb-2">April 22, 2025</p>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-4xl font-bold text-black ">
              Ulaanbaatar
              <span>
                <MapPin />
              </span>
            </div>
            <div className="my-6">
              <Image src="/nar.png" alt="Sun" width={250} height={250} />
            </div>
          </div>
          <h1 className="text-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-400 text-left">
            10.3°
          </h1>
          <p className={'-mt-5 text-sm font-medium text-left text-blue-600'}>
            Sunny
          </p>
          <div className="flex justify-between w-full mt-8 px-6 text-gray-500  text-xl">
            <span>
              <House />
            </span>
            <span>
              <MapPin />
            </span>
            <span>
              <Heart />
            </span>
            <span>
              <User />
            </span>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center bg-[#122249] w-[50%] rounded-[15px] ">
        <div className="relative flex flex-col items-start  w-[45%] rounded-3xl bg-white/10 backdrop-blur-xs px-6 py-8 shadow-lg z-10">
          <p className="text-sm text-gray-400 mb-2">April 22, 2025</p>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-4xl font-bold text-white">
              Ulaanbaatar
              <span>
                <MapPin />
              </span>
            </div>

            <div className="my-6">
              <Image src="/sar.png" alt="moon" width={250} height={250} />
            </div>
          </div>

          <h1 className="text-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
            -2.3°
          </h1>

          <p className="-mt-5 text-sm font-medium text-yellow-600">Sunny</p>

          <div className="flex justify-between w-full mt-8 px-6 text-gray-300 text-xl">
            <span>
              <House />
            </span>
            <span>
              <MapPin />
            </span>
            <span>
              <Heart />
            </span>
            <span>
              <User />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
