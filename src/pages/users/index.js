import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Breadcrumb from 'components/layout/Breadcrumb';
import ScrollToTop from 'components/layout/ScrollToTop';
import Users from "modules/users";

const breadcrumbItems = [
    {
        title: 'Users',
        path: '/users',
        active: true,
        // disabled: true,
    },
]

const LayoutPage = () => {
    return (
        <React.Fragment>
            <Helmet title="Users" />
            <Container fluid className="p-0">
                <ScrollToTop />
                <Breadcrumb breadcrumbItems={breadcrumbItems} showBackPage={false} />
                <Users />
            </Container>
        </React.Fragment>
    );
};

export default LayoutPage;
