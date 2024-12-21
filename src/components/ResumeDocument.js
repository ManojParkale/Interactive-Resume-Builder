import React from 'react';
import { Page, Text, Document, StyleSheet, View } from '@react-pdf/renderer';

// Styles for the resume
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#f4f7fc',
  },
  section: {
    marginBottom: 15,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366',  // Dark blue color for header
    marginBottom: 5,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',  // Dark blue color for subheadings
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    color: '#333', // Dark gray for text content
    lineHeight: 1.6,
  },
  contactInfo: {
    fontSize: 12,
    color: '#555', // Slightly lighter gray for contact info
    textAlign: 'center',
    marginBottom: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  lineBreak: {
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 12,
    color: '#333',
    marginBottom: 8,
  },
});

export const ResumeDocument = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      {/* Header Section */}
      <View style={styles.section}>
        <Text style={styles.header}>{data.name}</Text>
        <Text style={styles.content}>{data.position}</Text>
        <Text style={styles.contactInfo}>
          {data.phone} | {data.email} | {data.linkedin} | {data.github}
        </Text>
      </View>

      {/* Summary Section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Summary</Text>
        <Text style={styles.content}>{data.summary}</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Experience</Text>
        <Text style={[styles.content, styles.boldText]}>
          {data.experience.title} at {data.experience.company}
        </Text>
        <Text style={styles.content}>{data.experience.description}</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Skills</Text>
        <Text style={styles.content}>{data.skills}</Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Education</Text>
        <Text style={styles.content}>
          {data.education.university} - {data.education.degree}
        </Text>
      </View>
    </Page>
  </Document>
);