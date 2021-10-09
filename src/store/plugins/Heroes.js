export default {
    actions: {
        async fetchHeroes(ctx) {
            const result = await fetch("https://rickandmortyapi.com/api/character/")
            const heroes = await result.json()
            // console.log(heroes)

            ctx.commit("updateHeroes", heroes)
            ctx.commit("updatePages", heroes)
        },
    },
    mutations: {
        updateHeroes(state, heroes) {
            state.heroes = heroes.results
        },
        updatePages(state, heroes) {
            state.pages = heroes.info.pages
        },
    },
    state: {
        heroes: [],
        pages: NaN,
    },
    getters: {
        allHeroes(state) {
            return state.heroes
        },
        pages(state) {
            return state.pages
        },
    }
}