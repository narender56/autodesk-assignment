import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Components
import Input from '../components/common/Input'
import StockCard from '../components/common/StockCard'

// import toast from '../utils/toast'

const Home = (props) => {
  document.title = 'Stock Buzz'

  const history = useHistory()

  useEffect(() => {
    if (!props?.location?.state?.success) {
      history.push('/login')
    }
  }, [])

  const handleSearch = (event) => {
    console.dir(event.value)
  }

  return (
    <div className="w100p flex justify-center">
      <div className="flex w100p h100p pa16">
        <div className="stock-container w25p">
          <div className="search-continer">
          <Input
            classes="mt24"
            inputClasses="h38 br4 w100p outline-none"
            placeholder="Search Stocks"
            handleChange={handleSearch}
          />
          </div>
          <div className="stocks-list">
            <StockCard label="Bajaj Finace" />
          </div>
        </div>
        <div className="stock-room">
          <h3>Stock Room Here</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
