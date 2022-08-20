import React, {createContext, useEffect, useState} from 'react';

//Api
import { getData } from '../services/api';

//Context
export const DataContextProvider = createContext();

const ApiContextProvider = ({children}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getFromApi = async () => {
      setData(await getData())
    }

    getFromApi();
  }, [])
  return (
    <DataContextProvider.Provider value={data}>
      {children}
    </DataContextProvider.Provider>
  );
};

export default ApiContextProvider;