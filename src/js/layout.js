import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/ContactListView";
import ContactCard, { Single } from "./component/ContactCard";
import injectContext from "./store/appContext";


import { Footer } from "./component/footer";
import ContactListView from './views/ContactListView';
import AddContactView from "./views/AddContactView";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				
					<Routes>
						<Route path="/" element={<ContactListView />} />
						<Route path="/agregar" element={<AddContactView/>} />
						<Route path="*" element={<AddContactView/>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
