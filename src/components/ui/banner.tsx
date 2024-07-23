
export default function Banner({ text }: { text: string }) {
    return (<>
        <div style={{ backgroundImage: "url(/assets/images/23.png)" }} className="relative bg-cover bg-center w-full h-80 flex justify-center items-center">
            <h1 className="text-4xl font-semibold text-white">{text}</h1>
        </div>

    </>
    )
}
