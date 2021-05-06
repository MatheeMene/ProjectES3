import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { isAuthenticated }from '../services/Authentic';
//Components
// import ChooseService from './ChooseService/ChooseService';

// PRIVATE ROUTES -> PRECISA IMPLEMENTAR
// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={props =>
// 			isAuthenticated() ? (
// 				<Component {...props} />
// 			) : (
// 				<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
// 			)
// 		}
// 	/>
// );

const Routes = () => (
	<Switch>
		{/* <Route exact path="/"                component={ Home }          />
		<Route exact path="/signup"          component={ SignUp }        />
		<Route exact path="/weekoffer"       component={ WeekOffers }    />
		<Route exact path="/allproducts"     component={ AllProducts }   />
		<Route exact path="/productpage/:id" component={ ProductPage }   />
		<Route exact path="/login"           component={ Login }         />
		
		<PrivateRoute exact path="/profile"    component={ Profile }       />
		<PrivateRoute exact path="/services"   component={ ChooseService } />
		<PrivateRoute exact path="/addproduct" component={ CreateProduct } />
		<PrivateRoute exact path="/cart"       component={ Cart }          />
		<Route component={ NotFound }                                      /> */}
	</Switch>
);

export default Routes;
