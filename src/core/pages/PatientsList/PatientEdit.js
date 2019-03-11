import React from "react";
import { TextInput, DateInput, RadioButtonGroupInput } from "react-admin";

import { withStyles } from '@material-ui/core/styles';

import EditTemplate from "../../common/ResourseTemplates/EditTemplate";

const styles = {
    halfWidthBlock: {
        width: "auto !important",
    },
    halfWidth: {
        display: "inline-block",
        width: "50% !important",
    },
    labelBlock: {
        '& > div': {
            marginBottom: "0px !important",
        },
    },
};

/**
 * This component returns block with edit form for Patient
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 * @constructor
 */
const PatientEdit = ({ classes, ...rest }) => (
    <EditTemplate blockTitle="Patient"  {...rest}>
        <TextInput source="name" label="Name" fullWidth />
        <DateInput source="dateOfBirth" label="Born" fullWidth />
        <RadioButtonGroupInput source="gender" label="Gender" choices={[
            { id: 'male', name: 'Male' },
            { id: 'female', name: 'Female' },
        ]} />
        <TextInput source="address" label="Address" fullWidth />
        <div className={classes.halfWidthBlock}>
            <TextInput className={classes.halfWidth} source="city" label="City" />
            <TextInput className={classes.halfWidth} source="county" label="County" />
        </div>
        <div className={classes.halfWidthBlock}>
            <TextInput className={classes.halfWidth} source="postCode" label="Post Code" />
            <TextInput className={classes.halfWidth} source="country" label="Country" />
        </div>
        <TextInput source="nhsNumber" label="CHI Number" fullWidth />
    </EditTemplate>
);

export default withStyles(styles)(PatientEdit);