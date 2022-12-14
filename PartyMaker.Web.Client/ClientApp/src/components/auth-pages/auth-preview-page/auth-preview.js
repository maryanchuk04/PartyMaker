import React from 'react'
import './auth-preview.css'
import { useHistory } from 'react-router-dom'
import SampleButton from '../../ui/SampleButton' 
const AuthPreviewPage = () => {
  const history = useHistory();
  return (
    <div className = "container auth-preview-container d-flex flex-column m-auto h-100">
      <div className = 'm-auto w-100'>
      <h1 className = "display-4 text-center" style = {{fontWeight : "700"}}>Sign Up</h1>
        <div className="row align-items-center m-auto w-100 mt-4">
            <div className="box-shadow-design col m-1 p-4 w-50 text-center d-flex flex-column justify-content-between h-100">
                <h3>For Suppliers</h3>
                <div className="text" style ={{height: "150px"}} >
                  <p>If you are a company that wants to develop <br/>
                    in the direction of creation and organization<br/>
                    holidays of any direction, welcome
                  </p>
                </div>
                <SampleButton onClick = {()=>history.push("/auth/suppliers")}>For Suppliers</SampleButton>
            </div>
            <div className="box-shadow-design col m-1 p-4 w-50 text-center d-flex flex-column justify-content-between h-100">
              <h3>For Customers</h3>
                <div className="text"style ={{height: "150px"}} >
                  <p>You want to organize a holiday<br/>
                  for your child, family, friends, etc...<br/>
                  and you don't know where to turn<br/>
                  you have reached the address
                  </p>
                </div>
                  <SampleButton onClick={() => {
                      history.push("/auth/customers")
                  }}>For Customers</SampleButton>
            </div>
        </div>
      </div>
        
        <div className="waves">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1aa94b" fill-opacity="1" d="M0,32L20,64C40,96,80,160,120,154.7C160,149,200,75,240,42.7C280,11,320,21,360,26.7C400,32,440,32,480,42.7C520,53,560,75,600,96C640,117,680,139,720,160C760,181,800,203,840,186.7C880,171,920,117,960,117.3C1000,117,1040,171,1080,208C1120,245,1160,267,1200,272C1240,277,1280,267,1320,224C1360,181,1400,107,1420,69.3L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>            </div>
        </div>
        
  )
}

export default AuthPreviewPage