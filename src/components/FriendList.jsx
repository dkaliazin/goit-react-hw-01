import FriendListItem from "./FriendListItem"
import friends from "./friends.json";
import css from "./FriendList.module.css"
const FriendList = ({ friends }) => {
    return(
    <>
    <ul className={css.ul}>
        {friends.map(friend => (
            <li className={css.li} key={friend.id}>
                <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}/>
	        </li>
    ))}
	</ul>
        </>
    )
}
export default FriendList;