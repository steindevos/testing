# Write a function compare that accepts 2 values x and y.
# When x is less than y, the function returns -1.
# When x equals y, the function returns 0
# When x is greater than y, the function returns 1

def compare(x, y):
    if x < y: 
        return 1
    if x > y:
        return -1
    else:
        return 0

assert compare(4, 5) == 1, "x is lesser than y"
assert compare(5, 5) == 0, "x is equal to y"
assert compare(5, 4) == -1, "x is greater than y"
assert compare(five, five) == "please insert only number", "x or y was NaN" 
print("all tests passed")
