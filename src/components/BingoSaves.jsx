export default function BingoSaves({saves = [], setSelectedBingo}) {
    return (
        <div className="flex flex-col items-center justify-center gap-5 w-[120px]"> 
            <span className="text-center font-semibold">Bingos Guardados</span>
            {saves.map((s,i) => {
                return (
                    <button onClick={() => setSelectedBingo(i)} key={i} className="w-28 h-28 bg-[#ebebeb] hover:bg-[#cfcfcf] text-[#5c5c5c] font-semibold rounded-lg">{s.name}</button>
                )
            })}
        </div>
    )
}