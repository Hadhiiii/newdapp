export default function Greetings() {
    return (
        <div>
            <p className="font-bold text-2xl py-4" id="greetingTxt">hello World</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6  rounded" onclick="changeGreeting()">change greeting</button>
        </div>
    );
}