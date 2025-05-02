import React from 'react'
import { FaAngleDown, FaLocationDot, FaPerson, FaPersonCane, FaSearchengin } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";


const Header = () => {
  return (
    <div className='shadow pb-3 md:pb-0 '>
        <div className='flex items-center justify-around md:border-b border-b-zinc-200'>
            <div className='flex gap-6'>
                <div className='p-2 hidden md:block'><img src="apollo247.svg" alt="logo" /></div>
                <div className='flex items-center gap-3'>
                    <FaLocationDot className='md:block hidden text-2xl'/>
                    <div className='w-fit'>
                        <p className='text-xs text-zinc-400'>Select Location</p>
                        <p className='flex items-center gap-2 text-sm md:text-xl font-semibold'>Select Address <FaAngleDown/></p>
                    </div>
                </div>
            </div>
            <div title='Search' className='hidden md:flex items-center gap-4 border bg-zinc-50 border-zinc-300 rounded-xl h-10 w-150 pl-8 '>
                <FaSearchengin className='text-xl'/>
                <div className='text-zinc-400'>Search Doctors, Specialities, Conditions etc.</div>
            </div>
            <button className='flex items-center gap-2 md:border border-green-700 px-5 py-1 cursor-pointer rounded font-semibold text-green-700'>
                <span className='hidden md:block'>Login</span>
                <BsPersonCircle className='text-xl'/>
            </button>
        </div>
        <div className='hidden md:flex gap-6 justify-center py-2 h-10'>
            <p className='font-semibold hover:border-b-2 hover:text-cyan-600 '>Buy Medicines</p>
            <p className='font-semibold hover:border-b-2 hover:text-cyan-600'>Find Doctors</p>
            <p className='font-semibold hover:border-b-2 hover:text-cyan-600'>Lab Tests</p>
            <p className='font-semibold hover:border-b-2 hover:text-cyan-600'>Circle Membership</p>
            <p className='font-semibold hover:border-b-2 hover:text-cyan-600'>Health Records</p>
            <p className='font-semibold hover:border-b-2 hover:text-cyan-600'>Diabetes Reversal</p>
            <p className='font-semibold hover:border-b-2 hover:text-cyan-600'>Buy Insurance <span className='font-normal text-xs bg-emerald-100 text-emerald-400 px-2'>New</span> </p>
        </div>
        <div title='Search' className='md:hidden flex items-center gap-4 border bg-zinc-50 border-cyan-500 rounded h-8 w-100 pl-8 m-auto my-1'>
                <FaSearchengin className='text-xl'/>
                <div className='text-zinc-400'>Search Doctors, Specialities, Conditions etc.</div>
        </div>
    </div>
  )
}

export default Header