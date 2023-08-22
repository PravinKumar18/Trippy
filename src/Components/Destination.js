import React from "react";
import "./Css/Destination.css";
import mumbai from "./Images/mumbai.jpg";
import redfort from "./Images/redfort.jpg";
import jaipur from "./Images/jaipur.jpg";
import manali from "./Images/manali.jpg";

function Destination() {
  return (
    <div>
      <div className="destiny-top">
        <h1>Popular Destination</h1>
        <p className="pppp">
          Tours give you the opportunity to see a lot,within a time frame
        </p>
      </div>

      <div className="img-div">
        <img className="mumbai" src={mumbai} />

        <p>
          <span style={{fontWeight: "bolder", fontSize : "large"}}>Mumbai</span>, also known as Bombay, is a vibrant and bustling city located
          on the west <br /> coast of India. It is a melting pot of diverse
          cultures, and offers visitors a <br />
          unique blend of ancient history, colonial heritage, and modern-day
          glamour. <br />
          The city is renowned for its iconic landmarks such as the Gateway of
          India and <br />
          the Taj Mahal Palace Hotel, as well as its bustling bazaars and street
          food <br />
          scene. Mumbai is also home to some of India's best museums, galleries,
          and <br />
          theaters, making it a hub for art, culture, and entertainment. The
          city's energy <br />
          and spirit are infectious, and it is sure to leave a lasting
          impression on any <br />
          traveler who visits.
        </p>
      </div>

      <div className="img-div">
        <p>
        <span style={{fontWeight: "bolder", fontSize : "large"}}>Delhi</span>, the capital city of India, is a fascinating destination for
          travelers looking to <br />
          explore the rich history and culture of the country. The city has been
          inhabited <br />
          for over 2,500 years, and has been the center of several powerful
          empires <br />
          throughout history. As a result, Delhi boasts a wealth of iconic
          landmarks and <br />
          historical monuments, including the majestic Red Fort, the towering
          Qutub <br />
          Minar, and the Humayun's Tomb. The city is also famous for its vibrant
          street <br />
          food scene, where visitors can savor a range of delicious and spicy
          delicacies. <br />
          Additionally, Delhi is a shopper's paradise, with bustling markets and
          bazaars <br />
          offering everything from handicrafts to designer clothes. Whether you
          are <br />
          interested in history, culture, food, or shopping, Delhi has something
          for <br />
          everyone, making it a must-visit destination for travelers to India.
        </p>
        <img className="mumbai" src={redfort} />
      </div>

      <div className="img-div">
        <img className="mumbai" src={jaipur} />

        <p>
        <span style={{fontWeight: "bolder", fontSize : "large"}}> Jaipur</span>, also known as the Pink City, is a vibrant and colorful
          destination located in the <br />
          state of Rajasthan, India. The city is renowned for its stunning
          architecture, <br />
          including the iconic Hawa Mahal and the majestic Amber Fort. Visitors
          can also <br />
          explore the bustling bazaars of Jaipur, where they can shop for
          colorful textiles, <br />
          jewelry, and handicrafts. Jaipur is also famous for its mouth-watering
          cuisine, <br />
          which features a range of delectable vegetarian and non-vegetarian
          dishes. In <br />
          addition to its rich history and culture, Jaipur is also home to
          several luxurious <br />
          hotels and resorts, making it an ideal destination for travelers
          looking to <br />
          indulge in a bit of pampering. Whether you are interested in history,
          culture, <br />
          food, or relaxation, Jaipur is a must-visit destination for travelers
          to India.
        </p>
      </div>

      <div className="img-div">
        <p>
        <span style={{fontWeight: "bolder", fontSize : "large"}}> Manali</span>, located in the northern Indian state of Himachal Pradesh, is a
          popular hill <br />
          station and a paradise for nature lovers. Surrounded by snow-capped{" "}
          <br />
          mountains, lush green forests, and glistening streams, Manali offers
          visitors a <br /> range of outdoor activities, including trekking,
          hiking, and skiing. The town is <br />
          also home to several beautiful temples and monasteries, such as the
          Hadimba <br />
          Devi Temple and the Tibetan Monastery. Visitors can also explore the
          bustling <br />
          markets of Manali, where they can purchase a variety of local
          handicrafts, <br />
          woolen clothing, and other souvenirs. In addition, the town is famous
          for its <br />
          delicious food, which features a mix of traditional Himachali cuisine
          and <br />
          popular international dishes. Whether you are looking for adventure,{" "}
          <br />
          relaxation, or cultural experiences, Manali is an ideal destination
          for anyone <br />
          seeking a refreshing break from the hustle and bustle of city life.
        </p>
        <img className="mumbai" src={manali} />
      </div>
    </div>
  );
}

export default Destination;
