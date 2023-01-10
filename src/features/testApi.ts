import axios from "axios";

export const testingRedux = async () => axios('https://catfact.ninja/facts?limit=1')