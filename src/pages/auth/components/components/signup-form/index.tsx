import classes from './classes.module.scss'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation, useGetUserByUsernameQuery } from "@/api/user";
import React, { useState } from "react";
import { generateId } from "@/services/id_generator";
import { setUser, setUsername } from "@/store/reducers/auth/authSlice.ts";
import { paths } from "@/routes/routes.ts";
import InputField from "@/pages/auth/components/components/input-field";
import Icons from "@/pages/auth/components/components/icons";
import { CloseOutlined } from "@ant-design/icons";
import { useNotification } from "@/context/notification.tsx";


const SignUpForm: React.FC<{ layerIsOnRight: boolean }> = ({ layerIsOnRight }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { notify } = useNotification();
    const [addUser] = useAddUserMutation();
    const [inputUsername, setInputUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const idForNewUser = generateId();
    const { data: user } = useGetUserByUsernameQuery(inputUsername, {
        skip: inputUsername.length === 0,
    });

    const handleSubmitSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {notify(<CloseOutlined style={{ color: "darkred" }} />, 'failure', `user with a username "${inputUsername}" already exists!`); return;}

        addUser({ id: idForNewUser, username: inputUsername, password, applications: [], cvs: [] })
            .then(() => {
                dispatch(setUser({ id: idForNewUser, username: inputUsername, password, applications: [], cvs: [] }));
                dispatch(setUsername(inputUsername));
                navigate(paths.MAIN);
            })
            .catch((error) => {
                notify(<CloseOutlined style={{ color: "darkred" }} />, 'failure', `error: ${error}`);
            });
    };

    return (
        <div className={`${classes.signup_container} ${layerIsOnRight ? classes.layer_is_on_right : classes.layer_is_on_left}`}>
            <h1>Sign Up</h1>
            <Icons />
            <form onSubmit={handleSubmitSignUp}>
                <InputField
                    id="usernameSignUp"
                    name="username"
                    placeholder="username"
                    value={inputUsername}
                    onChange={setInputUsername}
                />
                <InputField
                    id="passwordSignUp"
                    name="password"
                    placeholder="password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={setPassword}
                    isVisible={isPasswordVisible}
                    toggleVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                />
                <p className={classes.forgot_password}>Forgot your password?</p>
                <button type="submit" className={classes.submit_btn}>SIGN UP</button>
            </form>
        </div>
    );
};

export default SignUpForm;