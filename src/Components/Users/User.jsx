import style from "./Users.module.css";
import 'antd/dist/antd.css';
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let User = ({ followingInProgress, follow, unfollow, user }) => {

    return (
        <div className={style.users}>
            <div className={style.usersAvatar}>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>

                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={style.buttonUnfollow}
                                  onClick={() => unfollow(user.id)}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={style.buttonFollow}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>
                    }
                </div>
            </div>
            <div className={style.usersInfo}>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
        </div>
    )
}

export default User;