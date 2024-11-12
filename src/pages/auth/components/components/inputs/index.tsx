import classes from "./classes.module.scss"
import React, {useState} from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import { useAddUserMutation, useGetUserByUsernameQuery } from '@/api/user';
import {useDispatch} from "react-redux";
import {setUser, setUsername} from "@/store/reducers/auth/authSlice.ts";
import { useNavigate } from "react-router-dom";
import { ItemApp, ItemCvs } from "@/models/user";
import { generateId } from "@/services/id_generator";
import { useAddApplicationMutation, useAddCvMutation } from "@/api/posts";
import { paths } from "@/routes/routes.ts";


const Inputs: React.FC<{ number: string }> = ({ number }) => {

    const dispatch = useDispatch();
    const [ addUser ] = useAddUserMutation();
    const [ setApplication ] = useAddApplicationMutation();
    const [ setCv ] = useAddCvMutation();
    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [username, setUsernameI] = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const idForNewUser = generateId()
    const { data: user } = useGetUserByUsernameQuery(username, {
        skip: username.length === 0,
    });

    console.log(user)

    const applications: ItemApp = {
        id: generateId(),
        author_id: idForNewUser,
        profession: 'Junior Frontend Developer',
        description:
            'Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
            ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
            'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
            'mollit anim id est laborum.',
        salary: "1000$",
        location: "Ryazan, Russia"
    }

    const cvs: ItemCvs = {
        id: generateId(),
        author_id: idForNewUser,
        name: 'Artyom Kachyro',
        profession: "Frontend Developer",
        description:
            "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
            "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
            "nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
            "mollit anim id est laborum.",
        location: "Moscow, Italy",
        salary: "1$"
    }

    const handleSubmitSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (user && user.password === password) {
            dispatch(setUsername(username));
            console.log('success');
            dispatch(setUser({id: user.id, username: user.username, password: user.password, applications: user.applications, cvs: user.cvs}))
            navigate(paths.MAIN);

        } else {
            alert('Invalid credentials');
        }
    };

    const handleSubmitSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            await addUser({ id: idForNewUser, username, password, applications: [applications.id], cvs: [cvs.id] }).unwrap();
            await setApplication(applications)
            await setCv(cvs)
            dispatch(setUser({ id: idForNewUser, username, password, applications: [applications.id], cvs: [cvs.id] }))
            dispatch(setUsername(username));
            console.log('success');
            navigate(paths.MAIN);
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
                    { number === "In" && <p className={classes.forgot}>Forgot your password?</p>}
                    { number === "Up" && <p className={classes.hidden}>Forgot your password?</p>}

                    <button type="submit" className={classes.btn}>
                        SIGN {number}
                    </button>

                </form>
            </div>
        </>
    )
}

export default Inputs;