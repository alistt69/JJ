import { useIsUserNameUniqueQuery, useUpdateUsernameMutation } from "@/api/user";
import { resetUsername, setUsername } from "@/store/reducers/auth/authSlice.ts";
import { paths } from "@/routes/routes.ts";

import React, { useEffect, useRef, useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useUserInit } from "@/hooks/init";
import { useDispatch } from "react-redux";

import classes from "./classes.module.scss";
import logout_image from "@/images/logout/logout.png"


const ERROR_MESSAGES = {
    invalid: 'Invalid username',
    tooLong: 'Username must be less than 12 chars',
    notUnique: 'This username is already taken',
    success: 'Username updated successfully!',
};

const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const user = useUserInit();
    const [ updateUsername ] = useUpdateUsernameMutation();
    const [newUsername, setNewUsername] = useState<string>('');
    const [isChangingUserName, setIsChangingUserName] = useState<boolean>(false);

    const { data: isUnique } = useIsUserNameUniqueQuery(newUsername, {
        skip: newUsername.length === 0,
    });

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [isChangingUserName]);

    const handleSignOut = () => {
        dispatch(resetUsername());
        navigate(paths.LOGIN);
    };

    const validateUsername = (username: string): string | null => {
        if (!username) return ERROR_MESSAGES.invalid;
        if (username.length >= 12) return ERROR_MESSAGES.tooLong;
        if (isUnique) return ERROR_MESSAGES.notUnique;
        return null;
    };

    const handleUsernameChange = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedUsername = newUsername.trim();
        const validationError = validateUsername(trimmedUsername);

        if (validationError) {
            alert(validationError);
            return;
        }

        updateUsername({ id: user.id, newUsername: trimmedUsername })
            .then(() => {
                dispatch(setUsername(trimmedUsername));
                setIsChangingUserName(false);
                setNewUsername('');
                alert('Username updated successfully!');
            })
            .catch((e) => alert(e));
    };

    return (
        <div className={classes.profile}>
            <div className={classes.user_info}>
                <div className={classes.avatar}>
                    <p>{user.username ? user.username[0].toUpperCase() : '?'}</p>
                </div>
                {isChangingUserName ? (
                    <div className={classes.username_input}>
                        <form onSubmit={handleUsernameChange} className={classes.form}>
                            <input
                                ref={inputRef}
                                value={newUsername}
                                placeholder='new username'
                                className={classes.input_field}
                                autoComplete="off"
                                onChange={(e) => setNewUsername(e.currentTarget.value)}
                            />
                            <button type="submit" className={classes.action_btn}>
                                <CheckOutlined/>
                            </button>
                            <button onClick={() => setIsChangingUserName(false)} className={classes.action_btn}>
                                <CloseOutlined/>
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className={classes.username}>
                        <p className={classes.username_value}>{user.username}</p>
                        <p className={classes.username_edit} onClick={() => setIsChangingUserName(true)}>edit username</p>
                    </div>
                )}
            </div>
            <button onClick={handleSignOut} className={classes.logout_btn}>
                <img src={logout_image} alt='Logout' className={classes.logout_img}/>
            </button>
        </div>
    );
};

export default Profile;
