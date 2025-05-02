import { createContext,useContext } from "react";

export const DocContext = createContext({
    doctors:[],
    filterData:{
      consult:'',
      language:'',
      hospital:'',
      price:'',
      specialization:'',
      rating:'',
      dayAvailable:'',
      experience:''
    },
    loading:true,
    error:null,
    apply: (filterData)=>{},
    addFilter: (filterInputData)=>{},
    clearAll:()=>{}

});

export const DocProvider = DocContext.Provider

//Custom Hook
export const useDoc = ()=>{
    return useContext(DocContext)
}