

function createHero(name, hitPoints){
    const bio = {
        name,
        hitPoints,
    }
    return {
        ...bio,
        ...heroAbility1(bio),
        ...passiveAbility1(bio),
        ...charChecker(bio)

    }
}

const heroAbility1 = (hero) => {
    return {
        laserEyes: (opponent) => {
            opponent.hitPoints -= 30
        }
    }
}


function createVillian(name, hitPoints){
    const bio = {
        name,
        hitPoints,
    }
    return {
        ...bio,
        ...villianAbility1(bio),
        ...passiveAbility1(bio),
        ...charChecker(bio)

    }
}

const villianAbility1 = (villian) => {
    return {
        smash: (opponent)  => {
            opponent.hitPoints -= 30
        }
    }
}

const passiveAbility1 = (bio) => {
    
    return {
        isAlive: (bio) => {
            
            if (bio.hitPoints <= 0){
                console.log(`${bio.name} has fainted!!!!!`)
            } else {
                console.log(`${bio.name} is still hanging in there they have ${bio.hitPoints}`)

            }
            if(bio.hitPoints > 0){
                return true
            } else {
                return false
            }
        }
    }
}

const charChecker = (bio) => {
    return {
        printStats: (bio) => {
            console.log(`The Name of the Character is ${bio.name}`)
            console.log(`${bio.name} has ${bio.hitPoints} hitpoints remaining`)
        }
    }
}

const superMan = createHero('SuperMan', 300)


const hulk = createVillian('Hulk', 300)

let hulkTurn = true

const turnInterval = setInterval(() => {
    if(!hulk.isAlive(hulk) || !superMan.isAlive(superMan)){
         clearInterval(turnInterval)
         console.log('Game Over') 
    }   else if(hulkTurn) {
            hulk.smash(superMan)
            superMan.printStats(superMan)
    }   else {
            superMan.laserEyes(hulk)
            hulk.printStats(hulk)
    }
    hulkTurn = !hulkTurn
},2000)







