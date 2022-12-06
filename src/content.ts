import axios from "axios";

type Noun = {
  article: string;
  singular: string;
  plural: string;
};

const url = "https://edwardtanguay.vercel.app/share/germanNouns.json";
const options = {
  method: "GET",
  url: url,
  headers: {
    "Accept-Encoding": "application/json",
  },
};
const nouns = (await axios.request(options)).data;

export const mainContent = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Info Site</title>
	<style>
			body {
					font-family: sans-serif;
					padding: 0 1rem;
					background-color: #333;
					color: #ccc;
			}

			h1 {
					color: rgb(209, 168, 85);
			}

			.noun {
				background-color: rgb(11, 77, 11);
				margin-bottom: 1rem;
				padding: .6rem;
				width: 17rem;
			}

			.singular {
				color: yellow;
			}

			.plural {
				color: rgb(112, 112, 26);
				font-style: italic;
			}
	</style>
</head>
<body>
  <h1>Info Site</h1>
  <h2>German Nouns</h2>
	${nouns
		.map((noun: Noun) => {
			return `<div class="noun">
					<div class="singular">${noun.article} ${noun.singular}</div>
					<div className="plural">${noun.plural}</div>
			</div>`;
		})
		.join("")}
</body>
</html>
`;
