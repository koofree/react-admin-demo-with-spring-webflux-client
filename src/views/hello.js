import {
	Create,
	Datagrid,
	DeleteButton,
	Edit,
	EditButton,
	List,
	required,
	Show,
	ShowButton,
	SimpleForm,
	SimpleShowLayout,
	TextField,
	TextInput
} from "react-admin";
import * as React from "react";

export const HelloList = (props) => (
	<List {...props} title="List of accounts">
		<Datagrid>
			<TextField source="id"/>
			<TextField source="message"/>
			<ShowButton/>
		</Datagrid>
	</List>
);

export const CreateHello = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="message"/>
		</SimpleForm>
	</Create>
);

export const EditHello = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput disabled label="Id" source="id"/>
			<TextInput source="message" validate={required()}/>
		</SimpleForm>
	</Edit>
);

export const ShowHello = props => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField source="id"/>
			<TextField source="message"/>
			<EditButton/>
			<DeleteButton/>
		</SimpleShowLayout>
	</Show>
);
