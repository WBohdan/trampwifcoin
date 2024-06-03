import styles from "./JustRelaxWidget.module.scss";
import "./style.css";
import { useEffect } from "react";
import { GameQuestionIcon } from "@icons";

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";

const test = [img1, img2, img3, img4, img5, img6, img7, img8];

interface IJustRelaxWidgetProps {
  setShowRocketAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const JustRelaxWidget = ({ setShowRocketAnimation }: IJustRelaxWidgetProps) => {
  const handleLaunch = () => setShowRocketAnimation(true);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>(".card");

    let matched = 0;
    let cardOne: HTMLDivElement | null = null;
    let cardTwo: HTMLDivElement | null = null;
    let disableDeck = false;

    function flipCard(clickedCard: HTMLDivElement) {
      if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
          return (cardOne = clickedCard);
        }
        cardTwo = clickedCard;
        disableDeck = true;
        const cardOneImg =
          cardOne.querySelector<HTMLImageElement>(".back-view img")?.src;
        const cardTwoImg =
          cardTwo.querySelector<HTMLImageElement>(".back-view img")?.src;
        if (cardOneImg && cardTwoImg) {
          matchCards(cardOneImg, cardTwoImg);
        }
      }
    }

    const handleCardClick = (event: Event) => {
      flipCard(event.currentTarget as HTMLDivElement);
    };

    function matchCards(img1: string, img2: string) {
      if (img1 === img2) {
        matched++;
        if (matched === 8) {
          setTimeout(() => {
            setShowRocketAnimation(true);
            return shuffleCard();
          }, 1000);
        }

        cardOne?.removeEventListener("click", handleCardClick);
        cardTwo?.removeEventListener("click", handleCardClick);

        cardOne = null;
        cardTwo = null;
        disableDeck = false;
      } else {
        setTimeout(() => {
          cardOne?.classList.add("shake");
          cardTwo?.classList.add("shake");
        }, 400);

        setTimeout(() => {
          cardOne?.classList.remove("shake", "flip");
          cardTwo?.classList.remove("shake", "flip");
          cardOne = cardTwo = null;
          disableDeck = false;
        }, 1200);
      }
    }

    function shuffleCard() {
      matched = 0;
      disableDeck = false;
      cardOne = cardTwo = null;
      const arr = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
      arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
      cards.forEach((card, i) => {
        card.classList.remove("flip");
        const imgTag = card.querySelector<HTMLImageElement>(".back-view img");
        if (imgTag) {
          imgTag.src = test[arr[i]];
        }
        card.addEventListener("click", handleCardClick);
      });
    }

    shuffleCard();

    cards.forEach((card) => {
      card.addEventListener("click", handleCardClick);
    });

    // При відключенні компонента відміняємо всі слухачі подій
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", handleCardClick);
      });
    };
  }, []);

  return (
    <>
      <div className={styles["justRelaxWidget__whiteWidget"]} />
      <div className={styles["justRelaxWidget"]}>
        <p className={styles["justRelaxWidget__title"]}>
          Let's jump on the <span>tramp</span>oline to space!
        </p>
        <p className={styles["justRelaxWidget__description"]}>
          You have to find all the same stickers. Good luck:)
        </p>

        <button onClick={handleLaunch} />

        <ul className="cards">
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#FF482B" />
            </div>
            <div className="view back-view">
              <img src={img1} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#181538" />
            </div>
            <div className="view back-view">
              <img src={img2} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#FF482B" />
            </div>
            <div className="view back-view">
              <img src={img8} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#181538" />
            </div>
            <div className="view back-view">
              <img src={img7} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#FF482B" />
            </div>
            <div className="view back-view">
              <img src={img8} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#181538" />
            </div>
            <div className="view back-view">
              <img src={img1} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#FF482B" />
            </div>
            <div className="view back-view">
              <img src={img6} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#181538" />
            </div>
            <div className="view back-view">
              <img src={img6} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#FF482B" />
            </div>
            <div className="view back-view">
              <img src={img7} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#181538" />
            </div>
            <div className="view back-view">
              <img src={img3} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#FF482B" />
            </div>
            <div className="view back-view">
              <img src={img4} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#181538" />
            </div>
            <div className="view back-view">
              <img src={img5} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#FF482B" />
            </div>
            <div className="view back-view">
              <img src={img4} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#181538" />
            </div>
            <div className="view back-view">
              <img src={img3} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#FF482B" />
            </div>
            <div className="view back-view">
              <img src={img5} alt="card-img" />
            </div>
          </li>
          <li className="card">
            <div className="view front-view">
              <GameQuestionIcon color="#181538" />
            </div>
            <div className="view back-view">
              <img src={img2} alt="card-img" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default JustRelaxWidget;
