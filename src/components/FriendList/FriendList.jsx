
import css from "./FriendList.module.css"
import FriendListItem from '../FriendListItem/FriendListItem'
import userData from '../../userData.json'

function FriendList({ friends }) {
    return (
        <div className={css.friendlist}>
            <p className={css.title}>Friends of { userData.username}</p>
            <ul className={css.list}>
                {friends.map((friend) => {
                    return <li key={friend.id} className={css.item}>
                                <FriendListItem
                                name={friend.name}
                                avatar={friend.avatar}
                                isOnline={friend.isOnline}
                                />
                            </li>
                })}
            </ul>
        </div>
    )
}

export default FriendList
