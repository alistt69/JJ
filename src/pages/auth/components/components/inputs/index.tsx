import classes from "./classes.module.scss"
import React, {useState} from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import { useAddUserMutation, useGetUserByUsernameQuery } from '@/api/auth';
import {useDispatch} from "react-redux";
import {setUsername} from "@/store/reducers/auth/authSlice.ts";
import {useNavigate} from "react-router-dom";



const Inputs: React.FC<{ number: string }> = ({ number }) => {


    const dispatch = useDispatch();
    const [addUser] = useAddUserMutation();
    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [username, setUsernameI] = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const { data: user } = useGetUserByUsernameQuery(username, {
        skip: username.length === 0,
    });

    console.log(user)



    const handleSubmitSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (user && user.password === password) {
            dispatch(setUsername(username));
            console.log('success');
            navigate('/main/home');

        } else {
            alert('Invalid credentials');
        }
    };

    const handleSubmitSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            await addUser({ username, password }).unwrap();
            dispatch(setUsername(username));
            console.log('success');
            navigate('/main/home');
        } else {
            alert('user with this username already exists!')
        }


    };


    return(
        <>
            <div className={classes.input_container}>
                <form onSubmit={number === 'In' ? handleSubmitSignIn : handleSubmitSignUp}>
                    <div className={classes.forms_container}>

                        <input type="input"
                               className={classes.form_field}
                               placeholder={`username${number}`}
                               autoComplete="off"
                               value={username}
                               onChange={(e) => setUsernameI(e.target.value)}
                               name={`username${number}`}
                               id={`username${number}`}
                               required/>

                        <label htmlFor={`username${number}`}
                               className={classes.form_label}>
                            username
                        </label>

                    </div>

                    <div className={classes.forms_container}>
                        <input type={isPasswordVisible ? 'text' : 'password'}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className={classes.form_field}
                               placeholder={`password${number}`}
                               autoComplete="off"
                               name={`password${number}`}
                               id={`password${number}`}
                               required/>

                        <label htmlFor={`password${number}`}
                               className={classes.form_label}>
                            password
                        </label>

                        <div onClick={togglePasswordVisibility}>
                            {isPasswordVisible ? <EyeInvisibleOutlined/> : <EyeOutlined/>}
                        </div>

                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Inputs;