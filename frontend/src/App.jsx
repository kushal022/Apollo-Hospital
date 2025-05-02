import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Filter from './components/Filter'
import DocList from './pages/DocList'
import { DocContext, DocProvider } from './context/DocContext'
import axios from 'axios'
import AddDoctorForm from './pages/AddDoctorForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [doctors,setDoctors]= useState([])
  const [loading,setLoading]= useState(true)
  const [filterData,setFilterData]= useState({})
  const [error,setError]= useState(false)

  const addFilter = (filterInputData)=>{
      setFilterData(filterInputData)
  }

  const apply =async(filterData)=>{
    try {
      setLoading(true)
      setDoctors([])
      const res = await axios.post(`http://localhost:3700/api/v1/doc/getAllFilterDoctor`,{filterData})
      console.log(res.data.data)
      setDoctors(res.data.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(filterData)
  // console.log('doctors------->', doctors)

  const clearAll =()=>{
    fetchDoctors();
  }

  const fetchDoctors = async () => {
      try {
        setLoading(true);
        setDoctors([])
        const res = await axios.get(`http://localhost:3700/api/v1/doc/getAllDoctor`)
        setDoctors(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
  };
  
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <BrowserRouter>
    <DocProvider value={{doctors,filterData,loading,error,apply,addFilter,clearAll}}>
    <div className=''>
     <Header className=''/>
     <div className='max-w-7xl m-auto flex '>
      <Filter />
      <div className='flex-11/12'>
      <Routes>
        <Route path='/' element={ <DocList/>}  />
        <Route path='/addDoc' element={ <AddDoctorForm/>}  />
      </Routes>
      </div>
     </div>
    </div>
    </DocProvider>
    </BrowserRouter>
  )
}

export default App
