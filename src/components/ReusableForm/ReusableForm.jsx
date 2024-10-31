import PropTypes from 'prop-types';
const ReusableForm = ({ formTitle, submitBtnText = 'Submit', handleSubmit, children }) => {

    // const handleSubmit = e => {
    //     e.preventDefault();
    // }

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }

    return (
        <div>
            {/* <h2>Sign Up Form</h2> */}
            {/* <h2>{formTitle}</h2> */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value={submitBtnText} />

            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    formTitle: PropTypes.string,
    submitBtnText: PropTypes.string,
    handleSubmit: PropTypes.func
};

export default ReusableForm;
