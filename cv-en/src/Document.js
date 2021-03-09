import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
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
    paddingTop: 77,
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
        <Text style={styles.textLeft}>Cracow (Remote)</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          (+48) 698 699 547
        </Text>
        <Text style={styles.textLeft}>kaja.piechowka@gmail.com</Text>
        <Text style={styles.titleLeft}>Technologies</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          JavaScript, React.js, Gatsby.js,
        </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          SASS, Figma.com, GIT, Scrum,
        </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          Redux, Graphql, Rest API, 
        </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
           Trello,  Wordpress, Headless CMS 
        </Text>


        <Text style={styles.titleLeft}>Projects</Text>

        <Text style={styles.headerLeft}>Acro Game   <Link style={styles.link} src="http://acrogame.net/">
            Link
        </Link></Text>
        <Text style={styles.textLeft}>Project made out of passion for</Text>
        <Text style={styles.textLeft}>acro yoga and programming. </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>React.js</Text>
        
        <Text style={styles.headerLeft}>Favnote   <Link
          style={styles.link}
          src="https://github.com/KajaPiechowka/favnote-app"
        >
          Github
        </Link></Text>
        <Text style={styles.textLeft}>Eduweb workshop from</Text>
        <Text style={styles.textLeft}> advanced React.js course.</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          React.js
        </Text>

        <Text style={styles.headerLeft}>My Shibari Life   <Link
          style={styles.link}
          src="https://github.com/KajaPiechowka/myShibariLife"
        >
          Github
        </Link></Text>
        <Text style={styles.textLeft}>
          Website for shibari school in 
        </Text>
        <Text style={styles.textLeft}>Cracow. Project , design and code </Text>
        <Text style={styles.textLeft}>made by myself </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          Gatsby.js
        </Text>
        

        <Text style={styles.headerLeft}>Hatta Website   <Link
          style={styles.link}
          src="https://github.com/KajaPiechowka/gatsby-hatta-website"
        >
          Github
        </Link></Text>
        <Text style={styles.textLeft}>Eduweb workshop </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          Gatsby.js
        </Text>
        

        <Text style={styles.headerLeft}>Oddam w Dobre Ręce   <Link
          style={styles.link}
          src="https://github.com/KajaPiechowka/oddam-w-dobre-rece"
        >
          Github
        </Link></Text>
        <Text style={styles.textLeft}>CodersLab workshop</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>React.js</Text>

        <Text style={styles.titleLeft}>Languages</Text>
        <Text style={styles.textLeft}>English (intermediate)</Text>
        <Text style={styles.textLeft}>Spanish (beginner)</Text>
        <Text style={styles.titleLeft}>Hobby</Text>
        <Text style={styles.textLeft}>Joga, Acro Joga, Tabletop Games,</Text>
        <Text style={styles.textLeft}>Rollerblades, Slackline,</Text>
        <Text style={styles.textLeft}>Rock Music, Painting</Text>
      </View>
      <View style={styles.section}>
        <Text
          style={{
            ...styles.title,
            marginBottom: 0,
            fontSize: 20,
            marginTop: 10,
            color: "black",
          }}
        >
          Kaja Piechówka
        </Text>
        <Text style={{...styles.text,
          textTransform: "uppercase", marginBottom: 15, color: "#077DCA"}}>Junior Front-End Software Developer</Text>

        <Text style={styles.title}>Courses</Text>

        <Text style={styles.header}>
          JavaScript Developer: React – Coders Lab
        </Text>
        <Text style={styles.text}>March 2020 - October 2020</Text>
        <Text style={styles.text}> 434h of lessons</Text>
        <Text style={styles.text}>
          Advanced HTML and CSS, JavaScript, React.js course
        </Text>

        <Text style={styles.header}>Advanced React – Eduweb</Text>
        <Text style={styles.text}>February 2021</Text>
        <Text style={styles.text}>Advanced React.js course with Rdux, Context API, </Text>
        <Text style={styles.text}>Styled Components, JEST Unit Tests</Text>

        <Text style={styles.header}>Gatsby.js – Eduweb</Text>
        <Text style={styles.text}>October 2020</Text>
        <Text style={styles.text}>Complete course of Gatsby.js</Text>
        
        <Text style={styles.header}>Scrum Lab – Coders Lab</Text>
        <Text style={styles.text}>July 2020</Text>
        <Text style={styles.text}>
          A project aimed at preparing for team work in the Scrum
        </Text>

        <Text style={styles.header}>
          Computer Graphics Course – Szkoła Grafiki Komputerowej
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
          Employee management, delivery and ordering of goods,
        </Text>
        <Text style={styles.text}>
          customer service, cash register service.
        </Text>

        <Text style={styles.title}>Education</Text>
        <Text style={styles.header}>Socrates High School, Cracow</Text>
        <Text style={styles.text}>September 2012 – April 2014</Text>
        <Text style={styles.text}>Mathematical and geographical profile</Text>

        <Text
          style={{
            ...styles.text,
            fontSize: 9,
            positon: "absolute",
            left: "-170px",
            bottom: "-70px",
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
