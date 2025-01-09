import React from 'react'
import DataTable from './components/DataTable'
import Graph from './components/Graph'
import DataContextProvider from './context/DataContext'

const App = () => {
  return (
    <>
    <DataContextProvider>
        <div className='container'>
            <Graph />
            <DataTable />
        </div>
    </DataContextProvider>
    </>
  )
}

export default App
