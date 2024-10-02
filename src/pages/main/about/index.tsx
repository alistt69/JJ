import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {setUsername} from "@/store/reducers/auth/authSlice.ts";
import {useGetUserByUsernameQuery, useUpdateUsernameMutation} from "@/api/auth";

const About = () => {

    const username111 = useSelector((state: RootState) => state.auth.username) || '';
    const [updateUsername] = useUpdateUsernameMutation();
    const dispatch = useDispatch();


    const { data: user } = useGetUserByUsernameQuery(username111, {
        skip: username111.length === 0,
    });


    console.log(user, username111)

    const handleUpdateUsername = async () => {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const id: string = user ? user.id : ''
            const newUsername: string = 'sosihuy';
            const updatedUser = await updateUsername({ id, newUsername }).unwrap();
            dispatch(setUsername(updatedUser.username));
            alert('Username updated successfully!');
        } catch (error) {
            console.error('Failed to update username:', error);
            alert('Failed to update username.');
        }
    };

    return(
        <>
            <p>about</p>
            <a onClick={handleUpdateUsername}>{username111}</a>
        </>
    )
}

export default About;