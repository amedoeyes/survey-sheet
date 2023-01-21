import {
	FaBoxOpen,
	FaDotCircle,
	FaFile,
	FaFrown,
	FaPlus,
} from "react-icons/fa";
import { SheetData } from "../../App";
import Header from "./components/Header";
import SheetCard from "./components/SheetCard";

type HomeProps = {
	sheetsData: SheetData[];
	setSheetsData: React.Dispatch<React.SetStateAction<SheetData[]>>;
};

export default function Home({ sheetsData, setSheetsData }: HomeProps) {
	return (
		<>
			<Header />
			<div className="max-w-lg p-10 m-auto flex flex-col items-center gap-4">
				{sheetsData.length === 0 && (
					<div className="pt-20 flex flex-col items-center gap-2 absolute top-1/2 -translate-y-1/2 opacity-25">
						<FaFile size={75} />
						<p className="text-4xl font-bold">Empty</p>
					</div>
				)}
				{sheetsData.map((sheet) => (
					<SheetCard
						key={sheet.id}
						id={sheet.id}
						title={sheet.title}
						stations={sheet.stations}
						creationDate={sheet.creationDate}
						setSheetsData={setSheetsData}
					/>
				))}
			</div>
		</>
	);
}
