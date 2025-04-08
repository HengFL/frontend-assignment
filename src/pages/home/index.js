import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Breadcrumb from 'components/layout/Breadcrumb';
import ScrollToTop from 'components/layout/ScrollToTop';
import Home from "modules/home";

const breadcrumbItems = [
    {
        title: 'Home',
        path: '/home',
        active: true,
        // disabled: true,
    },
]

const LayoutPage = () => {
    return (
        <React.Fragment>
            <Helmet title="Home" />
            <Container fluid className="p-0">
                <ScrollToTop />
                <Breadcrumb breadcrumbItems={breadcrumbItems} showBackPage={false} />
                <Home />
            </Container>
        </React.Fragment>
    );
};

export default LayoutPage;
