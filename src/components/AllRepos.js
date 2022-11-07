import { useEffect, useState } from "react"
import Loading from "./Loading"
import Header from './Layout/Header'
import Profile from './Layout/Profile'
import Pagination from "./Pagination"

const AllRepos =()=> {
  const [ repoList, setRepoList ] = useState([])
  const [loading, setLoading] = useState(false)
  const [user] = useState('coeden')
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(4)

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${user}/repos`)
      const data = await response.json()
      setRepoList(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  //Get current User
  const indexOfLastPage  = currentPage * recordsPerPage
  const indexOfFirstPage = indexOfLastPage - recordsPerPage
  const currentUserPage = repoList.slice(indexOfFirstPage, indexOfLastPage);

  //Change page
  const paginate = pageNum => setCurrentPage(pageNum)

  return (
    <>
    <Header />
    {!repoList ? (<Loading />) : (
      <>
        <section>
          <h1 className="mt-4">{user}'s Repositories</h1>

          <div>
            {repoList.map((item) => (
              <Profile key = {item.id} {...item}/>
            ))}
          </div>
          
          <Pagination usersPerPage={recordsPerPage} totalUsers={repoList.length} paginate={paginate} />
        </section>
      </>
    )}
    </>
  )
}

export default AllRepos