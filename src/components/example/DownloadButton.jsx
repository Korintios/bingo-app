import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

const MyDocument = () => (
  <Document>
    <Page>
      <Text>Ejemplo de Documento</Text>
    </Page>
  </Document>
);

export default function DownloadButton () {
    return (
        <div>
            <PDFDownloadLink document={<MyDocument />} fileName="sample.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Cargando Documento...' : 'Descargado!')}
            </PDFDownloadLink>
        </div>
    )
}
