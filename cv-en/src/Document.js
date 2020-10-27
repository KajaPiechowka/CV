import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import FaceImg from "./assets/img/FaceImg.jpeg";

Font.register({
  family: "Karla",
  src: `./assets/fonts/Karla-Regular.ttf`,
  fontStyle: "normal",
  fontWeight: "normal",
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 3,
  },
  aside: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: "#ecebe9",
    display: "flex",
    flexDidection: "column",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: "auto",
    transform: "rotate(90deg)",
  },
  imageHolder: {
    backgroundColor: "#AEAFAC",
    width: "100%",
    height: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Karla",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.aside}>
        <View style={styles.imageHolder}>
          <Image src={FaceImg} alt="ProfileFoto" style={styles.image} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
