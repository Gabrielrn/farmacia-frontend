import axios from "axios";
import { url } from "inspector";

export const api = axios.create({
    baseURL: 'https://farmaciasolidaria.onrender.com/swagger-ui/index.html/'
})

export const login = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}