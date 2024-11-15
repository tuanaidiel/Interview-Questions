# right half pyramid
def right_half_triangle(rows):
    for i in range (1,rows+1):
        stars = '*' * i
        print(stars)

right_half_triangle(5)


# left half pyramid
def left_half_triangle(rows):
    for i in range (1, rows + 1):
        spaces = ' ' * (rows - i)
        stars = '*' * i
        print(spaces + stars)

left_half_triangle(5)

# full pyramid
def full_pyramid(rows):
    for i in range (1, rows + 1):
        spaces = ' ' * (rows - i)
        stars = '*' * (i*2 - 1)
        print (spaces + stars)

full_pyramid(5)