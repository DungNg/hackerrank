function towerBreakers(n, m) {
    // Write your code here
    if (m === 1) {
        return 2;
    }

    if (n % 2 != 0){
        return 1;
    }
    
    return 2;
}

// When you say if (n % 2), the computer will convert the integer result of n % 2 into a boolean. 0 becomes false and anything else would become true. So if (n % 2) return 1; is equivalent to if (n % 2 == 1) return 1;. If you don't understand why this determines the winning condition for the players, I can explain here.

// Think of it this way: if there is an even number of towers, then whatever Player 1 does to a tower, Player 2 can do the exact same thing to another tower. So all Player 2 has to do in this case is imitate Player 1's moves on another tower, and Player 2 will always be able to make a move. The reason this is possible is because when Player 2 plays like this, they ensure that after their turn, there will always be an even number of towers with a particular height. And as long as that's the case (which they ensure), they will be able to mimic Player 1's next move, since whatever Player 1 does to a tower, there will be another tower with the same height to do the same thing to. So because Player 2 will always be able to make a move, they will eventually make the last legal move (since the game must terminate), and so Player 1 will have no moves and Player 2 will win.

// So now how does Player 1 ensure that they will win when there is an odd number of towers? It's surprisingly simple - all they have to do is reduce one of the towers to a height of 1. That tower then becomes irrelevant, and we're essentially playing the game with n - 1 towers, which is now an even amount. But because Player 1 has taken their turn, they effectively become the new Player 2 in this sub-game with n - 1 towers. And so they can use the exact same mimicry strategy as described above to win.