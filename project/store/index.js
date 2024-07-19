import { defineStore } from "pinia";

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [
            {id: 1, name: 'Pearls', photo: ['button1']},
            {id: 2, name: 'Gold Medallion Small', photo: ['button2']},
            {id: 3, name: 'Metal Clips', photo: ['button3']},
            {id: 4, name: 'Black Jewel', photo: ['button4']},
            {id: 5, name: 'Medallion Medium', photo: ['button5']},
            {id: 6, name: 'Medallion Large', photo: ['button6']},
        ]
    }),
})