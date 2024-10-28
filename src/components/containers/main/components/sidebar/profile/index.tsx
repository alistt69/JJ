import classes from "./classes.module.scss";
import {EditOutlined, CheckOutlined, CloseOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {resetUsername, setUsername} from "@/store/reducers/auth/authSlice.ts";
import {useEffect, useRef, useState} from "react";
import {useIsUserNameUniqueQuery, useUpdateUsernameMutation} from "@/api/auth";
import {useUserInit} from "@/hooks/init";
import {RootState} from "@/store";
import {paths} from "@/routes/routes.ts";
import logout_image from '@/images/logout/logout.png'


const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useUserInit();
    const [updateUsername] = useUpdateUsernameMutation();
    const username = useSelector((state: RootState) => state.auth.username);

    const [newUsername, setNewUsername] = useState<string>('');
    const [isChangingUserName, setIsChangingUserName] = useState<boolean>(false);

    const { data: isUnique } = useIsUserNameUniqueQuery(newUsername, {
        skip: newUsername.length === 0,
    })

    const handleNewUserName = async (newUsername: string) => {
        if (!isUnique) {
            try {
                const id: string = user.id
                const updatedUser = await updateUsername({id, newUsername}).unwrap();
                dispatch(setUsername(updatedUser.username));
                setIsChangingUserName(false)
                setNewUsername('')
                alert('Username updated successfully!');
            } catch (error) {
                console.error('Failed to update username:', error);
                alert('Failed to update username.');
            }
        } else {
            alert('This username is already taken')
        }
    }

    const handleSignOut = () => {
        dispatch(resetUsername());
        navigate(paths.LOGIN);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }

    }, [isChangingUserName]);


    return (
        <>
            <div className={classes.user_info}>

                <div className={classes.profile_pic}>
                    <p>{username ? username[0] : '?'}</p>
                </div>

                {
                    !isChangingUserName ?

                        <div className={classes.username}>
                            {username}<EditOutlined onClick={() => setIsChangingUserName(true)}/>
                        </div>

                        :

                        <div className={classes.username_input}>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                if (newUsername.trim() && newUsername.length < 12) {
                                    handleNewUserName(newUsername).then()
                                }
                            }}>
                                <input ref={inputRef} placeholder='new username' id="username" autoComplete="off"
                                       value={newUsername} onChange={(e) => setNewUsername(e.currentTarget.value)}/>
                                <button type="submit">
                                    <CheckOutlined/></button>
                                <button onClick={() => setIsChangingUserName(false)}><CloseOutlined/></button>
                            </form>
                        </div>
                }

                <div onClick={handleSignOut} className={classes.logout_btn}>
                    <img src={logout_image} alt={''} className={classes.logout_img}/>
                </div>

            </div>
        </>
    )
}

export default Profile;
