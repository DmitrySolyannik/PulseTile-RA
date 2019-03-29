import React from "react";
import { Route } from "react-router";
import { TextField, DateField } from "react-admin";

import ListTemplate from "../../common/ResourseTemplates/ListTemplate";
import AllergiesCreate from "./AllergiesCreate";
import AllergiesEdit from "./AllergiesEdit";
import AllergiesShow from "./AllergiesShow";

/**
 * This component returns block with Allergies list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} props
 */
const AllergiesList = props => (
    <ListTemplate
      create={AllergiesCreate}
      edit={AllergiesEdit}
      show={AllergiesShow}
      resourceUrl="allergies"
      title="Allergies"
      {...props}
    >
        <TextField source="cause" label="Cause" />
        <DateField source="dateCreated" label="Date" />
        <TextField source="source" label="Source" />
    </ListTemplate>
);

export default AllergiesList;
