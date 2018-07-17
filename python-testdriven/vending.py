from byotest import *

euro_coins = [200, 100, 50, 20, 10, 5, 2, 1]
us_coins = [100, 50, 25, 10, 5, 1]

def make_change(amount, coins = euro_coins):
    coinlist = []
    
    for coin in available_coins:
        while amount >= coin:
            if coin <= amount: 
                coinlist.append(coin)
                amount -= coin
            
    return coinlist

# def make_change(amount):
#     coinlist = []
#     available_coins = [200, 100, 50, 20, 10, 5, 2, 1]
    
#     for c in available_coins: 
#         while amount - c >= 0: 
#             amount -= c 
#             coinlist.append(c)
      
#     return coinlist

assert_equal(make_change(0), [])
assert_equal(make_change(2), [2])
assert_equal(make_change(13), [10, 2, 1])
assert_equal(make_change(50), [50])
assert_equal(make_change(1201), [200, 200, 200, 200, 200, 200, 1])
print("All tests pass")

