import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

const PaginationPage = () => {
    return (
        <MDBPagination className="mb-5 justify-content-center">
            <MDBPageItem disabled>
                <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">Previous</span>
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
                <MDBPageNav>
                    1 <span className="sr-only">(current)</span>
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>2</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>3</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">Next</span>
                </MDBPageNav>
            </MDBPageItem>
        </MDBPagination>
    )
}

export default PaginationPage;