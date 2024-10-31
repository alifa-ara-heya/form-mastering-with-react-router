import { useEffect, useRef } from "react";

const RefForm = () => {
    
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // to place the cursor at the name input when the page loads.
    
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name='name' />
                <br />
                <input ref={passwordRef} type="password" name='password' />
                <br />
                <input defaultValue={'rpjoni@sojoni.klanto'} ref={emailRef} type="email" name='email' />
                <br />
                <input type="submit"  value="Submit" />

            </form>
        </div>
    );
};

export default RefForm;