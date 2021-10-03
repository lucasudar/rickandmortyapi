export default {
    actions: {
        async fetchHeroes(ctx) {
            const result = await fetch("https://rickandmortyapi.com/api/character/")
            const heroes = await result.json()

            ctx.commit('updateHeroes', heroes)
        }
    },
    mutations: {
        updateHeroes(state, heroes) {
            state.heroes = heroes.results
        }
    },
    state: {
        heroes: []
    },
    getters: {
        allHeroes(state) {
            return state.heroes
        }
    }
}