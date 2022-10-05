import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/main-page/Home";
import { FetchData } from "./components/FetchData";
import "./custom.css";
import CustomerLogin from "./components/pages/customerLogin";
import SupplierLogin from "./components/pages/supplier-page/supplierLogin";
import SupplierWorkspace from "./components/ui/supplier-workspace/SideMenu";
import SupplierProfileEdit from "./components/pages/supplier-profile/supplierProfileEdit";
import SupplierProfile from "./components/pages/supplier-profile/supplierProfile";
import CustomerProfile from './components/pages/customer-profile/customer-profile'
import NotFound from './components/pages/not-found/not-found'
import AuthPreviewPage from "./components/auth-pages/auth-preview-page/auth-preview";
import SingInPage from "./components/auth-pages/sign-in/sign-in";
import TopButton from "./components/ui/TopButton";
import CreateOrder from "./components/pages/order/create-order-page/create-order";
import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contacts from "./components/pages/contacts/contacts";
import OrderDetailsPage from "./components/pages/order/order-details-page/order-details-page";
import {useHistory} from "react-router-dom"
import {Redirect, Switch} from "react-router-dom"
export default function App() {
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });
  const [showButton, setShowButton] = useState();
  const HEADER_HEIGHT = 70;
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  function handleVisibleButton() {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 200) {
      console.log("HI");
      return setShowButton(true);
    } else if (scrollHeight <= 200) {
      return setShowButton(false);
    }
  }
  function handleScrollUp() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <Layout>
      <ThemeProvider theme={muiTheme}>
        <div style={{ height: window.innerHeight - HEADER_HEIGHT}}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth/suppliers" component={SupplierLogin} />
            <Route path="/auth/customers" component={CustomerLogin} />
            <Route exact path="/create-account" component={AuthPreviewPage} />
            <Route exact path="/auth/login" component={SingInPage} />
            <Route exact path="/create-order" component={CreateOrder} />
            <Route exact path="/supplier/workspace" component={SupplierWorkspace} />
            <Route exact path="/supplier/profile-edit" component={SupplierProfileEdit} />
            <Route path="/supplier/profile/:id" component={SupplierProfile} />
            <Route path = "/customer/profile" component = {CustomerProfile}/>
            <Route path = "/order/:id" component = {OrderDetailsPage}/>
            <Route path ="/сontact" component = {Contacts}/> 
            <Route path = "/not-found" component = {NotFound} />
            <Redirect to="/not-found" from = "*" />
          </Switch>
          <TopButton handleScrollUp={handleScrollUp} showButton={showButton} />
        </div>
      </ThemeProvider>
    </Layout>
  );
}
