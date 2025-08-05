import react from "react";
import styles from "../styles/home.module.css";
import Image from "next/image";
import { useContext, useRef } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { VscGithubInverted } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { BsDownload } from "react-icons/bs";
import { handleDownload } from "@/pages/api/logic";
export default function HomePage() {
  return (
    <div className={styles.Home}>
      <div className={styles.view}>
        <nav className={styles.nav}>
          <div className={styles.styledNav}>
            <Link className={styles.navLink} href="/">
              Home
            </Link>

            <Link className={styles.navLink} href="/proj">
              Projects
            </Link>
          </div>

          <div id={styles.Resume}>
            <button className={styles.Resume} onClick={handleDownload}>
              Download CV <BsDownload />
            </button>
          </div>
        </nav>

        <div className={styles.Banner}>
          <div className={styles.bannerIntro}>
            <div className={styles.typewriter}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi")
                    .pauseFor(500)
                    .typeString(" I'm Hashid")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(" a Software {engineer}")
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </div>
          </div>
          <div className={styles.bannerPic}>
            <div className={styles.socials}>
              <div className={styles.icons}>
                <Link
                  className={styles.iconLinkGit}
                  href="https://github.com/MrLumiere0"
                >
                  <VscGithubInverted />
                </Link>

                <Link
                  className={styles.iconLinkLinkedIn}
                  href="https://www.linkedin.com/in/hashid-louis-53840316b/"
                >
                  <CiLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
