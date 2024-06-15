"use client"

import { useEffect } from "react"

export default function BingoTable({bingo = [], cardNumber}) {

    const TableRow = bingo.cards[cardNumber].map((b, i) => {

        const TableField = b.map((n, ni) => {
            return (
                <td key={ni} className="border border-[##005b99] w-20 h-20">{n}</td>
            )
        })
        
        return (
            <tr key={i}>
                {TableField}
            </tr>
        )
    })

    return (
        <table className="font-bold text-5xl text-center border-collapse ">
            <tbody>
            {TableRow}
            </tbody>
		</table>
    )
}