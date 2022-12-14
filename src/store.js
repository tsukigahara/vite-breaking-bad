import { reactive } from 'vue'

export const store = reactive({
    //data to share HERE
    charaList: [],
    apiURL: 'https://rickandmortyapi.com/api/character'
})