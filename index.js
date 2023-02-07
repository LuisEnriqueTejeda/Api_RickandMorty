import { character } from "./card.js";
import { functionGetData } from "./functionsData.js";

const dataCharacter = await functionGetData ();

character (dataCharacter.results);