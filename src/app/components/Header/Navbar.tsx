import Link from "next/link";
import styles from "../../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={`flex justify-between px-8 py-4 ${styles.NavWrap}`}>
      <Link target="_blank" href="https://github.com/win401">
        😻https://github.com/win401🌴
      </Link>
      <ul className={`menu flex gap-3 ${styles.menu}`}>
        <li>PROJECT</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}
