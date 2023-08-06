import { createContext } from 'react';

export const TreeContext = createContext();

export const TeeeContextProvider =({children}) =>{
  const [familyTree,setFamilyTree] = UseState("")
  
    useEffect(()=>{
        (async()=>{
          const res = await fetch('/family-tree')
          setFamilyTree(res.data)
        })()
    })

    return(
      <TreeContext.Provider value ={familyTree}>
        {children}
      </TreeContext.Provider>
    )
}

