import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { personalInfo, experience, education, projects, skills } from "@/lib/data";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottom: "2px solid #335c67",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#335c67",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 15,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 10,
    color: "#333333",
  },
  contactItem: {
    marginRight: 15,
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#335c67",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#333333",
    textAlign: "justify",
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  experienceTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#335c67",
  },
  experiencePeriod: {
    fontSize: 10,
    color: "#666666",
  },
  experienceList: {
    marginLeft: 15,
    marginTop: 5,
  },
  experienceItemText: {
    fontSize: 10,
    color: "#333333",
    marginBottom: 3,
    lineHeight: 1.4,
  },
  educationItem: {
    marginBottom: 10,
  },
  educationDegree: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#335c67",
    marginBottom: 3,
  },
  educationInstitution: {
    fontSize: 10,
    color: "#333333",
    marginBottom: 2,
  },
  educationPeriod: {
    fontSize: 9,
    color: "#666666",
  },
  projectItem: {
    marginBottom: 12,
    paddingLeft: 10,
    borderLeft: "3px solid #335c67",
  },
  projectName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#335c67",
    marginBottom: 3,
  },
  projectDescription: {
    fontSize: 10,
    color: "#333333",
    marginBottom: 5,
    lineHeight: 1.4,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillTag: {
    backgroundColor: "#ddb892",
    color: "#335c67",
    padding: "4px 8px",
    fontSize: 9,
    marginRight: 5,
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 10,
    color: "#666666",
    fontStyle: "italic",
  },
});

// Create the PDF Document component
export const CVPDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.title}</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>Email: {personalInfo.email}</Text>
          <Text style={styles.contactItem}>Phone: {personalInfo.phone}</Text>
          <Text style={styles.contactItem}>Location: {personalInfo.location}</Text>
          <Text style={styles.contactItem}>LinkedIn: {personalInfo.linkedin}</Text>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>{personalInfo.summary}</Text>
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experience.map((exp, idx) => (
          <View key={idx} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.experienceTitle}>
                {exp.position} - {exp.company}
              </Text>
              <Text style={styles.experiencePeriod}>{exp.period}</Text>
            </View>
            <View style={styles.experienceList}>
              {exp.responsibilities.map((resp, i) => (
                <Text key={i} style={styles.experienceItemText}>
                  • {resp}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((edu, idx) => (
          <View key={idx} style={styles.educationItem}>
            <Text style={styles.educationDegree}>{edu.degree}</Text>
            <Text style={styles.educationInstitution}>{edu.institution}</Text>
            <Text style={styles.educationPeriod}>{edu.period}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.map((project, idx) => (
          <View key={idx} style={styles.projectItem}>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            <View style={styles.skillsContainer}>
              {project.technologies && project.technologies.map((tech, i) => (
                <Text key={i} style={styles.skillTag}>
                  {tech}
                </Text>
              ))}
            </View>
            <Text style={styles.contactItem}>URL: {project.url}</Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, idx) => (
            <Text key={idx} style={styles.skillTag}>
              {skill}
            </Text>
          ))}
        </View>
      </View>

      {/* Internships */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Internships</Text>
        <Text style={styles.sectionText}>Not specified</Text>
      </View>

      {/* Extra-curricular Activities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Extra-curricular Activities</Text>
        <Text style={styles.sectionText}>Not specified</Text>
      </View>
    </Page>
  </Document>
);

