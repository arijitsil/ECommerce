import React, {Component} from 'react'
import { BrowserRouter,Switch, Route,Redirect } from "react-router-dom";

import styled from 'styled-components'
import {Provider} from 'react-redux'
import {store,persistor} from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import {
    SignIn,SignUp, Dashboard , HubCreate,RestType,SegmentType,CostType,
    Brand,OtherCategory,HubTable,MenuTypeTable,SegmentTable,OtherCategoryTable,BrandTable,RestaurantCreate,
    RestaurantTable,RestaurantEdit,HubEdit,MenuTypeEdit,CostTypeTable,CostTypeEdit,SegmentEdit,BrandEdit,
    OtherCategoryEdit, Notifications, NotificationAdd, NotificationEdit, RestaurantRating
} from '../components';
import AuthRoute from '../hoc/authrouter'


const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 0.1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
    
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
    div.transition-group {
        //position: relative;
    }
    section.route-section {
        position: relative;
        width: 100%;
        left: 0;
    }
`;

class App extends Component{

render(){
    return (
        <div>
         <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter>



            <Route render={({location})=>(
            <div>
              <Wrapper>

                <section className="route-section">
                    <Switch location={location}>
                        <Route exact path="/" component={SignIn} />
                        <Route exact path ='/user/register' component={SignUp}/>
                        <AuthRoute path="/home">
                            <Dashboard/>
                        </AuthRoute>/>
                        <AuthRoute path="/hub/create">
                            <HubCreate/>
                        </AuthRoute>/>
                        <AuthRoute path="/menutype/create">
                            <RestType/>
                        </AuthRoute>/>

                        <AuthRoute path="/segment/create">
                            <SegmentType/>
                        </AuthRoute>/>

                        <AuthRoute path="/costtype/create">
                            <CostType/>
                        </AuthRoute>/>
                        <AuthRoute path="/brand/create">
                            <Brand/>
                        </AuthRoute>/>
                        <AuthRoute path="/category/create">
                            <OtherCategory/>
                        </AuthRoute>/>
                        <AuthRoute path="/hubs">
                            <HubTable/>
                        </AuthRoute>/>
                        <AuthRoute path="/cuisines">
                            <MenuTypeTable/>
                        </AuthRoute>/>
                        <AuthRoute path="/segments">
                            <SegmentTable/>
                        </AuthRoute>/>
                        <AuthRoute path="/categories">
                            <OtherCategoryTable/>
                        </AuthRoute>/>
                        <AuthRoute path="/brands">
                            <BrandTable/>
                        </AuthRoute>/>
                        <AuthRoute path="/prices">
                            <CostTypeTable/>
                        </AuthRoute>/>

                        <AuthRoute path="/restaurant/create">
                            <RestaurantCreate/>
                        </AuthRoute>/>
                        <AuthRoute path="/restaurants/">
                            <RestaurantTable/>
                        </AuthRoute>/>


                        <AuthRoute path="/notifications/create">
                            <NotificationAdd/>
                        </AuthRoute>/>

                        <AuthRoute path="/notifications">
                            <Notifications/>
                        </AuthRoute>/>

                        <AuthRoute path="/restaurantedit/:id" render={(props)=> <RestaurantEdit {...props}/>}/>
                        <AuthRoute path="/restauranterating/:id" render={(props)=> <RestaurantRating {...props}/>}/>
                        <AuthRoute path="/notificationedit/:id" render={(props)=> <NotificationEdit {...props}/>}/>
                        <AuthRoute path="/hubedit/:id" render={(props)=> <HubEdit {...props}/>}/>
                        <AuthRoute path="/menutypeedit/:id" render={(props)=> <MenuTypeEdit {...props}/>}/>
                        <AuthRoute path="/costtypeedit/:id" render={(props)=> <CostTypeEdit {...props}/>}/>
                        <AuthRoute path="/segmenttypeedit/:id" render={(props)=> <SegmentEdit {...props}/>}/>
                        <AuthRoute path="/brandedit/:id" render={(props)=> <BrandEdit {...props}/>}/>
                        <AuthRoute path="/categoryedit/:id" render={(props)=> <OtherCategoryEdit {...props}/>}/>
                    </Switch>
                </section>


                </Wrapper>

            </div>
            )}/>




        </BrowserRouter>
        </PersistGate>
        </Provider>
        </div>




    )
}

}

export default App;
