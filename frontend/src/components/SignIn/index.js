import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/signin", {
      method: "POST",

      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setUser({
      email: "",
      password: "",
    });
  };
  const handleInput = (e) => {
    const userData = { ...user };
    userData[e.target.id] = e.target.value;
    setUser(userData);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign In
                </p>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    onChange={(e) => handleInput(e)}
                    value={user.email}
                    label="Your Email"
                    id="email"
                    type="email"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    onChange={(e) => handleInput(e)}
                    value={user.password}
                    label="Password"
                    id="password"
                    type="password"
                  />
                </div>

                <MDBBtn className="mb-4" size="lg" type="submit">
                  Sign In
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
};
export default SignIn;
