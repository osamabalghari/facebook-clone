import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [image, setImage] = useState({});
  const navigate = useNavigate();
  const register = async () => {
    const formData = new FormData();
    formData.append("name", userInput.name);
    formData.append("surname", userInput.surname);
    formData.append("email", userInput.email);
    formData.append("password", userInput.password);
    formData.append("avatar", image);
    const response = await fetch("http://localhost:3002/api/auth/register", {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      console.log(json.token);
      localStorage.setItem("token", json.token);
      navigate("/signin");
    }
  };
  const change = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div class="text-center my-4">
        <button
          class="btn btn-success btn-lg"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#createModal"
        >
          Create New Account
        </button>
      </div>
      <div
        class="modal fade"
        id="createModal"
        tabindex="-1"
        aria-labelledby="createModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <h2 class="modal-title" id="exampleModalLabel">
                  Sign Up
                </h2>
                <span class="text-muted fs-7">It's quick and easy.</span>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <form>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      name="name"
                      value={userInput.name}
                      onChange={change}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Surname"
                      name="surname"
                      value={userInput.surname}
                      onChange={change}
                    />
                  </div>
                </div>

                <input
                  type="email"
                  class="form-control my-3"
                  placeholder="Mobile number or email address"
                  name="email"
                  value={userInput.email}
                  onChange={change}
                />
                <input
                  type="password"
                  class="form-control my-3"
                  placeholder="New password"
                  name="password"
                  value={userInput.password}
                  onChange={change}
                />
                <form
                  action="/signup"
                  method="post"
                  enctype="multipart/form-data"
                  //className="d-none"
                >
                  <input
                    type="file"
                    name="avatar"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    label="add a profile picture"
                  />
                </form>

                <div class="row my-3">
                  <span class="text-muted fs-7">
                    Date of birth{" "}
                    <i
                      class="fas fa-question-circle"
                      data-bs-toggle="popover"
                      type="button"
                      data-bs-content="And here's some amazing content. It's very engaging. Right?"
                    ></i>
                  </span>
                  <div class="col">
                    <select class="form-select">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col">
                    <select class="form-select">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col">
                    <select class="form-select">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div class="row my-3">
                  <span class="text-muted fs-7">
                    Gender{" "}
                    <i
                      class="fas fa-question-circle"
                      data-bs-toggle="popover"
                      type="button"
                      data-bs-content="And here's some amazing content. It's very engaging. Right?"
                    ></i>
                  </span>
                  <div class="col">
                    <div class="border rounded p-2">
                      <label class="form-check-label" for="flexRadioDefault1">
                        Male{" "}
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="border rounded p-2">
                      <label class="form-check-label" for="flexRadioDefault1">
                        Female{" "}
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="border rounded p-2">
                      <label class="form-check-label" for="flexRadioDefault1">
                        Custom{" "}
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                    </div>
                  </div>
                </div>

                <div class="d-none" id="genderSelect">
                  <select class="form-select">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="my-3">
                    <span class="text-muted fs-7">
                      Your pronoun is visible to everyone.
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Gender (optional)"
                    />
                  </div>
                </div>

                <div>
                  <span class="text-muted fs-7">
                    By clicking Sign Up, you agree to our Terms, Data Policy....
                  </span>
                </div>

                <div class="text-center mt-3">
                  <button
                    type="button"
                    class="btn btn-success btn-lg"
                    data-bs-dismiss="modal"
                    onClick={register}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
