import './App.css';

import React, { useEffect, useState } from 'react'

import { getData } from './Api';
import Airline from './Airline';
import InfiniteScroll from 'react-infinite-scroll-component';

const totalPages = 5 // we can get total number of  pages from api

const App = () => {

  const [airlineData, setairlineData] = useState([])
  const [page, setpage] = useState(1)

  const fetchData = async () => {
    const res = await getData(page)
    const array = []
    if (res.status == 200) {
      res.data.data.map((item) => {
        array.push(item)
      })
      setairlineData([...airlineData, ...array])
      setpage(page + 1)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="container my-5">
      <InfiniteScroll
        dataLength={airlineData.length}
        next={fetchData}
        hasMore={page != totalPages} 
        style={{ overflowX: 'hidden' }}
        loader={<h4>Loading...</h4>}
      >

      <div className="row d-flex justify-content-between">
        {airlineData.map(({ airline }) => {
          return <Airline airline={airline} />
        })}
      </div>
      </InfiniteScroll>
    </div>

  )

}

export default App;