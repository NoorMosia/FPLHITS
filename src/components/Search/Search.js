import React from "react";
import { MDBInput } from "mdbreact";

const SearchPage = props => {
    return (
        <MDBInput
            hint="Search"
            type="text"
            containerClass="active-pink active-pink-2 mt-0 mb-3"
            {...props}
        />
    );
}

export default SearchPage;