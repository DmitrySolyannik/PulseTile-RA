import React, { Component } from "react";
import { connect } from 'react-redux';
import { TextField, DateField, ShowButton } from "react-admin";

import ListTemplate from "../../common/ResourseTemplates/ListTemplate";
import CustomShowButton from "../../common/Buttons/CustomShowButton";
import PatientCreate from "./PatientCreate";
import PatientEdit from "./PatientEdit";
import PatientShow from "./PatientShow";

/**
 * This component returns block with Patients list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
class PatientsList extends Component {

    /**
     * This function redirects to Patient Summary page
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     * @param {number} userId
     */
    redirectToSummary = userId => {
        localStorage.setItem('userId', userId);
        this.props.history.push('/summary');
    };

    render() {
        return (
            <ListTemplate
                basePath="/patients"
                create={PatientCreate}
                edit={PatientEdit}
                show={PatientShow}
                resourceUrl="patients"
                title="Patients List"
                rowClickAction={userId => this.redirectToSummary(userId)}
                {...this.props}
            >
                <TextField source="name" label="Name" />
                <TextField source="address" label="Address" />
                <DateField source="dateOfBirth" label="Born (age)" />
                <TextField source="nhsNumber" label="CHI No." />
                <CustomShowButton {...this.props} />
            </ListTemplate>
        )
    }
}

export default PatientsList;
