import React from "react";
import style from "./user.module.css"

const UserModal = ({formFunction, rendering, func, nameVal, emailVal}) => {
  return (
    <div >
      <button className={style.btn2}>+ Add</button>

      <form onSubmit={formFunction} id={style.form}>
        <div className={style.modalHead}>
          <h3>Add Users</h3>
          <button type="check" onClick={rendering}>
            Close
          </button>
        </div>

        <input
          type="text"
          name="name"
          value={nameVal}
          id={style.name}
          placeholder="Name"
          onChange={func}
        />

        <label htmlFor="Email">Invite By Email</label>

        <input
          type="email"
          name="email"
          value={emailVal}
          placeholder="Enter your email"
          id={style.email}
          onChange={func}
        />

        <input type="file" name="file" onChange={func} />

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default UserModal;
