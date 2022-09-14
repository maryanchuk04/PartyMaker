import React from 'react'
import './auth-preview.css'
import { useHistory } from 'react-router-dom'
import SampleButton from '../../ui/SampleButton' 
const AuthPreviewPage = () => {
  const history = useHistory();
  return (
    <div className = "auth-preview-container">
        <h1 className = "title">Sign Up</h1>
        <div className="auth-preview-info">
            <div className="info-block">
                <h3>For Suppliers</h3>
                <div className="text">
                  <p>If you are a company that wants to develop <br/>
                    in the direction of creation and organization<br/>
                    holidays of any direction, welcome
                  </p>
                </div>
                <SampleButton onClick = {()=>history.push("/auth/suppliers")}>For Suppliers</SampleButton>
            </div>
            <div className="info-block">
              <h3>For Customers</h3>
                <div className="text">
                  <p>You want to organize a holiday<br/>
                  for your child, family, friends, etc...<br/>
                  and you don't know where to turn<br/>
                  you have reached the address
                  </p>
                </div>
                <SampleButton onClick = {()=>history.push("/auth/customers")}>For Customers</SampleButton>
            </div>
            <div className="waves">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#1aa94b" fill-opacity="1" d="M0,160L20,186.7C40,213,80,267,120,240C160,213,200,107,240,96C280,85,320,171,360,181.3C400,192,440,128,480,122.7C520,117,560,171,600,165.3C640,160,680,96,720,96C760,96,800,160,840,208C880,256,920,288,960,277.3C1000,267,1040,213,1080,160C1120,107,1160,53,1200,53.3C1240,53,1280,107,1320,122.7C1360,139,1400,117,1420,106.7L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
                </svg>
            </div>
            </div>
        </div>
        
  )
}

export default AuthPreviewPage