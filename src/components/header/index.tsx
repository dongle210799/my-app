import styles from "./header.module.scss"
import ListIcon from '@mui/icons-material/List';
import classNames from "classnames";
export default function Header() {
  return <div className={classNames(styles.Header, "fixed")}>
    <div className="absolute top-1/2 -translate-y-1/2">
      <ListIcon htmlColor="#ffffff" className="p-1 cursor-pointer" fontSize="large" />
    </div>
  </div>
}