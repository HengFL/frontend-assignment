import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Breadcrumb from 'components/layout/Breadcrumb';
import ScrollToTop from 'components/layout/ScrollToTop';
import TodoList from "modules/todoList";

const breadcrumbItems = [
    {
        title: 'Todo List',
        path: '/todo_list',
        active: true,
        // disabled: true,
    },
]

const LayoutPage = () => {
    return (
        <React.Fragment>
            <Helmet title="Todo List" />
            <Container fluid className="p-0">
                <ScrollToTop />
                <Breadcrumb breadcrumbItems={breadcrumbItems} showBackPage={false} />
                <TodoList />
            </Container>
        </React.Fragment>
    );
};

export default LayoutPage;
