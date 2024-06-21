import userData from "./UserData.json";
import css from "./Profile.module.css"
const Profile = ({ name, tag, location, image, stats }) => {
    return (
  <div className={css.container}>
    <div className={css.userbox}>
      <img
      className={css.img}
      src={image}
      alt="User avatar"
      />
      <p className={css.username}>{name}</p>
      <p className={css.usrtext}>@{tag}</p>
      <p className={css.usrtext}>{location}</p>
    </div>

  <ul className={css.ul}>
    <li className={css.li}>
      <span>Followers</span>
      <span className={css.stats}>{stats.followers}</span>
    </li>
    <li className={css.li}>
      <span>Views</span>
      <span className={css.stats}>{stats.views}</span>
    </li>
    <li className={css.li}>
      <span>Likes</span>
      <span className={css.stats}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
export default Profile;