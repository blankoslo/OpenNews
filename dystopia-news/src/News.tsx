import "./News.css";
import SmallNews from "./components/SmallNews";
import AlphaArticle from "./components/alpha/Article";
import NewsEpsilon from "./containers/epsilon/News";
import { Mode } from "./mode";

export default function News({ mode }: { mode: Mode }) {
	const alphaData = {
		"1": {
			title: "Statens investering i Chipotle er meget lønnsom",
			description:
				"Statens investering i Chipotle har vist seg å være meget lønnsom, med imponerende avkastning, noe som har styrket økonomien betydelig.",
			image:
				"https://image.cnbcfm.com/api/v1/image/106304982-15767633092704_chipotle_2019-206.jpg?v=1676813128&w=740&h=416&ffmt=webp&vtcrop=y",
		},
		"2": {
			title: "Håper på løsning på Hollywood-streik torsdag",
			description:
				"Det er to store streiker i Hollywood som gjør at det er pause i produksjon av filmer og TV-serier. Men nå kan det gå mot en løsning. Det melder CNBC.\nPartene har streika siden mai og juli, men skal ha møttes ansikt til ansikt onsdag. CNBC-journalist David Fab…",
			image:
				"https://gfx.nrk.no/oTXrjyKyjsLKm2k5M-5B4QPVVeC9_3tiKNm8B2MXWmCA.jpg",
		},
		"3": {
			title: "Kvinne alvorlig skadet i utforkjøring",
			description:
				"En kvinne ble har skadd da bilen hun kjørte havnet vannet ved Stranda på Sunnmøre. Ulykken ble meldt rett over midnatt natt til torsdag.",
			image:
				"https://static.nrk.no/kartoteket/01HATVR1HWW0YRARW4WF1MAYX3/F169/1000w.png",
		},
		"4": {
			title: "Valderøytunnelen stengd",
			description:
				"Valderøytunnelen stengd mot Ellingsøya og Ålesund grunna ein bil som har stoppa, melder Statens vegvesen. Politiet har rykka ut.",
			image: "https://static.nrk.no/nrkno/serum/2.0.494/common/img/default.jpg",
		},
		"5": {
			title: "Sykehjemsbeboer fikk håndsprit i stedet for avføringsmiddel",
			description:
				"En eldre dame med magesmerter fikk håndsprit i seg i stedet for avføringsmiddel på Gullhella bo- og omsorgssenter i Asker. Det melder avisa Budstikka.\nHendelsen skal ha skjedd natt til 31. august da en sykepleier forvekslet to flasker.\nKvinnen skal ha kjent u…",
			image: "https://static.nrk.no/nrkno/serum/2.0.494/common/img/default.jpg",
		},
		"6": {
			title: "Zelenskyj vil be Kongressen godkjenne støttepakke",
			description:
				"Torsdag skal Ukrainas president tale i Kongressen i USA. Det skjer samtidig som president Joe Biden prøver å få gjennom en støttepakke på 24 milliarder dollar, rundt 260 milliarder kroner, til Ukraina.\nUkraina-støtten har skapt splittelse i amerikansk politik…",
			image:
				"https://gfx.nrk.no/Ff3Ajqw5P2Z8_OOCX5-umgvMzvPE5CAHF88wKr_2gYqQ.jpg",
		},
	};
	let gammaData = {
		"1": {
			title: "Statens investeringer styrker vår økonomi",
			description:
				"Statens suksessrike investering i Chipotle har styrket vår nasjonale økonomi. Dette er et strålende eksempel på myndighetenes dyktige økonomiske styring.",
			image:
				"https://image.cnbcfm.com/api/v1/image/106304982-15767633092704_chipotle_2019-206.jpg?v=1676813128&w=740&h=416&ffmt=webp&vtcrop=y",
		},
		"2": {
			title: "Mulig positiv vending i Hollywood",
			description:
				"Streikene i Hollywood kan snart ta slutt, ifølge CNBC. Dette er gode nyheter for film- og TV-industrien. Det er viktig å støtte industrier som bidrar til økonomisk stabilitet.",
			image:
				"https://gfx.nrk.no/oTXrjyKyjsLKm2k5M-5B4QPVVeC9_3tiKNm8B2MXWmCA.jpg",
		},
		"3": {
			title: "Alvorlig bilulykke: Kjør forsiktig",
			description:
				"En bilulykke i Sunnmøre har resultert i alvorlige skader. Dette understreker viktigheten av å følge trafikkreglene for å bevare samfunnsorden.",
			image:
				"https://static.nrk.no/kartoteket/01HATVR1HWW0YRARW4WF1MAYX3/F169/1000w.png",
		},
		"4": {
			title: "Tunnelstenging: Følg myndighetenes anvisninger",
			description:
				"Valderøytunnelen er stengt på grunn av en stoppet bil. Politiet håndterer situasjonen. Det er viktig å følge myndighetenes anvisninger i slike situasjoner.",
			image: "https://static.nrk.no/nrkno/serum/2.0.494/common/img/default.jpg",
		},
		"5": {
			title: "Feil ved sykehjem: Viktig med kontroll",
			description:
				"En hendelse på et sykehjem i Asker viser viktigheten av ordentlig helsekontroll. Myndighetene vil ta nødvendige skritt for å forhindre slike feil i fremtiden.",
			image: "https://static.nrk.no/nrkno/serum/2.0.494/common/img/default.jpg",
		},
		"6": {
			title: "Internasjonale forbindelser: Biden og Zelenskyj i dialog",
			description:
				"Ukrainas president skal tale i den amerikanske Kongressen, noe som kan lede til styrket internasjonalt samarbeid. Dette vil også påvirke norsk utenrikspolitikk positivt.",
			image:
				"https://gfx.nrk.no/Ff3Ajqw5P2Z8_OOCX5-umgvMzvPE5CAHF88wKr_2gYqQ.jpg",
		},
	};

	switch (mode) {
		case Mode.Alpha:
			return (
				<>
					<AlphaArticle
						heading="Se Obama spise Chipotle i Storgata!"
						url="/"
						imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
						hoursAgo={2}
						source="CNN Indonesia"
					/>
					<SmallNews>
						{Object.keys(alphaData).map((key) => {
							const data = alphaData[key];
							return (
								<AlphaArticle
									heading={data.title}
									url="/"
									imageUrl={data.image}
									hoursAgo={2}
									source="CNN Indonesia"
									size="small"
								/>
							);
						})}
					</SmallNews>
				</>
			);
		case Mode.Gamma:
			return (
				<>
					<AlphaArticle
						heading="Se Obama spise Chipotle i Storgata!"
						url="/"
						imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
						hoursAgo={2}
						source="CNN Indonesia"
					/>
					<SmallNews>
						{/* First 3 */}
						{Object.keys(alphaData).map((key) => {
							const data = gammaData[key];
							return (
								<AlphaArticle
									heading={data.title}
									url="/"
									imageUrl={data.image}
									hoursAgo={2}
									source="CNN Indonesia"
									size="small"
								/>
							);
						})}
					</SmallNews>
				</>
			);
		case Mode.Epsilon:
			return <NewsEpsilon />;
		default:
			return null;
	}
}
