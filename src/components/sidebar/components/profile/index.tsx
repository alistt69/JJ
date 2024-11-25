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

const Profile: React.FC<{ isShortSidebarOpen: boolean }> = ({ isShortSidebarOpen }) => {

    const user = useUserInit();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ updateUsername ] = useUpdateUsernameMutation();
    const [newUsername, setNewUsername] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [isChangingUserName, setIsChangingUserName] = useState<boolean>(false);

    const { data: isUnique } = useIsUserNameUniqueQuery(newUsername, {skip: newUsername.length === 0});

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
    }; //TODO: make notify

    const handleSignOut = () => {
        dispatch(resetUsername());
        navigate(paths.LOGIN);
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [isChangingUserName]);

    return (
        <div className={classes.profile} onClick={(e) => e.stopPropagation()}>
            <div className={classes.user_info}>
                <div className={classes.avatar}>
                    <div>
                        {user.username ? user.username[0].toUpperCase() : '?'}
                    </div>
                </div>
                {isChangingUserName && !isShortSidebarOpen ? (
                    <form onSubmit={handleUsernameChange}>
                        <div className={classes.input_container}>
                            <input type="input" className={classes.form_field} placeholder="newUsername"
                                   ref={inputRef}
                                   autoComplete="off" name="newUsername" id="newUsername"
                                   value={newUsername}
                                   onChange={(e) => setNewUsername(e.target.value)} required/>
                            <label htmlFor="newUsername" className={classes.form_label}>new username</label>
                        </div>
                        <div className={classes.actions}>
                            <button type="submit" className={classes.action_btn}>
                                <CheckOutlined/>
                            </button>
                            <button type="reset" onClick={() => setIsChangingUserName(false)}
                                    className={classes.action_btn}>
                                <CloseOutlined/>
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        {!isShortSidebarOpen && (
                            <div className={classes.username}>
                                <p className={classes.value}>{user.username}</p>
                                <div className={classes.edit}
                                     onClick={() => setIsChangingUserName(true)}>edit
                                    username
                                </div>
                            </div>
                        )}
                    </>
                )}

            </div>
            {!isShortSidebarOpen && !isChangingUserName && (
                <button className={classes.logout_btn} onClick={handleSignOut}>
                    <img src={logout_image} alt={"logout"}/>
                </button>
            )}
        </div>
    );
};

export default Profile;
