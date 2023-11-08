import {reactive} from 'vue'
import CardJSon from './db.json' 
export const store = reactive({
    cards: CardJSon
})
