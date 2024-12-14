
// import '../components/Profile.module.css'
import style from "./Profile.module.css"

function Profile(props) {
    return (
        <>
            <div className={style.profile}>
                <div className={style.container}>
                    <img
                        src={props.image}
                        alt={props.name}
                        width="120"
                        className={style.img}
                    />
                    <p className={style.name}>{props.name}</p>
                    <p className={style.info}>@{props.tag}</p>
                    <p className={style.info}>{props.location}</p>
                </div>

                <ul className={style.list}>
                    <li className={style.item}>
                        <span>Followers</span>
                        <span className={style.bolt}>{props.stats.followers}</span>
                    </li>
                    <li className={style.item}>
                        <span>Views</span>
                        <span className={style.bolt}>{ props.stats.views}</span>
                    </li>
                    <li className={style.item}> 
                        <span>Likes</span>
                        <span className={style.bolt}>{ props.stats.likes}</span>
                    </li>
                    </ul>
            </div>

        </>
    )
}

export default Profile