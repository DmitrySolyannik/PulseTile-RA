import React from "react";
import {
    Edit,
    SimpleForm,
    SelectInput,
    TextInput,
    DateInput,
    LongTextInput,
    DisabledInput
} from "react-admin";

import  { routesArray } from "./selects";
import EditToolbarWithoutDelete from "../../common/EditToolbarWithoutDelete";

/**
 * This component returns block with edit form for Medication
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 * @constructor
 */
const MedicationsEdit = ({ classes, ...rest }) => (
    <Edit className={classes.edit} title="Edit Medication" {...rest}>
        <SimpleForm toolbar={<EditToolbarWithoutDelete />}>
            <TextInput source="name" label="Name" />
            <SelectInput source="route" label="Route" choices={routesArray} />
            <LongTextInput source="doseAmount" label="Dose Amount" />
            <LongTextInput source="doseDirections" label="Dose Description" />
            <LongTextInput source="doseTiming" label="Dose Timing" />
            <TextInput source="medicationCode" label="Medication Description" />
            <DateInput source="startDate" label="Start date" />
            <DateInput source="startTime" label="Start time" />
            <DisabledInput source="author" label="Author" />
            <DisabledInput source="source" label="Source" />
            <DisabledInput source="date" label="Date" />
        </SimpleForm>
    </Edit>
);

export default MedicationsEdit;