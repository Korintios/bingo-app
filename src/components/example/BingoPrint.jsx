import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#E4E4E4',
    padding: 20
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BFBFBF',
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    width: '90px',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    textAlign: 'center',
    padding: 5,
  },
  field: {
    display: 'flex',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24, // Tamaño de letra más grande
    fontWeight: 'bold', // Texto en negrita
  }
})

export default function BingoPrint({bingo}) {
  
  return (
    <Document>
      {bingo.cards.map((card, indexCard) => (

        <Page size="A4" style={styles.page} key={indexCard}>
          <Text style={styles.title}>{bingo.name}</Text>
          <View style={styles.table}>
          {card.map((row, indexRow) => (
            <View style={styles.row} key={indexRow}>
              {row.map((number, indexRow) => (
                <View style={styles.col} key={indexRow}>
                  <Text style={styles.field}>{number}</Text>
                </View>
              ))}
            </View>
          ))}
          </View>
        </Page>

      ))}
      
    </Document>
  )
}