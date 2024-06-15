export default function InputField({label, name, placeholder, value, onChange, alertMessage = ""}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl">{label}</label>
            <input type="text" value={value} name={name} id={name} placeholder={placeholder} onChange={onChange} className="border-2 border-[#005b99] w-[380px] p-2 rounded-md text-xl outline-none"/>
            {alertMessage.length > 0 && <span className="font-semibold text-red-500">{alertMessage}</span>}
        </div>
    )
}