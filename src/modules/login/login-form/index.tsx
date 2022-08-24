import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
export default function LoginForm() {
  return (<div className={styles.LoginForm}>
    <ul>
      <li style={{ "--clr": "#edb015" } as React.CSSProperties}><Link href="/login-by-account"><div className={styles.LoginForm__loginAccount} data-text="&nbsp;Login by Account&nbsp;">&nbsp;Login by Account&nbsp;</div></Link></li>
      <li style={{ "--clr": "#0554f2" } as React.CSSProperties}><div className={styles.LoginForm__loginAccount} data-text="&nbsp;Login by Facebook&nbsp;">&nbsp;Login by Facebook&nbsp;</div></li>
      <li style={{ "--clr": "#f20524" } as React.CSSProperties}><div className={styles.LoginForm__loginAccount} data-text="&nbsp;Login by Google&nbsp;">&nbsp;Login by Google&nbsp;</div></li>
    </ul>
  </div>);
}