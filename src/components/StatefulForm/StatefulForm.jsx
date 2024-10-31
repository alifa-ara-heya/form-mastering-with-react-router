import { useState } from "react";

const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // const [name, setName] = useState(null);
    const [name, setName] = useState('hiya');
    const [error, setError] = useState('');

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be longer than 6 characters.')
        } else {
            setError('')
            console.log(name, email, password, error);
        }

    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} type="text" name='name' onChange={handleNameChange} />
                <br />
                <input type="email" name='email' onChange={handleEmailChange} />
                <br />
                <input type="password" name='password' onChange={handlePasswordChange} required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error} </p>
                }
            </form>

        </div>
    );
};

export default StatefulForm;