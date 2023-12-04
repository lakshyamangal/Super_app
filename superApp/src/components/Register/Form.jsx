import React from "react";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/super_app/Super_app/superApp/src/components/Register/Form.module.css";

function Form() {
  const [values, setValues] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Mobile: 0,
  });

  function changefunc(e) {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <form className={Styles.forms}>
      <input name="Name" value={values.Name} onchange={changefunc}>
        Name
      </input>
      <input name="UserName" value={values.UserName} onchange={changefunc}>
        UserName
      </input>
      <input name="Email" value={values.Email} onchange={changefunc}>
        Email
      </input>
      <input name="Mobile" value={values.Mobile} onchange={changefunc}>
        Mobile
      </input>
      <input type="checkbox">Share my registration data with Superapp</input>
    </form>
  );
}

export default Form;
