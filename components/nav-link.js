"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${styles.link} ${
        pathName.startsWith(href) ? styles.active : styles.link
      }`}
    >
      {children}
    </Link>
  );
}
