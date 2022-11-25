import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [status, setStatus] = useState("success");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePassWordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let parsedData;
    localStorage.getItem("userKey") &&
      (parsedData = JSON.parse(localStorage.getItem("userKey")));

    for (const item of parsedData) {
      if (item.userEmail === email && item.userPassword === passWord) {
        setStatus("success");
        localStorage.setItem("statusKey", status);
        navigate("/");
      } else {
        setShow(true);
      }
    }

    setEmail("");
    setPassword("");
  };

  const btnText = "Ok!";
  const modalText = "You have submitted the wrong email and/or password";

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email adress"
          value={email}
          onChange={handleEmailInput}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={passWord}
          onChange={handlePassWordInput}
        />
        <br></br>
        <input type="submit" value="Log In" />
        {show === true && (
          <div>
            {
              <Modal
                onClose={() => setShow(false)}
                btnText={btnText}
                modalText={modalText}
              />
            }
          </div>
        )}
      </form>
    </>
  );
};

export default LoginComp;
