import React from 'react'
import SignIn from '../components/auth-pages/sign-in/sign-in'

class LoginContainer extends React.Component{
   
   submit = values => {
      console.log(values);
      console.log(this.props);
      this.props.login(values);
   }
   render(){
      return (
         <SignIn onSubmit={this.submit}/>
       )
   }
}

const mapStateToProps = state =>{
   return {
      loginStatus: state.login
   }
 }
 
 const mapDispatchToProps = dispatch =>{
   return{
     login : data => dispatch(login(data))
   }
 }
 

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)