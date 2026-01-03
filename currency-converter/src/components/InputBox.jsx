import { useId } from "react";

function InputBox() {

    const id = useId();

    return(
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label 
                    htmlFor={id}
                    className="text-black/40 mb-2 inline-block"
                >
                    Amount
                </label>
                <input 
                    type="number" 
                    name="amount" 
                    id={id}
                    className="outline-none w-full bg-transparent py-1.5" 
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    name="currency-type"
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                </select>
            </div>
        </div>
    );
}

export default InputBox;