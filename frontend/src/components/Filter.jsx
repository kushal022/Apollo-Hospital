import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDoc } from '../context/DocContext';

const Filter = () => {
    const [filterInputData , setFilterInputData] = useState({})

    const {doctors,filterData,loading,error,apply,addFilter,clearAll} = useDoc();
    
    useEffect(()=>{
        addFilter(filterInputData)
    },[filterInputData])
    
    const handleChange=(e)=>{
        e.preventDefault();
        const value = (e.target.value)
        const name = (e.target.name)
        setFilterInputData(prev=>({...prev,[name]:value }))
    }

    const handleApply= () => {
        apply(filterData)
    }
    
    const handleClear = () =>{
        clearAll();
        setFilterInputData({})
    }
    
  return (
    <div className='flex-1/4 h-150 pb-8 z-10 overflow-y-scroll border-r border-r-zinc-200' >
        <div className='flex justify-between px-4 my-3 border-b border-b-zinc-200'>
            <h3 className='pb-3 font-semibold text-lg'>Filters</h3>
            <button onClick={handleClear} className='text-cyan-700 font-bold cursor-pointer'>Clear All</button>
            <button onClick={handleApply} className='text-cyan-700 font-bold cursor-pointer'>Apply</button>
        </div>
        <div className='text-cyan-700 font-bold text-sm border rounded p-2 text-center'>
            Show Doctors Near Me
        </div>
        <div className='mt-3 flex flex-col gap-3'>
            <h2 className='font-bold text-lg text-zinc-700'>Mode of Consult</h2>
            {['Hospital Visit','Online Consult'].map((item,i)=>(
                <div className='flex gap-3' key={i}>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        checked={filterInputData.consult?.includes(item) || false} 
                        name='consult' 
                        value={item} 
                        type="checkbox" 
                        id={item} 
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
        <div className='mt-3 flex flex-col gap-3'>
            <h2 className='font-bold text-lg text-zinc-700'>Experience (In Years)</h2>
            {['0-5','6-10','11-16','16+'].map((item,i)=>(
                <div className='flex gap-3' key={i}>
                    <input 
                        onChange={(e)=>handleChange(e)}
                        checked={filterInputData.experience?.includes(item) || false} 
                        name='experience' 
                        value={item} 
                        type="checkbox" 
                        id={item} 
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
        <div className='mt-3 flex flex-col gap-3'>
            <h2 className='font-bold text-lg text-zinc-700'>Fess (In Rupees)</h2>
            {['100-500','500-1000','1000+'].map((item,i)=>(
                <div className='flex gap-3' key={i}>
                    {/* <input onChange={(e)=>handleChange(e)} name='price' value={item==='100-500'?'100':item==='500-1000'?'500':item==='1000+'?'1000':'1000'} type="checkbox" id={item} /> */}
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        name='price'
                        checked={filterInputData.price?.includes(item) || false} 
                        value={item} 
                        type="checkbox" 
                        id={item} 
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
        <div className='mt-3 flex flex-col gap-3'>
            <h2 className='font-bold text-lg text-zinc-700'>Language</h2>
            {['English','Hindi','Telugu'].map((item,i)=>(
                <div className='flex gap-3' key={i}>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        checked={filterInputData.language?.includes(item) || false} 
                        name='language' 
                        value={item} 
                        type="checkbox" 
                        id={item} 
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
        <div className='mt-3 flex flex-col gap-3'>
            <h2 className='font-bold text-lg text-zinc-700'>Facility</h2>
            {['Apollo Hospital','Other Clinics'].map((item,i)=>(
                <div className='flex gap-3' key={i}>
                    <input onChange={(e)=>handleChange(e)} 
                    checked={filterInputData.hospital?.includes(item) || false} 
                    name='hospital' 
                    value={item} 
                    type="checkbox" 
                    id={item} 
                />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filter