import { useEffect, useState } from "react"
import Loading from "./Loading"
import Header from './Layout/Header'

const AllRepos =()=> {
  const [ repoList, setRepoList ] = useState([])
  const [loading, setLoading] = useState(false)
  const [users] = useState('coeden')

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${users}/repos`)
      const data = await response.json()
      setRepoList(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  console.log(repoList)
  return (
    <>
    <Header />
    {!repoList ? (<Loading />) : (
      <>
        <section>

        </section>
      </>
    )}
    </>
  )
}

export default AllRepos