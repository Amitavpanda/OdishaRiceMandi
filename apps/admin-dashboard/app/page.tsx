import Image from "next/image";

import styles from "./page.module.css";

import {Button} from "@repo/ui/button";


export default function Page(): JSX.Element {
  return (
    <>
    <Button className="text-white bg-black-100">Admin</Button>
    </>
  );
}
