import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Link,
} from "@react-pdf/renderer";

import karla from "./assets/fonts/Karla-Regular.ttf";
import karlaBold from "./assets/fonts/Karla-Bold.ttf";
import lato from "./assets/fonts/Lato-Regular.ttf";
import latoBold from "./assets/fonts/Lato-Bold.ttf";

Font.register({
  family: "Karla",
  fonts: [
    {
      src: karla,
    },
    {
      src: karlaBold,
      fontWeight: "bold",
    },
  ],
});

Font.register({
  family: "Lato",
  fonts: [
    {
      src: lato,
    },
    {
      src: latoBold,
      fontWeight: "bold",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    boxSizing: "borderBox",
    flexDirection: "row",
  },
  section: {
    boxSizing: "borderBox",
    margin: 10,
    padding: 0,
    position: "relative",
    height: "90%",
  },
  aside: {
    boxSizing: "borderBox",
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#ecebe9",
    display: "flex",
    flexDidection: "column",
    height: 740,
    paddingTop: 10,
  },

  title: {
    fontFamily: "Lato",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#077DCA",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 8,
    borderBottom: 1,
    borderBottomColor: "#AEAFAC",
  },
  titleLeft: {
    fontFamily: "Lato",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#077DCA",
    fontSize: 14,
    margin: "10 6 6 6",
  },
  header: {
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 6,
    marginTop: 10,
  },
  headerLeft: {
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 10,
    margin: 6,
  },
  text: {
    fontFamily: "Karla",
    fontSize: 12,
    color: "#484849",
  },
  textLeft: {
    boxSizing: "borderBox",
    fontFamily: "Karla",
    color: "#484849",
    fontSize: 10,
    marginLeft: 6,
    marginRight: 6,
  },

  link: {
    fontSize: 11,
    margin: 6,

    textDecoration: "none",
    color: "#077DCA",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.aside}>
        <Text style={styles.titleLeft}>Personal Data</Text>
        <Text style={styles.textLeft}>Cracow (mobile location)</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          (+48) 698 699 547
        </Text>
        <Text style={styles.textLeft}>kaja.piechowka@gmail.com</Text>
        <Text style={styles.titleLeft}>Technologies</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          JavaScript, React.js, Wordpress
        </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          Gatsby.js, HTML, CSS, Figma.com
        </Text>

        <Text style={styles.titleLeft}>Projects</Text>

        <Text style={styles.headerLeft}>Acro Game</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>React.js</Text>
        <Text style={styles.textLeft}>project made with passion for</Text>
        <Text style={styles.textLeft}>acro yoga and programming </Text>
        <Link style={styles.link} src="http://acrogame.net/">
          Website
        </Link>

        <Text style={styles.headerLeft}>My Shibari Life</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          Gatsby.js
        </Text>
        <Text style={styles.textLeft}>
          website for shibari school in Cracow
        </Text>
        <Text style={styles.textLeft}>project , design , code </Text>
        <Link
          style={styles.link}
          src="https://github.com/KajaPiechowka/myShibariLife"
        >
          Github
        </Link>

        <Text style={styles.headerLeft}>Hatta Website</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          Gatsby.js
        </Text>
        <Text style={styles.textLeft}>Eduweb workshop</Text>
        <Link
          style={styles.link}
          src="https://github.com/KajaPiechowka/gatsby-hatta-website"
        >
          Github
        </Link>

        <Text style={styles.headerLeft}>Oddam w Dobre Ręce</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>React.js</Text>
        <Text style={styles.textLeft}>CodersLab workshop</Text>
        <Link
          style={styles.link}
          src="https://github.com/KajaPiechowka/oddam-w-dobre-rece"
        >
          Github
        </Link>

        <Text style={styles.titleLeft}>Languages</Text>
        <Text style={styles.textLeft}>English (intermediate)</Text>
        <Text style={styles.textLeft}>Spanish (beginner)</Text>
        <Text style={styles.titleLeft}>Hobby</Text>
        <Text style={styles.textLeft}>Joga/Acrojoga, RPG games,</Text>
        <Text style={styles.textLeft}>Rollerblades, Slackline,</Text>
        <Text style={styles.textLeft}>Rock Music, Painting</Text>
      </View>
      <View style={styles.section}>
        <Text
          style={{
            ...styles.title,
            marginBottom: 30,
            fontSize: 20,
            marginTop: 0,
            color: "black",
          }}
        >
          Kaja Piechówka
        </Text>
        <Text
          style={{
            ...styles.text,

            fontSize: 10,
          }}
        >
          My last mentor used to say:
        </Text>
        <Text
          style={{
            ...styles.text,
            fontWeight: "bold",
            fontSize: 10,
          }}
        >
          The best code is one that hasn't been written yet. No need to review
        </Text>
        <Text
          style={{
            ...styles.text,
            marginBottom: 10,
            fontWeight: "bold",
            fontSize: 10,
          }}
        >
          or debug. That's why a good plan and design are paramount!
        </Text>

        <Text style={styles.title}>Courses</Text>
        <Text style={styles.header}>Wordpress – Eduweb</Text>
        <Text style={styles.text}>January 2021</Text>
        <Text style={styles.text}>course of Wordpress from start</Text>
        <Text style={styles.header}>Gatsby.js – Eduweb</Text>
        <Text style={styles.text}>October 2020</Text>
        <Text style={styles.text}>complete course of Gatsby</Text>
        <Text style={styles.header}>
          JavaScript Developer: React – Coders Lab
        </Text>
        <Text style={styles.text}>March 2020 October 2020</Text>
        <Text style={styles.text}> 434h lessons</Text>
        <Text style={styles.text}>
          Advanced HTML and CSS, javaScript, React course
        </Text>
        <Text style={styles.header}>Scrum Lab – Coders Lab</Text>
        <Text style={styles.text}>July 2020</Text>
        <Text style={styles.text}>
          a project aimed at preparing for team work in the Scrum
        </Text>

        <Text style={styles.header}>
          Computer Graphic Course – Szkoła Grafiki Komputerowej
        </Text>
        <Text style={styles.text}>October 2017 - January 2018</Text>
        <Text style={styles.text}>
          Adobe Illustrator, Adobe Photoshop, Adobe Flash,
        </Text>
        <Text style={styles.text}>
          basics of marketing and advertising on the Internet
        </Text>
        <Text style={styles.title}>EXPERIENCE</Text>
        <Text style={styles.header}>F.H. KAJA-BIS, Cracow – Sales Manager</Text>
        <Text style={styles.text}>December 2015 – Current</Text>
        <Text style={styles.text}>
          employee management, delivery and ordering of goods,
        </Text>
        <Text style={styles.text}>
          customer service, cash register service, goods delivery
        </Text>

        <Text style={styles.title}>Education</Text>
        <Text style={styles.header}>Socrates High School, Cracow</Text>
        <Text style={styles.text}>September 2012 – April 2014</Text>
        <Text style={styles.text}>mathematical and geographical profile</Text>

        <Text
          style={{
            ...styles.text,
            fontSize: 9,
            positon: "absolute",
            left: "-180px",
            bottom: "-40px",
            width: 550,
            textAlign: "center",
          }}
        >
          I agree to the processing of personal data provided in this document
          for realising the recruitment process pursuant to the Personal Data
          Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in
          agreement with Regulation (EU) 2016/679 of the European Parliament and
          of the Council of 27 April 2016 on the protection of natural persons
          with regard to the processing of personal data and on the free
          movement of such data, and repealing Directive 95/46/EC (General Data
          Protection Regulation).
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
