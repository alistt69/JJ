import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@/context/notification.tsx";
import React, { useState } from "react";
import { useGetUserByUsernameQuery } from "@/api/user";
import { setUser, setUsername } from "@/store/reducers/auth/authSlice.ts";
import { paths } from "@/routes/routes.ts";
import { CloseOutlined } from "@ant-design/icons";
import classes from './classes.module.scss'
import InputField from "@/pages/auth/components/components/input-field";
import Icons from "@/pages/auth/components/components/icons";


const SignInForm: React.FC<{ layerIsOnRight: boolean }> = ({ layerIsOnRight }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { notify } = useNotification();
    const [inputUsername, setInputUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { data: user } = useGetUserByUsernameQuery(inputUsername, {
        skip: inputUsername.length === 0,
    });

    const handleSubmitSignIn = (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {notify(<CloseOutlined style={{ color: "darkred" }} />, 'failure', 'there is no user with such a username!'); return;}
        if (user.password !== password) {notify(<CloseOutlined style={{ color: "darkred" }} />, 'failure', 'wrong password!'); return;}

        dispatch(setUsername(inputUsername));
        dispatch(setUser({ id: user.id, username: user.username, password: user.password, applications: user.applications, cvs: user.cvs }));
        navigate(paths.MAIN);
    };

    return (
        <div className={`${classes.signin_container} ${layerIsOnRight ? classes.layer_is_on_right : classes.layer_is_on_left}`}>
            <h1>Sign In</h1>
            <Icons />
            <form onSubmit={handleSubmitSignIn}>
                <InputField
                    id="usernameSignIn"
                    name="username"
                    placeholder="username"
                    value={inputUsername}
                    onChange={setInputUsername}
                />
                <InputField
                    id="passwordSignIn"
                    name="password"
                    placeholder="password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={setPassword}
                    isVisible={isPasswordVisible}
                    toggleVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                />
                <a href="https://www.youtube.com/watch?v=UVg9hqwGwao" className={classes.forgot_password}>Forgot your password?</a>
                <button type="submit" className={classes.submit_btn}>SIGN IN</button>
            </form>
        </div>
    );
};

export default SignInForm;