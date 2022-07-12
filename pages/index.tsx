import type { NextPage } from 'next'
import Timer from './timer'

const Home: NextPage = () => {
  const timer = 30
  
  return (
    <Timer maxTime={30}/>
  )
}

export default Home
