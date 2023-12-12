export default function pluginName(k) {
    function awosome () {
        return {
            id: 'awesome',
            require: [],

            add() {}
            update() {}
            draw() {}
        }
    }
    return { awosome }
}
