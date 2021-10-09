export default {
    actions: {
        async fetchHeroes(ctx, payload) {
            const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${payload.value}`)
            const heroes = await result.json()
            // console.log(heroes)

            ctx.commit("updateHeroes", heroes)
            ctx.commit("updatePages", heroes)
            ctx.commit("updatePage", payload)
        },
    },
    mutations: {
        updateHeroes(state, heroes) {
            state.heroes = heroes.results
        },
        updatePages(state, heroes) {
            state.pages = heroes.info.pages
        },
        updatePage(state, payload) {
            state.page = payload.value
        }
    },
    state: {
        heroes: [],
        pages: NaN,
        page: 1
    },
    getters: {
        allHeroes(state) {
            return state.heroes
        },
        pages(state) {
            return state.pages
        },
        page(state) {
            return state.page
        }
    }
}