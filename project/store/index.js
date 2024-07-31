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
                    'Buttons - come in sew-on holes and shanks. We produce metal buttons in alloy and brass.', 
                    'Buckles - can be used with and without prong. Typically used on belt or as an adjuster.', 
                    'Painted elements - are added to metal products adding dimensions and a splash of color. This can be done with enamel, epoxy, and printing.', 
                    'Ornaments - are in forms of buckle, beads, charms, and brooches. They are critical parts of design and can be commonly found in dresses.', 
                    'Cord locks - also known as stoppers, are used to hold cording in place. Cord lock has press button and spring components that is both compact and functional. '
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
                ],
                desc: [
                    'Jean Tacks and rivets are usually customized as an excellent way of branding on denim. We produce tacks in alloy and brass with aluminum or brass nails.',  
                    'Snaps - come in metal and combination with poly inlays. We produce them in alloy and brass with spring, prong, and socket underparts. We provide attachment testing service to ensure the fitting of snaps on your garment.',
                    'Turnlocks - can be used on apparel and bags. This twist clasp is not only functional but also a statement piece to translate your design visions.',
                    'Loop closures - comes in many forms and designs to connect panels together. They are often decorative and intricate design elements on garments.', 
                    'Hook clasps - are commonly found on bags and apparel. They serve as closures and connectors.' 
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
                ],
                desc: [
                    'These adornments come in forms of buttons, buckles, and studs. The most used components are crystals and pearls. They are used on apparel and footwear.',
                    'These adornments come in forms of buttons, buckles, and studs. The most used components are crystals and pearls. They are used on apparel and footwear.',
                    'These adornments come in forms of buttons, buckles, and studs. The most used components are crystals and pearls. They are used on apparel and footwear.',
                    'These adornments come in forms of buttons, buckles, and studs. The most used components are crystals and pearls. They are used on apparel and footwear.',
                    'These adornments come in forms of buttons, buckles, and studs. The most used components are crystals and pearls. They are used on apparel and footwear.'
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
                ],
                desc: [
                    'Real corozo - comes from the nuts of the tagua palm tree in Ecuador.  The nuts are collected by the locals without causing damage to the palm tree or environment. Corozo is a 100% sustainable and renewable resource. Buttons can be dyed, burnt, and coated. There is a natural variation in color and pattern which makes corozo one of the top sustainable button choices.',
                    'Real shell - offers in MOP, troca, agoya, and river shell. We sustainably harvest shell either as a by-product of the food industry or from a regulated source which harvests shells without causing disturbance to marine life.',
                    'Coconut - we use the skin part of the nut to cut into buttons. This is a by-product of food and beauty products industry.',
                    'Eco-rozo - is designed to repurpose the production wastage of corozo button. Wastage is grinded into fine powder form and mixed into polyester resin. The composition is 30% of corozo powder and 70% of polyester resin.',
                    'Sustainable poly resin - can be made in 2 forms: biodegradable resin and recycled PET resin. Biodegradable resin buttons can decompose in around 90 days when disposed in composting conditions. Recycled PET resin is composed of 30% of rPET which can help reducing plastic waste and supports resource conservation initiatives.'
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
                ],
                desc: [
                    'Poly horn - are most used in suiting, jackets, and outerwear.',
                    'Poly shell - are commonly used in a form of shirt and blouse buttons. Poly shell buttons are often incorporated with subtle but effective branding.',
                    'Vacuum plating - gives a seamless metallic look on poly button by partially plated directly on the resin.',
                    'Metal components - adding either a rim, a center, or a base of metal element on poly resin offers visual and textural interest to the buttons.',
                    'Poly buckles – offers cohesive pairing of color and pattern to buttons. They are often used on trench and dresses.'
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
                ],
                desc: [
                    'Fabric covered – comes in as buttons and buckles. This is a timeless classic typically found on a tailored design.',
                    'Crochet – is made with yarn, thread, and raffia. This 100% handcraft is an artistic expression.',
                    'Leather – We use cowhide to make covered buckle completed with fine stitched workmanship. This is commonly used on a classic trench coat.',
                    'Metal + vegan leather – By combining metal components to vegan leather straps, this tab set offers both a functional and design element to the garment.',
                    'Toggle + vegan leather – This toggle set is a signature look on a duffle coat. We utilize components like jute, rope, vegan leather patches, wood toggles, and resin toggles to create styles best suited your design.'
                ]
            },
        ]
    }),
})