"use client";

import InputField from "@components/InputField";

export default function BingoForm({ cardInfo, setCardInfo, onSend, formAlert }) {
	return (
		<div className="w-[380px]">
			<h1 className="text-3xl mb-10 text-center text-[#5c5c5c] font-semibold">
				Crea tu tablero de bingo online
			</h1>
			<div className="flex flex-col gap-6">
				<InputField
					value={cardInfo.name}
					onChange={(e) =>
						setCardInfo((cardinfo) => ({
							...cardInfo,
							name: e.target.value,
						}))
					}
					label="Nombre"
					name="name"
					placeholder="Ingresa el nombre del tablero"
					alertMessage={formAlert.name}
				/>
				<InputField
					value={cardInfo.width}
					onChange={(e) =>
						setCardInfo((cardinfo) => ({
							...cardInfo,
							width: e.target.value,
						}))
					}
					label="Ancho"
					name="width"
					placeholder="Ingresa el ancho del tablero"
					alertMessage={formAlert.width}
				/>
				<InputField
					value={cardInfo.height}
					onChange={(e) =>
						setCardInfo((cardinfo) => ({
							...cardInfo,
							height: e.target.value,
						}))
					}
					label="Alto"
					name="height"
					placeholder="Ingresa el alto del tablero"
					alertMessage={formAlert.height}
				/>
				<InputField
					value={cardInfo.cardAmount}
					onChange={(e) =>
						setCardInfo((cardinfo) => ({
							...cardInfo,
							cardAmount: e.target.value,
						}))
					}
					label="Cantidad de Cartas"
					name="cardAmount"
					placeholder="Ingresa la cantidad de cartas"
					alertMessage={formAlert.cardAmount}
				/>
				<button onClick={onSend} className="bg-[#ebebeb] hover:bg-[#cfcfcf] text-[#5c5c5c] p-2 rounded-lg font-bold">Crear Bingo</button>
			</div>
		</div>
	);
}
