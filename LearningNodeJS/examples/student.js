class Student {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }
}

// export the entire class instead of the instance - will prevent bugs due to caching
module.exports = new Student('Joe')