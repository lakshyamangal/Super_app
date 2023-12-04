import React from "react";
import Form from "/Users/lakshya_mangal/Desktop/cuvette/super_app/Super_app/superApp/src/components/Register/Form.jsx";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/super_app/Super_app/superApp/src/components/Register/Register.module.css";

function RegisterPage() {
  return (
    <div className={Styles.container}>
      <div className={Styles.item1}>
        <p className={Styles.para}>Discover new things on Superapp</p>
      </div>
      <div className={Styles.item2}>
        <div className={Styles.head}>
          <h2>Super app</h2>
          <br></br>
          <p>Create your new account</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
