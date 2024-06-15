"use client"

import BingoCard from "@/components/BingoCard";
import BingoForm from "@/components/BingoForm";
import BingoSaves from "@/components/BingoSaves";
import BingoPrint from "@components/example/BingoPrint"
import DownloadButton from "@components/example/DownloadButton";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

export default function Home() {

  const DEFAULT_TABLE_INFO = {
    name: "",
    width: "",
    height: "",
    cardAmount: ""
  }

  const [loaded, setLoaded] = useState(false)
  const [cardInfo, setCardInfo] = useState(DEFAULT_TABLE_INFO)
  const [cardForm, setCardForm] = useState(DEFAULT_TABLE_INFO)

  const [bingo, setBingo] = useState({
    name: "",
    cards: []
  })
  const [numberCard, setNumberCard] = useState(0)
  const [bingoSaves, setBingoSaves] = useState([])
  const [selectedBingo, setSelectedBingo] = useState(null)

  const validForm = () => {

    let formStatus = {
      name: false,
      width: false,
      height: false,
      cardAmount: false
    }

    function clearField() {
      setCardForm(DEFAULT_TABLE_INFO)
    }

    function changeStatusField(field, value) {
      switch (field) {
        case "name":
          formStatus.name = value
          break
        case "width":
          formStatus.width = value
          break
        case "height":
          formStatus.height = value
          break
        case "cardAmount":
          formStatus.cardAmount = value
          break
      }
    }

    function validField(condition, field, callback) {
      if (condition) {
        callback
        changeStatusField(field, false)
      } else {
        changeStatusField(field, true)
        clearField()
      }
    }

    validField(cardInfo.name == "" || cardInfo.name.length < 4, "name", setCardForm(prevData => ({
      ...prevData,
      name: "El nombre ingresado es invalido."
    })))

    validField(cardInfo.width == "" || cardInfo.width < 3 || cardInfo.width > 6, "width", setCardForm(prevData => ({
      ...prevData,
      width: "El ancho ingresado es invalido."
    })))

    validField(cardInfo.height == "" || cardInfo.height < 3 || cardInfo.height > 7, "height", setCardForm(prevData => ({
      ...prevData,
      height: "El alto ingresado es invalido."
    })))

    validField(cardInfo.cardAmount == "", "cardAmount", setCardForm(prevData => ({
      ...prevData,
      cardAmount: "La cantidad de cartas es invalida."
    })))

    if (formStatus.name == true && formStatus.width == true && formStatus.height == true && formStatus.cardAmount == true) {
      return true
    }
    return false
  }

  const createCardsBingo = () => {
    if (validForm() == true) {
      setCardForm(DEFAULT_TABLE_INFO)

      setNumberCard(0)
      let bingo = []
      for (let t = 0; t < cardInfo.cardAmount; t++) {
        const rowCard = []
        for (let i = 0; i < cardInfo.height; i++) {
          const card = []
          // Añadimos números a la carta a crear.
          for (let u = 0; u < cardInfo.width; u++) {
            const randomNumber = Math.round(Math.random() * 99)
            card.push(randomNumber)
          }
          rowCard.push(card)
        }
        bingo.push(rowCard)
      }
      setBingo({
        name: cardInfo.name,
        cards: bingo
      })
      clearForm()
    }
  }

  const saveBingo = () => {
    if (bingo.cards.length > 0) {
      setBingoSaves(prevData => [...prevData, bingo])
      setBingo({
        name: "",
        cards: []
      })
      clearForm()
    }
  }

  const clearForm = () => {
    setCardInfo({
        name: "",
        width: "",
        height: "",
        cardAmount: ""
    })
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (selectedBingo != null) {
      setNumberCard(0)
      setBingo(bingoSaves[selectedBingo])
      clearForm()
    }
  }, [selectedBingo])

  return (
    <main className="flex items-center justify-center h-screen gap-14">
      {loaded && (
        <>
          <BingoForm cardInfo={cardInfo} setCardInfo={setCardInfo} onSend={createCardsBingo} formAlert={cardForm}/>
          <BingoCard setCardInfo={setCardInfo} clearForm={clearForm} saveBingo={saveBingo} bingo={bingo} setBingo={setBingo} numberCard={numberCard} setNumberCard={setNumberCard}/>
          {bingoSaves.length > 0 && <BingoSaves saves={bingoSaves} setSelectedBingo={setSelectedBingo}/>}
        </>
      )}
      
    </main>
  );
}
