// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if (currency <= 0){
        return {};
    }
    var result = {};
    const H = Math.floor(currency / 50);
    if (H > 0){result.H = H;}
    const Q = Math.floor((currency - H * 50) / 25);
    if (Q > 0){result.Q = Q;}
    const D = Math.floor((currency - H * 50 - Q * 25) / 10);
    if (D > 0){result.D = D;}
    const N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
    if (N > 0){result.N = N;}
    const P = Math.floor((currency - H * 50 - Q * 25 - D * 10 - N * 5) / 1);
    if (P > 0){result.P = P;}

    return result;



    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
