import type { NextPage } from 'next'
import Timer from './timer'

const Home: NextPage = () => {
  return (
    <Timer maxTime={30}/>
  )
}

export default Home
