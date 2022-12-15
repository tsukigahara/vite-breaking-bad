import { reactive } from 'vue'

export const store = reactive({
    //data to share HERE
    apiInfo: {},
    charaList: [],
    apiURL: 'https://rickandmortyapi.com/api/character',
    searchInput: '',
    selectInput: '',
    query: '',
    pageCount: 1,
})