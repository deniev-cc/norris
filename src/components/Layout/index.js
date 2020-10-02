import React from "react";

const Layout = ({ menu: Menu, content: Content }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <Menu />
                </div>
                <div className="col-12">
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default Layout;