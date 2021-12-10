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
    paddingTop: 60,
  },

  title: {
    fontFamily: "Lato",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#077DCA",
    fontSize: 15,
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
    fontSize: 14,
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
    fontSize: 11,
    color: "#484849",
  },
  date: {
    fontFamily: "Karla",
    fontSize: 11,
    color: "#484849",
    marginBottom: 5,
  },
  textSmall: {
    fontFamily: "Karla",
    fontSize: 10,
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
        <Text style={{ ...styles.textLeft, marginBottom: 20 }}>
          kaja.piechowka@gmail.com
        </Text>
        <Text style={styles.titleLeft}>Technologies</Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          JavaScript, React.js, Gatsby.js,
        </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          Figma.com, GIT, Scrum,
        </Text>
        <Text style={{ ...styles.textLeft, fontWeight: "bold" }}>
          Word, Excel, SQL
        </Text>
        <Text
          style={{ ...styles.textLeft, fontWeight: "bold", marginBottom: 20 }}
        >
          Trello, Headless CMS
        </Text>

        <Text style={styles.titleLeft}>Courses</Text>

        <Text style={styles.headerLeft}>JavaScript Developer: React</Text>
        <Text style={styles.textLeft}> March 2020 - October 2020</Text>

        <Text style={styles.headerLeft}>Scrum Lab </Text>
        <Text style={styles.textLeft}>July 2020</Text>

        <Text style={styles.headerLeft}>Piercing Cource</Text>
        <Text style={styles.textLeft}>January 2020</Text>

        <Text style={styles.headerLeft}>Computer Graphics Course</Text>
        <Text style={styles.textLeft}>October 2017 - January 2018</Text>

        <Text style={styles.headerLeft}>Classic massage course</Text>
        <Text style={{ ...styles.textLeft, marginBottom: 20 }}>
          October 2015 - March 2016
        </Text>

        <Text style={styles.titleLeft}>Hobby</Text>
        <Text style={styles.textLeft}>Acro Yoga, Tabletop Games,</Text>
        <Text style={styles.textLeft}>Rollerblades, Slackline,</Text>
        <Text style={styles.textLeft}>Rock Music, Painting</Text>
        <Text style={styles.textLeft}>Climbing, Drums</Text>
      </View>
      <View style={styles.section}>
        <Text
          style={{
            ...styles.title,
            marginBottom: 50,
            fontSize: 20,
            marginTop: 10,
            color: "black",
          }}
        >
          Kaja Piechówka
        </Text>

        <Text style={styles.title}>EXPERIENCE</Text>
        <Text style={styles.header}>
          Apriside - Internship Front-End Web Developer
        </Text>
        <Text style={styles.date}>July 2021 – August 2021</Text>
        <Text style={styles.text}>
          programming widgets for application in React and Typescript, working
        </Text>
        <Text style={styles.text}>
          in the team, participating in weekly meetings, finding new solutions
        </Text>
        <Text style={styles.text}>for the project</Text>
        <Text style={styles.header}>Alpakara - Junior Front-End Developer</Text>
        <Text style={styles.date}>March 2021 – May 2021</Text>
        <Text style={styles.text}>
          project "Self Authoring" made in React - helping with UX/UI design for
        </Text>
        <Text style={styles.text}>
          the project, translations, programming layout and advanced forms for
          web app
        </Text>
        <Text style={styles.header}>DC Site Service - festival staff</Text>
        <Text style={styles.date}>June 2020 – September 2020</Text>
        <Text style={styles.text}>
          team leading, logistic, traffic managing, cleaning service
        </Text>
        <Text style={styles.text}>information assistant, manual worker</Text>
        <Text style={styles.header}>F.H. KAJA-BIS, Cracow – Sales Manager</Text>
        <Text style={styles.date}>December 2015 – June 2020</Text>
        <Text style={styles.text}>
          Managing small team, setting the workflow,
        </Text>
        <Text style={styles.text}>
          delivering and ordering of goods, hiring new employees
        </Text>
        <Text style={styles.text}>
          customer service, cash register service.
        </Text>

        <Text style={styles.title}>Education</Text>
        <Text style={styles.header}>Gloker Shool for Adults, Cracow</Text>
        <Text style={styles.text}>September 2015 – April 2016</Text>
        <Text style={styles.text}>Gastronomy</Text>

        <Text style={styles.header}>Socrates High School, Cracow</Text>
        <Text style={styles.text}>September 2012 – April 2014</Text>
        <Text style={styles.text}>Mathematical and geographical profile</Text>

        <Text style={styles.title}>Languages</Text>
        <Text style={styles.text}>Polish (native)</Text>
        <Text style={styles.text}>English (advanced)</Text>
        <Text style={styles.text}>Spanish (communicative)</Text>

        <Text
          style={{
            ...styles.text,
            fontSize: 9,
            positon: "absolute",
            left: "-170px",
            bottom: "-60px",
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
