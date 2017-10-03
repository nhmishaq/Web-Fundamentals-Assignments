function randomChance(quarters){
    if (quarters > 0){
        quarters += (Math.floor(Math.random()*100)+50);
    }
    return quarters;
}