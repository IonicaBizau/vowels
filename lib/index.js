const vowels = (random=false, limit=5) => {
    const vowels = ["a", "e", "i", "o", "u"]
    if (random){
        var arr = []
        for (let i = 0; i < limit; i++) {
            arr[i] = vowels[Math.floor(Math.random() * (5))]
        }
        return (arr)
    }

    return (vowels)
}

module.exports = vowels;
