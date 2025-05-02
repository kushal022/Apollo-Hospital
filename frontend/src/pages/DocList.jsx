import React, { useState } from 'react';
import { differenceInYears } from 'date-fns';
import ReactPaginate from 'react-paginate';
import { FaAngleDown, FaDownLong, FaUpLong } from 'react-icons/fa6';
import { useDoc } from '../context/DocContext';
import { useNavigate } from 'react-router-dom';

const DocList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {doctors,filterData,loading,error,apply} = useDoc();
  const navigate = useNavigate()

  const itemsPerPage = 5;
  let currentItems;
  // Pagination logic
  const pageCount = Math.ceil(doctors.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  // const currentItems = doctors && doctors.slice(offset, offset + itemsPerPage);
  if(doctors.length>0){
     currentItems = doctors && doctors.slice(offset, offset + itemsPerPage);
  }

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <main>
      
      <section className='overflow-y-scroll h-150'>
        {loading && (
          <div className='flex items-center justify-center text-xl font-semibold h-screen'>
            Loading...
          </div>
        )}

      <section className='flex justify-between gap-5 mt-8'>
        <div className='ml-8 w-150'>
          <h1 className='font-bold text-2xl'>Consult General Physicians Online - Internal Medicine Specialists</h1>
          <p>({doctors.length} Doctors)</p>
        </div>
        <div className=''>
          <button
            onClick={()=>navigate('/addDoc')} 
            className='border border-cyan-700 text-cyan-700 rounded h-fit w-fit px-3 py-2 font-semibold hover:bg-cyan-100'>
            Add Doctors
          </button>
        </div>
        <div className='flex items-center justify-between rounded-lg  border border-zinc-300 text-zinc-700 px-3 py-2 h-fit w-50'>
          <div className='flex items-center'>
          <FaUpLong/>
          <FaDownLong/>
          <p className='pl-3'>Availability</p>
          </div>
          <FaAngleDown/>
        </div>
      </section>

        {currentItems && currentItems.map((doc, i) => (
          <div className='border flex gap-5 p-3 rounded border-zinc-200 mt-7 ml-10' key={i}>
            <div className='w-25'>
              <img
                src={
                  doc.basicInfo.gender === 'Female'
                    ? 'https://img.freepik.com/premium-vector/portrait-beautiful-doctor-woman-avatar-social-media-bright-vector-illustration_590570-4.jpg?w=900'
                    : 'https://img.freepik.com/premium-vector/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team_625536-2178.jpg'
                }
                alt='picture'
              />
            </div>
            <div className='w-60'>
              <div className='font-bold text-zinc-700'>
                Dr. {doc.basicInfo.firstName} {doc.basicInfo.lastName}
              </div>
              <div className='text-zinc-400 font-semibold'>
                {doc.professionalInfo.specialization.map((item, i) => (
                  <span key={i}>
                    {item}
                    {doc.professionalInfo.specialization.length > 1 ? ' /' : ''}
                  </span>
                ))}
              </div>
              <div className='uppercase font-semibold text-purple-500 text-sm'>
                {doc.professionalInfo.yearsOfExperience}
                {doc.education.map((item, i) => (
                  <span key={i}> &bull; {item.degree} &bull; {item.institution}</span>
                ))}
              </div>
              <div className='text-zinc-400 text-sm'>
                {doc.contactInfo.address.state}, {doc.contactInfo.address.country}
              </div>
              <div className='text-zinc-400 text-sm uppercase'>
                {doc.employment.map((item, i) => (
                  <span key={i}>{item.hospitalName}</span>
                ))}
              </div>
              <div className='text-green-900 text-sm'>Rating {doc.ratings}</div>
            </div>
            <div className='w-80 flex flex-col  justify-center'>
              <div className='flex gap-4 items-center justify-center'>
                <h1 className='font-bold'>₹ {doc.services.map((item, i) => item.price)}</h1>
                <p className='border-l border-l-zinc-200 pl-4 text-xs text-amber-400'>
                  ₹ 60 Cashback
                </p>
              </div>
              <div className='text-cyan-700'>
                <button className='border w-full rounded-lg py-2 font-semibold mt-2 cursor-pointer hover:shadow hover:bg-cyan-50'>
                  Consult Online
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* React Paginate controls */}
        <div className='flex items-center justify-center mt-6'>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName='flex items-center gap-2 cursor-pointer font-bold'
            pageClassName='px-3 py-1 border rounded cursor-pointer'
            activeClassName='bg-cyan-500 text-white'
            previousLabel='<'
            nextLabel='>'
            breakLabel='...'
          />
        </div>
      </section>
    </main>
  );
};

export default DocList;












