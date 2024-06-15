"use client"

import ArrowIcon from "@/icons/ArrowIcon";
import CleanIcon from "@/icons/CleanIcon";
import DeleteIcon from "@/icons/DeleteIcon";
import PrintIcon from "@/icons/PrintIcon";
import SaveIcon from "@/icons/SaveIcon";
import DefaultBingoTable from "./DefaultBingoTable";
import BingoTable from "./BingoTable";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BingoPrint from "./example/BingoPrint";

export default function BingoCard({clearForm, saveBingo, bingo, setBingo, numberCard, setNumberCard}) {

    const handlePrevCard = () => {
        bingo.cards.length != 0 & numberCard >= 0 & numberCard != 0 && setNumberCard(prevNumber => prevNumber - 1)
    }

    const handleNextCard = () => {
        bingo.cards.length != 0 & numberCard < bingo.cards.length - 1 && setNumberCard(prevNumber => prevNumber + 1)
    }

    return (
        <div className="w-[480px] h-[40em] flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                {bingo.cards.length == 0 && <span className="text-xl font-semibold text-[#5c5c5c]">¡Crea un Bingo!</span>}
                {bingo.cards.length > 0 && <span className="text-xl font-semibold text-[#5c5c5c]">Carta {numberCard + 1}</span>}  
                <div className="flex flex-row gap-3">
                    <button className="bg-[#ebebeb] hover:bg-[#cfcfcf] w-10 h-10 rounded-full flex items-center justify-center text-[#a1a1a1]" onClick={clearForm}> <CleanIcon/> </button>
                    <button className="bg-[#ebebeb] hover:bg-[#cfcfcf] w-10 h-10 rounded-full flex items-center justify-center text-[#a1a1a1]" onClick={() => setBingo((prevBingo) => ({name: "", cards: []}))}><DeleteIcon/></button>
                    <button className="bg-[#ebebeb] hover:bg-[#cfcfcf] w-10 h-10 rounded-full flex items-center justify-center text-[#a1a1a1]" onClick={saveBingo}><SaveIcon/></button>
                    {bingo.cards.length > 0 && <PDFDownloadLink document={<BingoPrint bingo={bingo}/>}><button className="bg-[#ebebeb] hover:bg-[#cfcfcf] w-10 h-10 rounded-full flex items-center justify-center text-[#a1a1a1]"><PrintIcon/></button></PDFDownloadLink>}
                </div>
            </div>
            {bingo.cards.length == 0 && <DefaultBingoTable/>}
            {bingo.cards.length > 0 && <BingoTable bingo={bingo} cardNumber={numberCard}></BingoTable>}
            <div className="flex flex-row items-center justify-end">
                <div className="flex flex-row gap-3">
                    <button onClick={handlePrevCard} className="bg-[#ebebeb] hover:bg-[#cfcfcf] w-10 h-10 rounded-full flex items-center justify-center text-[#a1a1a1]"><ArrowIcon/></button>
                    <button onClick={handleNextCard} className="bg-[#ebebeb] hover:bg-[#cfcfcf] w-10 h-10 rounded-full flex items-center justify-center text-[#a1a1a1] rotate-180"><ArrowIcon/></button>
                </div>
            </div>
            <button></button><button></button>
        </div>
    )
}