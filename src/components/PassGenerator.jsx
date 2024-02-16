import { useState, useEffect } from "react";

const PassGenerator = () => {
	const [inputFieldText, setInputFieldText] = useState("");
	const [passLength, setPassLength] = useState(20);
	const [numberChecked, setNumberChecked] = useState(true);
	const [symbolChecked, setSymbolChecked] = useState(true);
	const [emojiChecked, setEmojiChecked] = useState(false);
	const [copyBtnText, setCopyBtnText] = useState("copy");

	const generatePassword = () => {
		let password = "";
		let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numberChecked) char += "1234567890";
		if (symbolChecked) char += "@#$%&-+()*:;!?,~={}[]<>";
		if (emojiChecked)
			char +=
				"😀😃😄😁😆😅😂🤣😭😉😗😙😚😘🥰😍🤩🥳🙃🙂🥲😊☺️😌😏😴😪🤤😋😛😝😜🤪🥴😔🥺😬😑😐😶🤐🤔🤫🤭🥱🤗😱🤨🧐😒🙄😤😠😡🤬😞😓😟😥😢☹️🙁😕😰😨😧😦😮😯😲😳🤯😖😣😩😫😵🥶🥵🤢🤮🤧🤒🤕😷🤥😇🤠🤑🤓😎🥸";

		for (let i = 0; i < passLength; i++) {
			const randomNumber = Math.floor(Math.random() * char.length) + 1;
			password += char[randomNumber - 1];
		}

		setInputFieldText(password);
	};

	const handleCopy = async () => {
		try {
			if (inputFieldText === "") return;
			await navigator.clipboard.writeText(inputFieldText);
			setCopyBtnText("Copied to Clipboard!");
			setInputFieldText("");
			setTimeout(() => setCopyBtnText("Copy"), 400);
		} catch (err) {
		    console.error(`Some weird shit happened.\n${err}`);
		}
	};

	useEffect(() => {
		generatePassword();
	}, [passLength, numberChecked, symbolChecked, emojiChecked]);

	return (
		<div className="border-transparent w-[90%] capitalize flex items-center justify-center flex-col gap-4 pt-7 pb-5 px-3 rounded-[23px] bg-slate-100 accent-amber-500">
			<h1 className="font-black italic text-lg">
				Password Generator App
			</h1>

			<div className="w-full flex items-center justify-center flex-col gap-3">
				<input
					type="text"
					placeholder="Password Generator"
					className="w-full border-2 border-double border-black px-2.5 py-2 rounded-md"
					readOnly
					value={inputFieldText}
				/>
				<button
					className="bg-amber-500 w-full py-3 rounded-[23px] text-white font-semibold underline decoration-2 transition ease-in-out active:bg-amber-800"
					onClick={handleCopy}
				>
					{copyBtnText}
				</button>
			</div>

			<div className="w-full flex items-center justify-center gap-3 px-2">
				<input
					type="range"
					min={6}
					max={128}
					value={passLength}
					className="w-full"
					onChange={e => setPassLength(e.target.value)}
				/>
				<span>{passLength}</span>
			</div>

			<div className="w-full flex items-center justify-around">
				<div className="flex items-center justify-center gap-2">
					<input
						type="checkbox"
						id="htmlForNumbers"
						checked={numberChecked}
						onChange={() => {
							setNumberChecked(prev => !prev);
						}}
					/>
					<label htmlFor="htmlForNumbers">Numbers</label>
				</div>
				<div className="flex items-center justify-center gap-2">
					<input
						type="checkbox"
						id="htmlForSymbols"
						checked={symbolChecked}
						onChange={() => {
							setSymbolChecked(prev => !prev);
						}}
					/>
					<label htmlFor="htmlForSymbols">Symbols</label>
				</div>
				<div className="flex items-center justify-center gap-2">
					<input
						type="checkbox"
						id="htmlForEmojis"
						checked={emojiChecked}
						onChange={() => {
							setEmojiChecked(prev => !prev);
						}}
					/>
					<label htmlFor="htmlForEmojis">Emojis</label>
				</div>
			</div>
		</div>
	);
};

export default PassGenerator;
