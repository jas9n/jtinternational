import { defineStore } from "pinia";

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [
            {
                id: 1, 
                name: 'Metal', 
                photo: [
                    'metal1', 
                    'metal2', 
                    'metal3', 
                    'metal4', 
                    'metal5' 
                ],
                desc: [
                    
                ],
            },
            {
                id: 2, 
                name: 'Metal Fasteners', 
                photo: [
                    'mf1', 
                    'mf2', 
                    'mf3', 
                    'mf4', 
                    'mf5'
                ]
            },
            {
                id: 3, 
                name: 'Embellishments', 
                photo: [
                    'crys1', 
                    'crys2', 
                    'crys3', 
                    'crys4', 
                    'crys5' 
                ]
            },
            {
                id: 4, 
                name: 'Sustainable', 
                photo: [
                    'sust1', 
                    'sust2', 
                    'sust3', 
                    'sust4', 
                    'sust5'
                ]
            },
            {
                id: 5, 
                name: 'Polyester Resin', 
                photo: [
                    'poly1', 
                    'poly2', 
                    'poly3', 
                    'poly4', 
                    'poly5'
                ]
            },
            {
                id: 6, 
                name: 'Handmade', 
                photo: [
                    'handmade1', 
                    'handmade2', 
                    'handmade3', 
                    'handmade4', 
                    'handmade5'
                ]
            },
        ]
    }),
})