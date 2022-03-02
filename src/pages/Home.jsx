import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
function Home() {
    return (
        <>
            <h1 className = 'px-10 text-3xl font-bold align-middle mb-12 align-middle'>Github User Navigator</h1>
        
            {/*SEARCH BAR GOES HERE*/}
            <UserSearch />
            <UserResults />
        </>
    )
}

export default Home
