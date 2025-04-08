import React from "react";
/* bootstrap */
import { Nav, Tab, Card } from "react-bootstrap";
/* components */
import TodoList from "./../todoList";
import Users from "./../users";

function Navtab(props) {

    /* state */
    const [navTabActive, setNavTabActive] = React.useState("1");

    /* function */
    const handleSelectNavTab = (key) => {
        setNavTabActive(key);
    };

    return (
        <Card className="p-0 w-100 bg-transparent shadow-none">
            <Tab.Container defaultActiveKey={navTabActive}>
                <div className="row justify-content-center">
                    <div className="col-6 mb-2">
                        <Nav fill onSelect={(key) => handleSelectNavTab(key)} className="nav w-100 gap-2">
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="1"
                                    className={`rounded-3 text-white text-center min-w-250px ${navTabActive === "1" ? `bg-dark` : `bg-gray`}`}
                                >
                                    <span className="text-white">1. Auto Delete Todo List</span>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    eventKey="2"
                                    className={`rounded-3 text-white text-center min-w-250px ${navTabActive === "2" ? `bg-dark` : `bg-gray`}`}
                                >
                                    <span className="text-white">2. Create data from API (OPTIONAL)</span>
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                </div>

                <div className="col-12">
                    <Tab.Content>
                        <Tab.Pane eventKey="1">
                            <TodoList eventKey="1" />
                        </Tab.Pane>

                        <Tab.Pane eventKey="2">
                            <Users eventKey="2" />
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>

        </Card>
    );
}

export default Navtab;
