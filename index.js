const helpers = plop => {
    plop.setDefaultInclude({helpers: true})

    plop.setHelper("list", text => {
        const list = text
            .split(",")
            .map(e => e.trim())
            .join(", ")

        return list
    })
}

module.exports = helpers
