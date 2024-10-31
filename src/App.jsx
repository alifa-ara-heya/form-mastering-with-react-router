
import './App.css'
import Grandpa from './components/Grandpa/Grandpa';
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  // const handleSignUpSubmit = e => {
  //   e.preventDefault();
  // }

  const handleSignUpSubmit = data => {
    console.log('sign up data:', data);
  }

  // const handleUpdateProfile = e => {
  //   e.preventDefault();
  // }

  const handleUpdateProfile = data => {
    console.log('Update Profile data:', data);
  }

  return (
    <>

      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
          </div>
      </ReusableForm>

      <ReusableForm
        formTitle={'Profile Update'} submitBtnText="Update"
        handleSubmit={handleUpdateProfile}>

          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated.</p>
          </div>
      </ReusableForm>

      <Grandpa></Grandpa>
    </>
  )
}

export default App
