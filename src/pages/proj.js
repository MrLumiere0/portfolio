import styles from "../styles/projects.module.css";
import react from "react";
import Link from "next/link";
import { handleDownload } from "@/pages/api/logic";

import { BsDownload } from "react-icons/bs";

export default function Projects() {
  return (
    <div className={styles.Projects}>
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
          <div className={styles.apprenticship}>
            <h2> Reflection of Apprenticeship:</h2>
            <p>
              My apprenticship with Multiverse was very rewarding. I was able to
              learn industry skills and had the opportunity to translate them
              into real world setting thanks to the partnership with Fiserv. I
              was provided with a multitude of resources and went through a
              broad coursework, simulating wokring in a agile setting, GIT,
              traversing front-end and back-end, as well as, deployment.{" "}
            </p>
          </div>

          <div className={styles.proj}>
            <div className={styles.projImages}>
              <div className={styles.projMainImgLN}></div>
              <div className={styles.projSupportImages}>
                <div className={styles.MainSupportImageLN}></div>
                <div className={styles.supportImagesContainer}>
                  <div className={styles.secondarySupportImg1LN}></div>
                  <div className={styles.secondarySupportImg2LN}></div>
                </div>
              </div>
            </div>
            <div className={styles.projDescription}>
              <Link
                className={styles.descriptionTitle}
                href="https://github.com/MrLumiere0/group-full-stack-inventory-project-chjn"
              >
                <h2>Lumiere News</h2>
              </Link>
              <div id={styles.projReview}>
                <p>This project is a fulstack trading journal application.</p>
                <p>
                  The basis of this project was to build anpther fullstack app,
                  this time after having learned foundatinal frontend and
                  backend concepts like UI design principles and Frontend
                  testing, as well as, Authenticationa nd Authorization
                  respectively.
                </p>
                <p>
                  I enjoyed this project because I was bale to apply some
                  concepts which I had initally struggles with on my first
                  projet using Django. It opened my eyes to the vast world of
                  backend develpoment.
                </p>
              </div>
              <div className={styles.projStack}>
                <p className={styles.projStackItem}>Javascript</p>
                <p className={styles.projStackItem}>CSS</p>
                <p className={styles.projStackItem}>Python</p>
                <p className={styles.projStackItem}>React</p>
                <p className={styles.projStackItem}>Django</p>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.projImages}>
              <div className={styles.projMainImgLT}></div>
              <div className={styles.projSupportImages}>
                <div className={styles.MainSupportImageLT}></div>
                <div className={styles.supportImagesContainer}>
                  <div className={styles.secondarySupportImg1LT}></div>
                  <div className={styles.secondarySupportImg2LT}></div>
                </div>
              </div>
            </div>
            <div className={styles.projDescription}>
              <Link
                className={styles.descriptionTitle}
                href="https://github.com/MrLumiere0/Lumiere_trades"
              >
                <h2>Lumiere Trading</h2>
              </Link>
              <div id={styles.projReview}>
                <p>This project is a fullstack news application.</p>
                <p>
                  The basis of this project was to build a fullstack app by
                  ourselves. This webapp that would return news articles
                  matching a given keyword, using an external API. If desired
                  and the user has an account, they can also save news articles
                  links and retrieve them later, as well as delete said desired
                  article.
                </p>
                <p>
                  I enjoyed this project because it was my first time creating a
                  fullstack applicatoin on my own. I did stumble upon alot of
                  roadblock at first when starting out working with Django but
                  it was a good epxerience.
                </p>
              </div>
              <div className={styles.projStack}>
                <p className={styles.projStackItem}>Javascript</p>
                <p className={styles.projStackItem}>CSS</p>
                <p className={styles.projStackItem}>Python</p>
                <p className={styles.projStackItem}>React</p>
                <p className={styles.projStackItem}>Django</p>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.projImages}>
              <div className={styles.projMainImgInventory}></div>
              <div className={styles.projSupportImages}>
                <div className={styles.MainSupportImageInventory}></div>
                <div className={styles.supportImagesContainer}>
                  <div className={styles.secondarySupportImgInventory1}></div>
                  <div className={styles.secondarySupportImgInventory2}></div>
                </div>
              </div>
            </div>
            <div className={styles.projDescription}>
              <Link
                className={styles.descriptionTitle}
                href="https://github.com/MV-SWE-Fiserv-US/group-full-stack-inventory-project-chjn"
              >
                <h2>Inventory Application</h2>
              </Link>
              <div id={styles.projReview}>
                <p>This project is an inventory tracking application.</p>
                <p>
                  The basis of this project was to build an inventory tracking
                  app from the ground up. My team had been tasked with creating
                  a Full-Sack (front and back end) RESTful CRUD application to
                  track the items.
                </p>
                <p>
                  I enjoyed this project because it was my first time creating
                  software as part of a team. Incorporating Agile development,
                  tasks and responsibilites were broken down and divied amongst
                  members, frequeently updating on another on any blocker and
                  deliverables.
                </p>
              </div>
              <div className={styles.projStack}>
                <p className={styles.projStackItem}>Javascript</p>
                <p className={styles.projStackItem}>React</p>
                <p className={styles.projStackItem}>HTML & CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
