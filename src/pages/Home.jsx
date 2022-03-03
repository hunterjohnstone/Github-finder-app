import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
function Home() {
    return (
        <>
        
            {/*SEARCH BAR GOES HERE*/}
            <UserSearch />
            <UserResults />
        </>
    )
}

export default Home
