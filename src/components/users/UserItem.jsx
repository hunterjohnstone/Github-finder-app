import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


function UserItem({user : {login, avatar_url}}) {
    return (
        
        <div className = 'card shadow-md compact side bg-base-100'>
            <div className = 'flex-row items-center space-x-4 card-body'>
                <Link to = {`/users/${login}`}>
                    <div>
                        <div className = 'avatar'>
                            <div className="rounded-full shadow w-14 h-14">
                                <img src = {avatar_url} alt = "Profile"/>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to = {`/users/${login}`}>
                    <div>
                        <h2 className = 'card-title hover:underline'>{login}</h2>
                        <Link className = 'text-base-content text-opacity-40' to = {`/users/${login}`}>
                            Profile 
                        </Link>
                    </div>
                </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: propTypes.object.isRequired
}

export default UserItem
