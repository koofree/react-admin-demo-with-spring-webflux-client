import React from 'react';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import {Admin, Resource, fetchUtils} from 'react-admin';
import {CreateHello, EditHello, HelloList, ShowHello} from './views/hello';

const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	// add your own headers here
	options.headers.set('X-Custom-Header', 'foobar');
	return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider("http://localhost:8080", httpClient);

const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource name="hello" list={HelloList} create={CreateHello} edit={EditHello} show={ShowHello}/>
	</Admin>
);

export default App;
